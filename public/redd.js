(function(){
  Redd = {
    Views: {},
    Models: {},
    Collections: {},
    Templates: {},
    Controller: {},
    Router: {},
    d3: {},
    Data: {},
    Vent: _.extend({}, Backbone.Events),
    initialize: function() {
      // remove debug
      window.Debug = {};
      Debug.Controller = new Redd.Controller();
      Debug.Controller.show('navbar');
      Debug.Router = new Redd.Router(Debug.Controller);
      Backbone.history.start(/*{pushState: true}*/);
    }
  };
})();
