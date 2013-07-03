Redd.Views.Footer = Backbone.View.extend({
  initialize: function() {
  },
  el: 'footer',
  template: Redd.Templates('footer'),
  render: function(){
    this.$el.html(this.template());
    return this;
  }
});
