Redd.Views.TrackPostStats = Backbone.View.extend({
  initialize: function() {
    this.model.on('sync', this.newPost, this);
  },
  el: '#trackpost-stats',
  template: Redd.Templates('trackpost-stats'),
  render: function(){
    $('#trackpost-stats').html(this.template(this.model.attributes));
    return this;
  },

  newPost: function() {
    console.log('trackpost sync');
    $('.loader').hide();
    this.render();
    this.collection.addModel(this.model.attributes);
    $('.submit-another').show();
  }
});
