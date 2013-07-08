Redd.Views.CircleCluster = Backbone.View.extend({
  initialize: function() {
    console.log('in CircleCluster view');
  },
  el: '#circlecluster',
  template: Redd.Templates('circlecluster'),
  render: function(){
    this.$el.html(this.template());
    return this;
  },
  d3: function(){
  }
});