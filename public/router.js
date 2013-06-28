Redd.Router = Backbone.Router.extend({
  initialize: function(control) { this.controller = control; },
  routes: {
    '':'dashboard',
    '#':'dashboard',
    '#/':'dashboard',
    'prediction':'prediction',
    'trackpost':'trackpost',
    'dashboard':'dashboard'
  },
  pushState: true,
  login: function() {
    this.controller.hide();
    console.log('in login route');
    this.controller.show('login');
  },
  dashboard: function(){
    this.controller.hide();
    console.log('in dashboard route');
    this.controller.show('dashboard');
  },
  prediction: function(){
    this.controller.hide();
    console.log('in prediction route');
    this.controller.show('prediction');
  },
  trackpost: function(url){
    this.controller.hide();
    console.log('in trackPost route');
    this.controller.show('trackpost');
  }
});
