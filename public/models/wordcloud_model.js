Redd.Models.WordCloud = Backbone.Model.extend({
  parsedData: {

  },
  initialize: function() {
    // example fetch
    // global events
    // Redd.Vent.on('usernameSubmitChange', this.fetch, this);

    // this.set('wordArray', ['Alex', 'Patrick', 'Kevin', 'Elle', 'Bill']);
    // this.set('frequency', {
    //   Alex: this.rand(),
    //   Patrick: this.rand(),
    //   Kevin: this.rand(),
    //   Elle: this.rand(),
    //   Bill: this.rand()
    // });

    this.attributes = this.parse(window.GLOBALWordCloudTestData);
    // this.set('data', this.fetch());
    // this.set('data', read from TestWordCloudGamingAllNouns.txt)

  },
  url: 'api/wordcloud',
  parse: function(data) {
    // overwrite parse to reformat the data before backbone handles it
    var updatedAttributes = {};
    updatedAttributes.wordArray = [];
    updatedAttributes.frequency = {};
    _.each(data, function(obj){
      updatedAttributes.wordArray.push(obj.nouns);
      updatedAttributes.frequency[obj.nouns] = Math.sqrt(+obj.frequency) * 3;
    });
    return updatedAttributes;
  },
});

