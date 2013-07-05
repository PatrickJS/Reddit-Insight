Redd.Router = Backbone.Router.extend({
  initialize: function(control) {
    this.controller = control;
  },
  routes: {
    '':'dashboard',
    '#/':'dashboard',
    'prediction':'prediction',
    'trackpost':'trackpost',
    'trackuser':'trackuser',
    'wordcloud':'wordcloud',
    'subredditcluster': 'subredditcluster'
  },
  dashboard: function(){
    this.controller.hide();
    this.controller.show('dashboard');
  },
  prediction: function(){
    this.controller.hide();
    this.controller.show('prediction');
  },
  trackpost: function(url){
    this.controller.hide();
    this.controller.show('trackpost');
  },
  trackuser: function(url){
    this.controller.hide();
    this.controller.show('trackuser');
  },
  wordcloud: function(url){
    this.controller.hide();
    this.controller.show('wordcloud');
  },
  subredditcluster: function(url){
    this.controller.hide();
    this.controller.show('subredditcluster');
  }
});
