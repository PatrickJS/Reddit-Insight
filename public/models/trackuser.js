Redd.Models.TrackUser = Backbone.Model.extend({
  url: function() {
    return 'http://www.reddit.com/user/'+ this.get('id') +'.json';
  },
  sync: Backbone.JSONP.Sync

});
