Redd.Controller = Backbone.View.extend({
  initialize: function() {
    // this.navBar.setElement(this.$('.navBar'));
    console.log('in controller');
    this.navbar    = new Redd.Views.Navbar();
    this.index     = new Redd.Views.Index();
    this.trackpost = new Redd.Views.TrackPost({
      model: new Redd.Models.TrackPost(),
      collection: new Redd.Collections.TrackPosts()});
    this.trackuser = new Redd.Views.TrackUser({
      model: new Redd.Models.TrackUser(),
      // model2: new Redd.Models.TrackUserPosts(),
      collection: new Redd.Collections.TrackUserPosts()});
    this.wordcloud = new Redd.Views.WordCloud({
      model: new Redd.Models.WordCloud()});
    this.dashboard = new Redd.Views.Dashboard();
  },
  el: 'html',
  show: function(action) {
    this[action].render();
    $('#'+action).show();
    return this;
  },
  hide: function() {
    $('section').hide();
    return this;
  }
});
