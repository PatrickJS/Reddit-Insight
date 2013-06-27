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
