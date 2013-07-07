Redd.Models.TopicCluster = Backbone.Model.extend({
  initialize: function() {
  },
  renderCounter: 0,
  defaults: {
    height: null,
    selectedSubreddit: 'PoliticsCluster',
    height: 36 * 20,
    path: 'TopicClusterData/PoliticsCluster.json'
  },
  update: function(obj){
    this.set('selectedSubreddit', obj.subreddit, {silent: true});
    this.set('path', 'TopicClusterData/' + obj.subreddit+ '.json');
  }
});
