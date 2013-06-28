Redd.Router = Backbone.Router.extend({
  routes: {
    '':'dashboard',
    '#':'dashboard',
    'prediction':'prediction',
    'trackpost':'trackPost'
  },
  login: function() {
    console.log('in login route');
    Redd.Vent.trigger('login');
  },
  dashboard: function(){
    console.log('in dashboard route');
    Redd.Vent.trigger('dashboard');
  },
  prediction: function(){
    console.log('in prediction route');
  },
  trackPost: function(){
    console.log('in trackPost route');
    Redd.Vent.trigger('trackpost');
  }
});
