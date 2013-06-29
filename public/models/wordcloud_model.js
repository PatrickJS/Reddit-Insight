Redd.Models.WordCloud = Backbone.Model.extend({
  initialize: function() {
    // example fetch
    // global events
    // Redd.Vent.on('usernameSubmitChange', this.fetch, this);
  },
  url: 'api/wordcloud/',
  parse: function(data) {
    // overwrite parse to reformat the data before backbone handles it
    return data;
  }

});

