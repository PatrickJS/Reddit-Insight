(function(){
  Redd = {
    Views: {},
    Models: {},
    Collections: {},
    Templates: {},
    Router: {},
    JSONP: {},
    Vent: _.extend({}, Backbone.Events),
    initialize: function() {
      new Redd.Views.App({model: new Redd.Models.App()}).render();
      new Redd.Router();
      new Redd.Views.TrackPost({model: new Redd.Models.TrackingData()});
      Backbone.history.start();
    }
  };
})();
