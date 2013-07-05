Redd.Models.SubRedditCluster = Backbone.Model.extend({
  initialize: function() {
  },
  defaults: {
  },
  url: '/api/subredditcluster',
  parse: function(data) {
    return data;
  }

});

