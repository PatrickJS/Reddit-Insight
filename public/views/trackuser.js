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
    var url = $('#tracking-username').val();
    // Redd.Models.trackpost.set({url: url});
    // Redd.Vent.trigger('loopin', model);
    return false;
  }
});