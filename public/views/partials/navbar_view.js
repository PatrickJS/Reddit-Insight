Redd.Views.Navbar = Backbone.View.extend({
  initialize: function() {
  },
  el: 'nav',
  template: Redd.Templates('nav'),
  events: {
    'click li': 'activeNav'
  },
  render: function(){
    this.$el.html(this.template());
    return this;
  },

  activeNav: function(e) {
    $('.navbar li').removeClass("active");
    $(e.currentTarget).addClass("active");
  }
});
