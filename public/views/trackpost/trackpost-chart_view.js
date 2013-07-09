Redd.Views.TrackPostChart = Backbone.View.extend({
  initialize: function() {
    this.listenToOnce(this.model, 'trackpostSync', this.render);
  },
  el: '#trackpost-chart',
  template: Redd.Templates('trackpost-chart'),
  render: function(){
    $('#trackpost-chart').html(this.template());
    this.d3(this.collection);
    return this;
  }
});
