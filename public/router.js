Redd.Router = Backbone.Router.extend({
  initialize: function(controller) {
    this.controller = controller;
  },
  handleRoute: function(routeName) {
    routeName = routeName || 'dashboard';
    this.controller.hide();

    switch(routeName) {
      case 'trackuser':
      case 'trackpost':
      case 'topiccluster':
      case 'graphs':
      case 'interaction':
      case 'about':
        // Fixed width
        this.controller.hideFull();
        this.controller.showPages();
        break;
      case 'frequency':
      case 'circlecluster':
      case 'dashboard':
      case 'wordcloud':
        // 100% width
        this.controller.hidePages();
        this.controller.showFull();
        break;
    }

    this.controller.show(routeName);
  },
  routes: {
    '*path':'handleRoute'
  }
});
