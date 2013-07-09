Backbone.JSONP = {};
Backbone.JSONP.Sync = function(method, model, options) {
  options.dataType = 'jsonp';
  options.jsonp = 'jsonp';
  return Backbone.sync(method, model, options);
};
Backbone.Model.JSONP = Backbone.Model.extend({
  sync: Backbone.JSONP.Sync
});

