Redd.Controller = Backbone.View.extend({
  initialize: function() {
    // this.navBar.setElement(this.$('.navBar'));
    this.navbar    = new Redd.Views.Navbar();
    this.footer    = new Redd.Views.Footer();
    this.index     = new Redd.Views.Index();
    this.trackpost = new Redd.Views.TrackPost({
      model:         new Redd.Models.TrackPost(),
      collection:    new Redd.Collections.TrackPosts()
    });
    this.trackuser = new Redd.Views.TrackUser({
      model:         new Redd.Models.TrackUser(),
      collection:    new Redd.Collections.TrackUserPosts()
    });
    this.wordcloud = new Redd.Views.WordCloud({
      model:         new Redd.Models.WordCloud()
    });
    this.subredditcluster = new Redd.Views.SubredditCluster({
      model:                new Redd.Models.SubredditCluster()
    });
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
