Redd.Router = Backbone.Router.extend({
  initialize: function(control) { this.controller = control; },
  routes: {
    '':'dashboard',
    '#':'dashboard',
    'prediction':'prediction',
    'trackpost':'trackpost'
  },
  pushState: true,
  login: function() {
    console.log('in login route');
    this.controller.show('login');
  },
  dashboard: function(){
    console.log('in dashboard route');
    this.controller.show('dashboard');
  },
  prediction: function(){
    console.log('in prediction route');
    this.controller.show('prediction');
  },
  trackpost: function(url){
    console.log('in trackPost route');
    this.controller.show('trackpost');
  }
});
