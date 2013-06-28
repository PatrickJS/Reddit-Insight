Redd.Controller = Backbone.View.extend({
  initialize: function() {
    console.log(this);
    // this.navBar.setElement(this.$('.navBar'));
    console.log('in controller view');
    this.navbar    = new Redd.Views.Navbar();
    this.trackpost = new Redd.Views.TrackPost({model: new Redd.Models.TrackData()});
    this.login     = new Redd.Views.Login();
    this.dashboard = new Redd.Views.Dashboard();
    this.index     = new Redd.Views.Index();
  },
  el: 'html',
  show: function(action) {
    this[action].render();
    return this;
  }

});
