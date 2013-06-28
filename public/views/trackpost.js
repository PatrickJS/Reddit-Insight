Redd.Views.TrackPost = Backbone.View.extend({
  el: 'section',

  initialize: function() {
    console.log('in trackPost view');
    Redd.Vent.on('trackpost', this.render, this);
  },

  template: Redd.Templates('track-post'),

  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
