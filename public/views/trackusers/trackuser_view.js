Redd.Views.TrackUser = Backbone.View.extend({
  el: '#trackuser',
  template: Redd.Templates('trackuser'),
  events: {
    'submit form': 'enterUsername',
    'click .submit-another': 'addAnother',
    'click #myTab a': 'clickTabs'
  },
  initialize: function() {
    this.trackuser_data = new Redd.Views.TrackUserData({
      model: this.model
    });
    this.trackuser_posts = new Redd.Views.TrackUserPosts({
      collection: this.collection
    });
  },
  render: function(){
    this.$el.html(this.template());
    return this;
  },

  clickTabs: function(e) {
    $(e.currentTarget).tab('show');
    return false;
  },
  enterUsername: function(e) {
    $('.loader').fadeIn();
    $('.submit-another').css('display','block');
    $('#trackuser form').slideUp('slow');
    var username = $('#tracking-username').val();
    console.log('username submitted', username);
    this.model.trigger('usernameSubmitChange', username);
    this.collection.trigger('usernameSubmitChange', username);
    $('#tracking-username').val('');
    return false;
  },

  addAnother: function(e) {
    e.preventDefault();
    $('.submit-another').hide();
    $('#trackuser form').slideDown('slow');
  }
});
