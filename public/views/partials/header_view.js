Redd.Views.Header = Backbone.View.extend({
  el: 'header',
  template: Redd.Templates('header'),
  render: function(){
    this.$el.html(this.template());
    $('.header-text').fitText(1);
    return this;
  }
});