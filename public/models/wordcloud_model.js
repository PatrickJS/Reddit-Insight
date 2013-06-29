Redd.Models.WordCloud = Backbone.Model.extend({
  parsedData: {

  }
  initialize: function() {
    // example fetch
    // global events
    // Redd.Vent.on('usernameSubmitChange', this.fetch, this);


  },
  url: 'api/wordcloud/',
  parse: function(data) {
    // overwrite parse to reformat the data before backbone handles it
    return data;
  },
  changeMe_Data: {
   [{
        "frequency": 878,
        "nouns": "!"
    }, {
        "frequency": 799,
        "nouns": "game"
    }, {
        "frequency": 669,
        "nouns": "]"
    }, {
        "frequency": 667,
        "nouns": "["
    }, {
        "frequency": 641,
        "nouns": ")"
    }, {
        "frequency": 637,
        "nouns": "("
    }, {
        "frequency": 395,
        "nouns": "xbox"
    }, {
        "frequency": 352,
        "nouns": "games"
    }] 
  } 
});

