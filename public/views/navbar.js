Redd.Views.Navbar = Backbone.View.extend({
  initialize: function() {
    Redd.Vent.on('navbar', this.render, this);
    console.log('in navbar view');
  },
  el: 'header',
  template: Redd.Templates('nav'),
  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
