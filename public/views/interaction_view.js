Redd.Views.Interaction = Backbone.View.extend({
  el: '#interaction',

  template: Redd.Templates('interaction'),

  render: function(){
    this.$el.html(this.template());
    Redd.d3.BubblePie();
    return this;
  }
});
