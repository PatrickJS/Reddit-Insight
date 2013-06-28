Redd.Models.TrackingData = Backbone.Model.extend({
  url: function() {
    return 'http://www.reddit.com/user/'+ self.get('id') +'.json';
  },
  sync: Redd.JSONP.Sync
});
