Redd.Models.WordCloud = Backbone.Model.extend({
  parsedData: {

  },
  initialize: function() {
    // example fetch
    // global events
    // Redd.Vent.on('usernameSubmitChange', this.fetch, this);

    this.set('wordArray', ['Alex', 'Patrick', 'Kevin', 'Elle', 'Bill']);
    this.set('frequencyOf', {
      Alex: this.rand(),
      Patrick: this.rand(),
      Kevin: this.rand(),
      Elle: this.rand(),
      Bill: this.rand()
    });
    // this.set('data', this.fetch());
    // this.set('data', read from TestWordCloudGamingAllNouns.txt)

  },
  rand: function(){
    return Math.random() * 100  + 50;
  },
  url: 'api/wordcloud/',
  parse: function(data) {
    // overwrite parse to reformat the data before backbone handles it
    return data;
  },
});

