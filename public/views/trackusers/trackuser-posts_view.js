Redd.Views.TrackUserPosts = Backbone.View.extend({
  initialize: function() {
    this.collection.on('sync', this.render, this);
  },
  el: '#trackuser-posts',
  template: Redd.Templates('trackuser-posts'),
  events: {},
  render: function(){
    $('#trackuser-posts').html(this.template(this.collection.map(function(model) {
      return model.attributes;
    })));
    return this;
  }
});
