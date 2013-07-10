var Redd = _.extend({
  Views: {},
  Models: {},
  Collections: {},
  Templates: {},
  Controller: {},
  Router: {},
  d3: {},
  initialize: function() {
    // remove debug
    window.Debug = _.extend({}, Backbone.Events);
    Debug.Controller = new Redd.Controller();
    Debug.Controller.show('navbar');
    Debug.Controller.show('footer');
    Debug.Controller.show('header');
    Debug.Router = new Redd.Router(Debug.Controller);
    Backbone.history.start(/*{pushState: true}*/);
  }
}, Backbone.Events);
