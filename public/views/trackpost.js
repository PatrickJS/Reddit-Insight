Redd.Views.TrackPost = Backbone.View.extend({
  el: 'track-post',

  initialize: function() {
    console.log('in trackPost view');
  },

  template: Redd.Templates('track-post'),

  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
