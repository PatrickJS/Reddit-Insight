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

Redd.Router = Backbone.Router.extend({
  routes: {
    '/':'login',
    '/dashboard':'dashboard',
    '/prediction':'prediction'
  },
  login: function() {
    console.log('in login route');
  },
  dashboard: function(){
    console.log('in dashboard route');
  },
  prediction: function(){
    console.log('in prediction route');
  }
});

//login, dashboard, prediction, user, post

Redd.Models.App = Backbone.Model.extend({});



Redd.Views.App = Backbone.View.extend({
  initialize: function() {},
  render: function() {

  }
});