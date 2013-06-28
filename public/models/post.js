Redd.Models.Post = Backbone.Model.extend({
  url: function() {
    return 'http://www.reddit.com/user/'+ self.get('id') +'.json';
  },
  sync: Redd.JSONP.Sync
});
