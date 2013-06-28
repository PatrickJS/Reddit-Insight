Redd.Views.TrackPost = Backbone.View.extend({
  initialize: function() {
    console.log('in TrackPost view');
  },
  el: '#trackpost',
  template: Redd.Templates('track-post'),
  events: {
    'submit form': 'enterURL'
  },
  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  enterURL: function(e) {
    var url = $('#tracking-url').val();
    Redd.Models.trackpost.set({url: url});
    Redd.Vent.trigger('loopin', model);
    return false;
  }
});
