Redd.Router = Backbone.Router.extend({
  routes: {
    '':'login',
    'dashboard':'dashboard',
    'prediction':'prediction'
  },
  login: function() {
    console.log('in login route');
    Redd.Vent.trigger('login');
  },
  dashboard: function(){
    Redd.Vent.trigger('navbar');
    Redd.Vent.trigger('dashboard');
    console.log('in dashboard route');
  },
  prediction: function(){
    console.log('in prediction route');
  }
});