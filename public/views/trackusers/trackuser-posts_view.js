Redd.Views.TrackUserPosts = Backbone.View.extend({
  el: '#trackuser-posts',
  template: Redd.Templates('trackuser-posts'),
  events: {},
  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
