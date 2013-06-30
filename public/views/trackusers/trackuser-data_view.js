Redd.Views.TrackUserData = Backbone.View.extend({
  el: '#trackuser-data',
  template: Redd.Templates('trackuser-data'),
  events: {},
  render: function(){
    console.log('---track user data render')
    $('#trackuser-data').html(this.template(this.model.attributes));
    return this;
  }
});
