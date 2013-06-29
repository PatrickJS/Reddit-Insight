Redd.Views.TrackPostChart = Backbone.View.extend({
  el: '#trackpostchart',
  template: Redd.Templates('track-post-chart'),
  initialize: function() {
    this.listenToOnce(Redd.Vent, 'trackpostSync', this.render);
  },
  render: function(){
    $('#trackpostchart').html(this.template());
    Redd.Vent.trigger('initPostChart');
    return this;
  }
});
