Redd.Views.Navbar = Backbone.View.extend({
  el: 'nav',
  template: Redd.Templates('nav'),
  render: function(){
    this.$el.html(this.template());
    return this;
  }
});
