Redd.Controller = Backbone.Controller.extend({
  initialize: function() {
    // this.navBar.setElement(this.$('.navBar'));
    this.navbar    = new Redd.Views.Navbar();
    this.header    = new Redd.Views.Header();
    this.footer    = new Redd.Views.Footer();
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
    this.topiccluster = new Redd.Views.TopicCluster({
      model:                new Redd.Models.TopicCluster()
    });
    this.circlecluster = new Redd.Views.CircleCluster();
    this.dashboard = new Redd.Views.Dashboard();
  },
  hidePages: function() {
    $('.main-container').hide();
  },
  showPages: function() {
    $('.main-container').show();
  },
  hideFull: function() {
    $('.full-width-container').hide();
  },
  showFull: function() {
    $('.full-width-container').show();
  }
});
