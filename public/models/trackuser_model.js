Redd.Models.TrackUser = Backbone.Model.extend({
  initialize: function() {
    this.on('usernameSubmitChange', function(username) {
      this.usernameSubmit = username;
      this.fetch();
    }, this);
  },
  url: function() {
    return 'https://pay.reddit.com/user/'+ this.usernameSubmit +'/about.json';
  },
  sync: Backbone.JSONP.Sync,
  parse: function(data) {
    return data.data;
  }
});
