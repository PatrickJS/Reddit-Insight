Redd.Views.Login = Backbone.View.extend({
  initialize: function() {
    console.log('in Login view');
  },
  el: '#login',
  template: Redd.Templates('login'),
  render: function() {
    this.$el.html(this.template());
    return this;
  }
});
