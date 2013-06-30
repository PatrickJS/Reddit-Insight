Redd.Models.WordCloud = Backbone.Model.extend({
  renderCounter: 0,
  parsedData: {

  },
  defaults: {
    'count': 400,
    'multiple': 2,
    'rotateFunc': null,
    '_rotatFuncChoice': '_rotate90discrete',
    '_rotate180continuous': function() { return ~~(Math.random() * 180) - 90;},
    '_rotate90discrete': function() { return ~~(Math.random() * 2) * 90; },
    'switchRotateFuncChoice': function(){
      // debugger
      if( this.get('_rotatFuncChoice') === '_rotate180continuous'){
        this.set('rotateFunc', this.get('_rotate90discrete'), {silent: true});
        this.set('_rotatFuncChoice', '_rotate90discrete');
      } else if( this.get('_rotatFuncChoice') === '_rotate90discrete'){
        this.set('rotateFunc', this.get('_rotate180continuous'), {silent: true});
        this.set('_rotatFuncChoice', '_rotate180continuous');
      } else { throw "internal error: unexpected rotation functino selected"}
    }
  },
  initialize: function() {
    this.set('rotateFunc', this.get(this.get('_rotatFuncChoice')),{silent: true});
    this.attributes = this.parse(window.GLOBALWordCloudTestData, this.get('count'));
    // this.set('data', this.fetch());
    // this.set('data', read from TestWordCloudGamingAllNouns.txt)

  },
  url: 'api/wordcloud',
  parse: function(data, count) {
    // overwrite parse to reformat the data before backbone handles it
    var updatedAttributes = _.extend(this.attributes);
    updatedAttributes.wordArray = [];
    updatedAttributes.frequency = {};
    for(var i = 0; i <= count && i < data.length; i++){
      updatedAttributes.wordArray.push(data[i].nouns);
      updatedAttributes.frequency[data[i].nouns] = Math.sqrt(+data[i].frequency) * this.get('multiple')
    };
    return updatedAttributes;
  }
});

