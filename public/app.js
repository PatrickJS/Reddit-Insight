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

Redd.Models.App = Backbone.Model.extend({});

Redd.Models.Login = Backbone.Model.extend({});

Redd.Models.Dashboard = Backbone.Model.extend({});

Redd.Models.Prediction = Backbone.Model.extend({});

Redd.Models.User = Backbone.Model.extend({});

Redd.Models.Post = Backbone.Model.extend({});

Redd.Collections.Users = Backbone.Collection.extend({
  model: Redd.Models.User
});

Redd.Collections.Posts = Backbone.Collection.extend({
  model: Redd.Models.Post
});

Redd.Views.App = Backbone.View.extend({
  initialize: function() {},
  render: function() {}
});

Redd.Views.Login = Backbone.View.extend({
  initialize: function() {},
  render: function() {}
});

Redd.Views.Dashboard = Backbone.View.extend({
  initialize: function() {},
  render: function() {}
});

Redd.Views.Prediction = Backbone.View.extend({
  initialize: function() {},
  render: function() {}
});