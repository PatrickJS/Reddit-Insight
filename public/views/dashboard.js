Redd.Views.Dashboard = Backbone.View.extend({
  initialize: function() {
    Redd.Vent.on('dashboard', this.render, this);
    console.log('in dashboard view');
  },
  el: 'section',
  template: Handlebars.compile($('#dashboard-template').html()),
  render: function() {
    this.$el.html(this.template());
    return this;
  }
});
