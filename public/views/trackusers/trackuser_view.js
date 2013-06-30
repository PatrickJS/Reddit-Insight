Redd.Views.TrackUser = Backbone.View.extend({
  initialize: function() {
    console.log('in TrackUser view');
    this.trackuser_data = new Redd.Views.TrackUserData({model: this.model});
    this.trackuser_posts = new Redd.Views.TrackUserPosts({model: this.model});
    this.model.on('sync', function() {
      this.trackuser_data.render();
    }, this);

//TODO: figure out 2nd model
    // this.model2.on('sync', function() {
    //   console.log('$$$$$$$$$ model2 sync')
    //   var posts = data.data.children;
    //   _.each(posts, function(post){
    //     this.collection.add(post);
    //   });
    // });
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
