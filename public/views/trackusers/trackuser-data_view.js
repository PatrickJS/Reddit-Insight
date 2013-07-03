Redd.Views.TrackUserData = Backbone.View.extend({
  initialize: function() {
    this.model.on('sync', this.render, this);
  },
  el: '#trackuser-data',
  template: Redd.Templates('trackuser-data'),
  events: {},
  render: function(){
    $('#trackuser-data').html(this.template(this.model.attributes));
    return this;
  }
});
