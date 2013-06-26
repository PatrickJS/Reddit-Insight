(function(){
  Redd = {
    Views: {},
    Models: {},
    Collections: {},
    Vent: _.extend({}, Backbone.Events),
    Router: {},
    initialize: function() {
      new Redd.Router();
     Backbone.history.start({pushState: true});
    }
  };
})();
