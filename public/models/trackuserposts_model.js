Redd.Models.TrackUserPosts = Backbone.Model.extend({
  initialize: function() {
    Redd.Vent.on('usernameSubmitChange', function() {
      this.fetch();
    }, this);
  },
  url: function() {
    return 'http://www.reddit.com/user/'+ Redd.Data.usernameSubmit +'/overview.json?limit=100';
  },
  sync: Backbone.JSONP.Sync,
  parse: function(data) {
    return data.data;
  }
});
