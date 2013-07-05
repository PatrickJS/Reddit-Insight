Redd.Collections.TrackUserPosts = Backbone.Collection.extend({
  model: Redd.Models.TrackUserPosts,
  initialize: function() {
    this.on('usernameSubmitChange', function(data) {
      this.usernameSubmit = data;
      this.fetch();
    }, this);
  },
  url: function() {
    return 'https://pay.reddit.com/user/'+ this.usernameSubmit +'/overview.json?limit=100';
  },
  sync: Backbone.JSONP.Sync,
  parse: function(data) {
    return _(data.data.children).map(function(obj) { return obj; });
  }
});
