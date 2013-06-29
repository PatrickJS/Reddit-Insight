Redd.Views.TrackUserPosts = Backbone.View.extend({
  initialize: function() {
    console.log('in TrackUserPosts view');
    this.model.on('userPosts', this.render, this);
  },
  el: '#trackuser-posts',
  template: Redd.Templates('trackuser-posts'),
  events: {},
  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
