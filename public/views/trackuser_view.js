Redd.Views.TrackUser = Backbone.View.extend({
  initialize: function() {
    console.log('in TrackUser view');
  },
  el: '#trackuser',
  template: Redd.Templates('track-user'),
  events: {
    'submit form': 'enterUsername'
  },
  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  enterUsername: function(e) {
    var username = $('#tracking-username').val();
    this.model.set({username: username});
    console.log('username submitted', username);
    Redd.Vent.trigger('loopin');
    $('#tracking-username').val('');
    return false;
  }
});