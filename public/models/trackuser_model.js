Redd.Models.TrackUser = Backbone.Model.extend({
  initialize: function() {
    Redd.Vent.on('usernameSubmitChange', function() {
      self = this;
      console.log(self);
      Redd.Data.usernameWhere = 'about';
      self.fetch();
      self.trigger('userData', self);
      // self.on('sync', function() {
      //   Redd.Data.usernameWhere = '';
      //   self.fetch();
      //   self.trigger('userPosts', self);
      // }, self);
    }, this);
  },
  url: function() {
    return 'http://www.reddit.com/user/'+ Redd.Data.usernameSubmit +'/'+Redd.Data.usernameWhere+'.json';
  },
  sync: Backbone.JSONP.Sync,
  parse: function(data) {
    return data.data;
  }

});

