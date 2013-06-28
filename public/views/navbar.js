Redd.Views.Navbar = Backbone.View.extend({
  initialize: function() {
    console.log('in Navbar view');
  },
  el: 'header',
  template: Redd.Templates('nav'),
  events: {
    'click li': 'activeNav'
  },
  render: function(){
    this.$el.html(this.template());
    return this;
  },
  activeNav: function(event) {
    $('.navbar li').removeClass("active");
    $(event.currentTarget).addClass("active");
  }
});
