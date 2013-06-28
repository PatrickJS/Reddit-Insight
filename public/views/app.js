Redd.Views.AppController = Backbone.View.extend({
  el: 'body',

  initialize: function() {
    console.log('in app view');
    var my_model = {
      attributes: {
        userName:'Patrick'
      }
    };
    // this.navBar.setElement(this.$('.navBar'));
    this.navBar = new Redd.Views.Navbar({model: my_model});
    this.trackPost = new Redd.Views.TrackPost({model: new Redd.Models.TrackData()});
    this.login = new Redd.Views.Login();
    this.dashboard = new Redd.Views.Dashboard();
    this.index = new Redd.Views.Index();
    Redd.Vent.trigger('navbar');
  },
  render: function() {
  }

});
