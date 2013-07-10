Redd.Models.TopicCluster = Backbone.Model.extend({
  renderCounter: 0,
  defaults: {
    selectedSubreddit: 'PoliticsCluster',
    height: 36 * 20,
    path: function() {
      return 'TopicClusterData/PoliticsCluster.json';
    }
  },
  update: function(obj){
    this.set('selectedSubreddit', obj.subreddit, {silent: true});
    this.set('path', function() {
      return 'TopicClusterData/' + obj.subreddit+ '.json';
    });
  }
});
