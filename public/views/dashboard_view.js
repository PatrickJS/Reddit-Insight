Redd.Views.Dashboard = Backbone.View.extend({
  events: {
    'click #nugget-arrow-nav': 'nuggetNav'
  },

  el: '#dashboard',

  template: Redd.Templates('index'),

  initialize: function() {
  },

  nuggetNav: function(e) {
    e.preventDefault();
    var $anchor = $(e.currentTarget);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1000);
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});
