Redd.Router = Backbone.Router.extend({
  initialize: function(control) {
    this.controller = control;
  },
  handleRoute: function(routeName) {
    routeName = routeName || 'dashboard';
    this.controller.hide();
    // if (!routeName) { routeName = 'dashboard'; }

    switch(routeName) {
    case 'trackuser':
    case 'trackpost':
    case 'topiccluster':
    case 'graphs':
    case 'interaction':
      // Fixed width
      this.controller.hideFull();
      this.controller.showPages();
      break;
    default:
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
