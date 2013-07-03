Redd.Models.TrackUser = Backbone.Model.extend({
  initialize: function() {
    this.on('usernameSubmitChange', this.usernameSubmit, this);
  },
  url: function() {
    return 'https://pay.reddit.com/user/'+ this.usernameSubmit +'/about.json';
  },
  sync: Backbone.JSONP.Sync,
  parse: function(data) {
    return data.data;
  },

  usernameSubmit: function(username) {
    this.usernameSubmit = username;
    this.fetch();
  }
});
