(function(){
  Redd = {
    Views: {},
    Models: {},
    Collections: {},
    Templates: {},
    Vent: _.extend({}, Backbone.Events),
    Router: {},
    initialize: function() {
      new Redd.Views.App({model: new Redd.Models.App()}).render();
      new Redd.Router();
      var Reddit = new Backbone.OAuth(Backbone.OAuth.configs.Reddit);
      Reddit.auth();
      Backbone.history.start();
    }
  };
})();
