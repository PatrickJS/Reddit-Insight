var mongoose = require('mongoose')
  , lib = require('./myLibrary')
  , _ = require('underscore')
  , Schema = mongoose.Schema;

exports.allPostsCollection = {
  _postModel: null,
  _postsSchema: null,
  _throttledPullData: null,

  _options: {
    host: 'www.reddit.com',
    path: '/r/all/top.json?t=all&limit=100',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  },

  _createPostsSchema: function(){
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
  start: function(interval){
    this._throttledPullData = _.throttle(lib.getJSON, 2000);

    if( !this._postsSchema ){
      this._postsSchema = this._createPostsSchema();
    }
    mongoose.connect("mongodb://localhost/RedditInsight");
    var db = mongoose.connection;

    db.on('err', console.error.bind(console, 'connection error:'));

    var self = this;
    db.once('open', function(){
      console.log('connected to db: ', db.db.databaseName);
      self._postModel = mongoose.model('AllTopPosts', self._postsSchema);
      var intervalId = setInterval( function(intervalId){
        self.pullData(intervalId);
      }, interval);
    });
    //pulling data
  },
  pullData: function(intervalId){
    var self = this;
    this._postModel.count({},function(err, count){
      if(err){
        console.log('from count error: ', JSON.stringify(err));
        clearInterval(intervalId);
        console.log('Stopped intervalId: ', intervalId);
        throw JSON.stringify(err);
      } else if(count){
        self._postModel.findOne({}, {name: 1}, {sort:{_id : -1}}, function (err, post) {
          if(err){
            console.log('from find error: ', JSON.stringify(err));
            clearInterval(intervalId);
            console.log('Stopped intervalId: ', intervalId);
            throw JSON.stringify(err);
          }
          var afterString = "&after=" + post.name;
          var editedOptions = _.clone(self._options);
          editedOptions.path = editedOptions.path + afterString;
          console.log('total count is ' + count  + ', name is ' + post.name + ', using url: ', editedOptions.path);
          self._throttledPullData(editedOptions, self._saveResult, self);
        });
      } else if(count === 0){
        console.log('first time access with no data, using url: ', self._options.path);
        self._throttledPullData(self._options, self._saveResult, self);
      }
    });
  },
  _saveResult: function(statusCode, result, self){
    for(var i = 0; i < result.data.children.length; i++){
      var postObj = result.data.children[i].data;
      new self._postModel(postObj).save(function(err, docs){
        if(err){console.log("\n\nerror saving: ", postObj, "error: ", err)}
      });
    }
  }
}
