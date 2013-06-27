Redd.Views.Dashboard = Backbone.View.extend({
  initialize: function() {
    Redd.Vent.on('dashboard', this.render, this);
    console.log('in dashboard view');
  },
  el: 'section',
  template: Redd.Template('dashboard'),
  render: function() {
    this.$el.html(this.template());
    return this;
  }
});
