//TODO: add all of these items to the collection
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
    console.log(data.data.children);
    return data.data.children;
  }
});
