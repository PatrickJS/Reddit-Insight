Redd.Views.TrackPostStats = Backbone.View.extend({
  el: '#trackpoststats',
  template: Redd.Templates('trackpost-stats'),
  render: function(){
    $('#trackpoststats').html(this.template(this.model.attributes));
    return this;
  }
});
