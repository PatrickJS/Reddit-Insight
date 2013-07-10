Redd.Router = Backbone.Router.extend({
  initialize: function(control) {
    this.controller = control;
  },
  handleRoute: function(routeName) {
    console.log('Should go to ', routeName);
    this.controller.hide();

    if (!routeName)
      routeName = 'dashboard';

    if (routeName === 'trackuser' || routeName === 'trackpost') {
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
