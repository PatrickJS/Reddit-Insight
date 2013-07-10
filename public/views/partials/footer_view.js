Redd.Views.Footer = Backbone.View.extend({
  el: 'footer',
  template: Redd.Templates('footer'),
  render: function(){
    this.$el.html(this.template());
    return this;
  }
});
