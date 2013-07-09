var mongoose = require('mongoose'),
    lib = require('./myLibrary'),
    _ = require('underscore'),
    Schema = mongoose.Schema;

module.exports = {
  _postsSchema: null,
  _subsSchema: null,
  _moodel: null,
  _throttledPullData: null,

  _options: {
    host: 'www.reddit.com',
    //path, see start()
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  },
  _createSubsSchema: function() {
    return new mongoose.Schema({
      header_img: String,
      header_title: String,
      description: String,
      description_html: String,
      title: String,
      url: String,
      created: Number,
      created_utc: Number,
      public_description: String,
      accounts_active: String,
      over18: Boolean,
      header_size: Schema.Types.Mixed,
      subscribers: Number,
      display_name: String,
      id: String,
      name: {type: String, index: {unique: true, dropDups: true}}
    }, { autoIndex: true });
  },

  _createPostsSchema: function() {
    return new mongoose.Schema({
      domain:String,
      banned_by:String,
      media_embed: Schema.Types.Mixed,
      subreddit:String,
      selftext_html: Schema.Types.Mixed,
      selftext:Schema.Types.Mixed,
      likes:Schema.Types.Mixed,
      link_flair_text:Schema.Types.Mixed,
      id: String,
      clicked:Boolean,
      title:String,
      media:Schema.Types.Mixed,
      score:Number,
      approved_by:Schema.Types.Mixed,
      over_18:Boolean,
      hidden:Boolean,
      thumbnail:String,
      subreddit_id:String,
      edited:Boolean,
      link_flair_css_class:Schema.Types.Mixed,
      author_flair_css_class:Schema.Types.Mixed,
      downs:Number,
      saved:Boolean,
      is_self: Boolean,
      permalink: String,
      name: {type: String, index: {unique: true, dropDups: true}},
      created: Number,
      url: String,
      author_flair_text: Schema.Types.Mixed,
      author: String,
      created_utc: Number,
      ups: Number,
      num_comments: Number,
      num_reports: Schema.Types.Mixed,
      distinguished: Schema.Types.Mixed
    }, { autoIndex: true });
  },
  start: function(interval, path, schema) {
    //schema posts, subs
    this._throttledPullData = _.throttle(lib.getJSON, 2000);

    mongoose.connect("mongodb://localhost/RedditInsight");

    var self = this;
    var dataBase = mongoose.connection;

    dataBase.on('err', console.error.bind(console, 'connection error:'));

    dataBase.once('open', function(){
      console.log('connected to dataBase: ', dataBase.db.databaseName);
      if(schema === 'posts'){
        self._postsSchema = self._createPostsSchema();
        self._moodel = mongoose.model('AllTopPosts', self._postsSchema);
      } else if(schema === 'subs'){
        self._subsSchema = self._createSubsSchema();
        self._moodel = mongoose.model('allsubs', self._subsSchema);
      } else {
        throw "Unknown schema!: '"+ schema + "', should be posts or subs";
      }

      self._options.path = path;
      var intervalId = setInterval(function(intervalId) {
        self.pullData(intervalId);
      }, interval);
    });
  },
  pullData: function(intervalId){
    var self = this;
    this._moodel.count({}, function(err, count) {
      if(err){
        console.log('from count error: ', JSON.stringify(err));
        clearInterval(intervalId);
        console.log('Stopped intervalId: ', intervalId);
        throw JSON.stringify(err);
      } else if (count) {
        self._moodel.findOne({}, {name: 1}, {sort:{_id : -1}}, function (err, doc) {
          if(err){
            console.log('from find error: ', JSON.stringify(err));
            clearInterval(intervalId);
            console.log('Stopped intervalId: ', intervalId);
            throw JSON.stringify(err);
          }
          var afterString = "&after=" + doc.name;
          var editedOptions = _.clone(self._options);
          editedOptions.path = editedOptions.path + afterString;
          console.log('total count is ' + count  + ', name is ' + doc.name + ', using url: ', editedOptions.path);
          self._throttledPullData(editedOptions, self._saveResult, self);
        });
      } else if (count === 0) {
        console.log('first time access with no data, using url: ', self._options.path);
        self._throttledPullData(self._options, self._saveResult, self);
      }
    });
  },
  _saveResult: function(statusCode, result, self){
    var errorCallback = function(err, docs){
        if(err) {console.log("\n\nerror saving: ", data, "error: ", err);}
    }, data;
    for(var i = 0; i < result.data.children.length; i++){
      data = result.data.children[i].data;
      new self._moodel(data).save(errorCallback);
    }
  }
};
