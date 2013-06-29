Redd.Views.TrackUserData = Backbone.View.extend({
  initialize: function() {
    console.log('in TrackUserData view');
    this.model.on('userData', this.render, this);
  },
  el: '#trackuser-data',
  template: Redd.Templates('trackuser-data'),
  events: {},
  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
