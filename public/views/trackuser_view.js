Redd.Views.TrackUser = Backbone.View.extend({
  initialize: function() {
    console.log('in TrackUser view');
    this.model.on('sync', this.render, this);
  },
  el: '#trackuser',
  template: Redd.Templates('track-user'),
  events: {
    'submit form': 'enterUsername'
  },
  render: function(){
    this.debug = this.model.attributes;
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  enterUsername: function(e) {
    var username = $('#tracking-username').val();
    Redd.Data.usernameSubmit = username;
    console.log('username submitted', username);
    Redd.Vent.trigger('usernameSubmitChange');
    $('#tracking-username').val('');
    return false;
  }
});
