Redd.Views.App = Backbone.View.extend({
  el: 'body',

  initialize: function() {
    console.log('in app view');
  },
  render: function() {
    var my_model = {
      attributes: {
        userName:'Patrick'
      }
    };
    new Redd.Views.Navbar({model: my_model});
    // new Redd.Views.Login();
    new Redd.Views.Dashboard();
    // new Redd.Views.Index();
  }

});
