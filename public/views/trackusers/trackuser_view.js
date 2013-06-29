Redd.Views.TrackUser = Backbone.View.extend({
  initialize: function() {
    console.log('in TrackUser view');
    this.trackuser_data = new Redd.Views.TrackUserData({model: this.model});
    this.trackuser_posts = new Redd.Views.TrackUserPosts({model: this.model});
    this.model.on('sync', function() {
      this.trackuser_data.render();
    }, this);
  },
  el: '#trackuser',
  template: Redd.Templates('trackuser'),
  events: {
    'submit form': 'enterUsername'
  },
  render: function(){
    this.$el.html(this.template());
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
