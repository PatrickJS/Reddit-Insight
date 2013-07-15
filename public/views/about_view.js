Redd.Views.About = Backbone.View.extend({
  el: '#about',

  template: Redd.Templates('about'),

  initialize: function() {
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});