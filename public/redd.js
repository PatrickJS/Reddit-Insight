(function(){
  Redd = {
    Views: {},
    Models: {},
    Collections: {},
    Templates: {},
    Controller: {},
    Router: {},
    JSONP: {},
    Vent: _.extend({}, Backbone.Events),
    initialize: function() {
      var controller = new Redd.Controller();
      controller.show('navbar');
      new Redd.Router(controller);
      Backbone.history.start(/*{pushState: true}*/);
    }
  };
})();
