Redd.Views.TrackUserData = Backbone.View.extend({
  el: '#trackuser-data',

  template: Redd.Templates('trackuser-data'),

  initialize: function() {
    this.model.on('sync', this.render, this);
  },

  render: function(){
    $('#trackuser-data').html(this.template(this.model.attributes));
    return this;
  }
});
