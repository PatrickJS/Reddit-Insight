Redd.Views.Dashboard = Backbone.View.extend({
  initialize: function() {
    console.log('in Dashboard view');
  },
  events: {
    'click': function() {
      alert("Clickified!");
    }
  },
  el: '#dashboard',
  template: Redd.Templates('dashboard'),
  render: function() {
    console.log('render dashboard view');
    this.$el.html(this.template());
    return this;
  }
});
