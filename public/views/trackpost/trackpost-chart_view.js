Redd.Views.TrackPostChart = Backbone.View.extend({
  initialize: function() {
    this.listenToOnce(this.model, 'trackpostSync', this.render);
  },
  el: '#trackpost-chart',
  template: Redd.Templates('trackpost-chart'),
  render: function(){
    $('#trackpost-chart').html(this.template());
    Redd.d3.trigger('initPostChart', this.collection);
    return this;
  }
});
