(function(){
  Redd = {
    Views: {},
    Models: {},
    Collections: {},
    Templates: {},
    Router: {},
    Controller: {},
    JSONP: {},
    Vent: _.extend({}, Backbone.Events),
    initialize: function() {
      var controller = new Redd.Controller({model: new Redd.Models.App()});
      controller.show('navbar');
      new Redd.Router(controller);
      Backbone.history.start(/*{pushState: true}*/);
    }
  };
})();
