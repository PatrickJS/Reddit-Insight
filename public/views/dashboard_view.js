Redd.Views.Dashboard = Backbone.View.extend({
  initialize: function() {
  },
  events: {
  },
  el: '#dashboard',
  template: Redd.Templates('dashboard'),
  render: function() {
    this.$el.html(this.template());
    return this;
  }
});
