Redd.Models.Post = Backbone.Model.extend({
  url: function() {
    return 'http://www.reddit.com/user/'+ this.get('id') +'.json';
  },
  sync: function(method, model, options) {
      options.dataType = 'jsonp';
      options.jsonp = 'jsonp';
      return Backbone.sync(method, model, options);
  }
});
