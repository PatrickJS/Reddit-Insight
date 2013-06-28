Redd.Views.TrackPost = Backbone.View.extend({
  initialize: function() {
    console.log('in trackPost view');
  },
  el: 'section',
  template: Redd.Templates('track-post'),

  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
