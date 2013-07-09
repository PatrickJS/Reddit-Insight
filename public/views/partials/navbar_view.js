Redd.Views.Navbar = Backbone.View.extend({
  initialize: function() {
    this.setActiveTab();
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
  setActiveTab: function() {
    $(function() {
      $('.navbar li').removeClass("active");
      $("a[href$='"+window.location.hash+"']").parent().addClass("active");
    });
  },
  activeNav: function(e) {
    $('.navbar li').removeClass("active");
    $(e.currentTarget).addClass("active");
  }
});
