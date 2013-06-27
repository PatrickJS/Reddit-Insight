Redd.Views.Post = Backbone.View.extend({
  initialize: function() {
    Redd.Vent.on('request', Redd.JSONP.Request, this);
  },
  render: function() {

  }
});
