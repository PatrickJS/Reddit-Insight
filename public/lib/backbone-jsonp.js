Backbone.JSONP = {};
Backbone.JSONP.Sync = function(method, model, options) {
  options.dataType = 'jsonp';
  options.jsonp = 'jsonp';
  return Backbone.sync(method, model, options);
};
