Redd.Models.TrackUser = Backbone.Model.extend({
  url: function() {
    return 'http://www.reddit.com/user/'+ Redd.Data.usernameSubmit +'.json';
  },
  sync: Backbone.JSONP.Sync

});
