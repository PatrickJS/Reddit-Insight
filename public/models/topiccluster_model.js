Redd.Models.TopicCluster = Backbone.Model.extend({
  renderCounter: 0,
  defaults: {
    selectedSubreddit: 'PoliticsCluster',
    height: 36 * 20,
    path: function(){
      console.log('getting path: TopicClusterData/PoliticsCluster.json');
      return 'TopicClusterData/PoliticsCluster.json';
    }
  },
  update: function(obj){
    this.set('selectedSubreddit', obj.subreddit, {silent: true});
    // this.set('path', 'TopicClusterData/' + obj.subreddit+ '.json');
    this.set('path', function(){
      console.log('getting path', 'TopicClusterData/' + obj.subreddit+ '.json');
      return 'TopicClusterData/' + obj.subreddit+ '.json';
    });
  }
});
