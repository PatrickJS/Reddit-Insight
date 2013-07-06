Redd.Views.Dashboard = Backbone.View.extend({
  initialize: function() {
    $(document).ready(function() {
      var controller = $.superscrollorama({
        playoutAnimations: false
      });
      controller.addTween('#infograph-cats', TweenMax.from( $('#infograph-cats'), .5, {css:{right:'1500px'}, ease:Quad.easeInOut}));
      controller.addTween('#infograph-cats-img', TweenMax.from( $('#infograph-cats-img'), .5, {css:{right:'1500px'}, ease:Quad.easeInOut}));
    });
  },
  events: {
    'click #nugget-arrow-nav': 'nuggetNav'
  },
  el: '#dashboard',
  template: Redd.Templates('dashboard'),
  nuggetNav: function(e) {
    e.preventDefault();
    var $anchor = $(e.currentTarget);
    console.log($anchor, e);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1000);
  },
  render: function() {
    this.$el.html(this.template());
    return this;
  }
});
