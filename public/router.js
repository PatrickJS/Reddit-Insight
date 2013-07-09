Redd.Router = Backbone.Router.extend({
  initialize: function(control) {
    this.controller = control;
  },
  routes: {
    '':'dashboard',
    '#/':'dashboard',
    'trackpost':'trackpost',
    'trackuser':'trackuser',
    'wordcloud':'wordcloud',
    'topiccluster': 'topiccluster',
    'circlecluster': 'circlecluster',
    'frequency': 'frequency',
    'graphs': 'graphs'
  },
  dashboard: function(){
    this.controller.hide();
    this.controller.hidePages();
    this.controller.showFull();
    this.controller.show('dashboard');
  },
  trackpost: function(url){
    this.controller.hide();
    this.controller.hideFull();
    this.controller.showPages();
    this.controller.show('trackpost');
  },
  trackuser: function(url){
    this.controller.hide();
    this.controller.hideFull();
    this.controller.showPages();
    this.controller.show('trackuser');
  },
  wordcloud: function(url){
    this.controller.hide();
    this.controller.hidePages();
    this.controller.showFull();
    this.controller.show('wordcloud');
  },
  topiccluster: function(url){
    this.controller.hide();
    this.controller.hideFull();
    this.controller.showPages();
    this.controller.show('topiccluster');
  },
  circlecluster: function(){
    this.controller.hide();
    this.controller.hidePages();
    this.controller.showFull();
    this.controller.show('circlecluster');
  },
  frequency: function(){
    this.controller.hide();
    this.controller.hidePages();
    this.controller.showFull();
    this.controller.show('frequency');
  },
  graphs: function(){
    this.controller.hide();
    this.controller.hideFull();
    this.controller.showPages();
    this.controller.show('graphs');
  }
});
