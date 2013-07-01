Redd.Views.TrackPostChart = Backbone.View.extend({
  initialize: function() {
    this.listenToOnce(Redd.Vent, 'trackpostSync', this.render);
  },
  el: '#trackpost-chart',
  template: Redd.Templates('trackpost-chart'),
  render: function(){
    $('#trackpost-chart').html(this.template());
    Redd.Vent.trigger('initPostChart');
    return this;
  }
});
