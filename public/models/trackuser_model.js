Redd.Models.TrackUser = Backbone.Model.extend({
  initialize: function() {
    Redd.Vent.on('usernameSubmitChange', function() {
      this.fetch();
    }, this);
  },
  url: function() {
    return 'https://pay.reddit.com/user/'+ Redd.Data.usernameSubmit +'/about.json';
  },
  sync: Backbone.JSONP.Sync,
  parse: function(data) {
    return data.data;
  }
});
