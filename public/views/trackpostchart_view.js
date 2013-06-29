Redd.Views.TrackPostChart = Backbone.View.extend({
  el: '#trackpostchart',
  template: Redd.Templates('track-post-chart'),
  render: function(){
    $('#trackpostchart').html(this.template());
    return this;
  }
});
