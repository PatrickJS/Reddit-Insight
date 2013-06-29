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
    Debug: {},
    initialize: function() {
      // remove debug
      Redd.Debug.Controller = new Redd.Controller();
      Redd.Debug.Controller.show('navbar');
      Redd.Debug.Router = new Redd.Router(Redd.Debug.Controller);
      Backbone.history.start(/*{pushState: true}*/);
    }
  };
})();
