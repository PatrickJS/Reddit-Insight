Redd.Router = Backbone.Router.extend({
  initialize: function(control) {
    this.controller = control;
  },
  handleRoute: function(routeName) {
    this.controller.hide();

    if (!routeName) {
      routeName = 'dashboard';
    }

    console.log('Should go to ', routeName);
    if (routeName === 'trackuser' || routeName === 'trackpost' || routeName === 'topiccluster' || routeName === 'graphs') {
      this.controller.hideFull();
      this.controller.showPages();
    }
    else {
      this.controller.hidePages();
      this.controller.showFull();
    }

    this.controller.show(routeName);
  },
  routes: {
    '*path':'handleRoute'
  }
});
