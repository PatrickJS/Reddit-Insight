Redd.Collections.TrackUserPosts = Backbone.Collection.extend({
  model: Redd.Models.TrackUserPosts,
  initialize: function() {
    Redd.Vent.on('usernameSubmitChange', function() {
      this.fetch();
    }, this);
  },
  url: function() {
    return 'https://pay.reddit.com/user/'+ Redd.Data.usernameSubmit +'/overview.json?limit=100';
  },
  sync: Backbone.JSONP.Sync,
  parse: function(data) {
    return _(data.data.children).map(function(obj) { return obj.data; });
  }
});
