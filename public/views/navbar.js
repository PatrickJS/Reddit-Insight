Redd.Views.Navbar = Backbone.View.extend({
  initialize: function() {
    Redd.Vent.on('navbar', this.render, this);
    console.log('in navbar view');
  },
  el: $('header'),
  template: Handlebars.compile($('#nav-template').html()),
  render: function(){
    console.log(this.model);
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});