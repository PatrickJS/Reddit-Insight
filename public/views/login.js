Redd.Views.Login = Backbone.View.extend({
  initialize: function() {
    Redd.Vent.on('login', this.render, this);
    console.log('in login view');
  },
  el: 'section',
  template: Handlebars.compile($('#login-template').html()),
  render: function() {
    this.$el.html(this.template());
    return this;
  }
});
