Redd.Models.TrackUser = Backbone.Model.extend({
  url: function() {
    return 'http://www.reddit.com/user/'+ this.get('username') +'.json';
  },
  sync: Backbone.JSONP.Sync

});
