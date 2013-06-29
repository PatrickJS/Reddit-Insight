Redd.Views.TrackPostChart = Backbone.View.extend({
  el: '#trackpost-chart',
  template: Redd.Templates('trackpost-chart'),
  initialize: function() {
    this.listenToOnce(Redd.Vent, 'trackpostSync', this.render);
  },
  render: function(){
    $('#trackpost-chart').html(this.template());
    Redd.Vent.trigger('initPostChart');
    return this;
  }
});
