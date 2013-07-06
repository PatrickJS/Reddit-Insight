Redd.Views.Dashboard = Backbone.View.extend({
  initialize: function() {
    $(document).ready(function() {
      var controller = $.superscrollorama({
        playoutAnimations: false
      });
      controller.addTween('#infograph-cats', TweenMax.from( $('#infograph-cats'), .5, {css:{right:'1000px'}, ease:Quad.easeInOut}));
      controller.addTween('#infograph-cats-img', TweenMax.from( $('#infograph-cats-img'), .5, {css:{left:'1000px'}, ease:Quad.easeInOut}));
    });
  },
  events: {
  },
  el: '#dashboard',
  template: Redd.Templates('dashboard'),
  render: function() {
    this.$el.html(this.template());
    return this;
  }
});
