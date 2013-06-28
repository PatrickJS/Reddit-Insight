Redd.Views.TrackPost = Backbone.View.extend({
  initialize: function() {
    console.log('in TrackPost view');
  },
  el: '#trackpost',
  template: Redd.Templates('track-post'),

  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
