Redd.Views.Interaction = Backbone.View.extend({
  el: '#interaction',

  template: Redd.Templates('interaction'),

  render: function(){
    this.$el.html(this.template());
    this.d3();
    return this;
  },

  d3: function(){
  }
});
