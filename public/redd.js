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
      Backbone.history.start();
    }
  };
})();
