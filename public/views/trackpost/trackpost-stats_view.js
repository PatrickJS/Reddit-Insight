Redd.Views.TrackPostStats = Backbone.View.extend({
  el: '#trackpost-stats',
  template: Redd.Templates('trackpost-stats'),
  render: function(){
    $('#trackpost-stats').html(this.template(this.model.attributes));
    return this;
  }
});
