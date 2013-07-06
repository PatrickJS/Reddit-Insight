Redd.Models.TopicCluster = Backbone.Model.extend({
  initialize: function() {
  },
  defaults: {
  },
  url: '/api/topiccluster',
  parse: function(data) {
    return data;
  }

});

