Redd.Views.TrackPostStats = Backbone.View.extend({
  el: '#trackpoststats',
  template: Redd.Templates('track-post-stats'),
  render: function(){
    $('#trackpoststats').html(this.template(this.model.attributes));
    return this;
  }
});
