Redd.Views.SubRedditCluster = Backbone.View.extend({
  initialize: function() {
  },
  el: '#subredditcluster',
  template: Redd.Templates('subredditcluster'),
  events: {
  },
  render: function(){
    this.$el.html(this.template());
    return this;
  }

});
