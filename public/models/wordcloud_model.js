Redd.Models.WordCloud = Backbone.Model.extend({
  renderCounter: 0,
  parsedData: {

  },
  defaults: {
    'count': 350,
    'sizeMultiple': 2,
    'rotateFunc': null,
    '_rotateFuncChoice': '_rotate90discrete',
    '_rotate180continuous': function() { return ~~(Math.random() * 180) - 90;},
    '_rotate90discrete': function() { return ~~(Math.random() * 2) * 90; },
    'switchRotateFuncChoice': function(){

      if( this.get('_rotateFuncChoice') === '_rotate180continuous'){
        this.set('rotateFunc', this.get('_rotate90discrete'), {silent: true});
        this.set('_rotateFuncChoice', '_rotate90discrete');
      } else if( this.get('_rotateFuncChoice') === '_rotate90discrete'){
        this.set('rotateFunc', this.get('_rotate180continuous'), {silent: true});
        this.set('_rotateFuncChoice', '_rotate180continuous');
      } else { throw "internal error: unexpected rotation functino selected"}
    }
  },
  initialize: function() {
    this.set('rotateFunc', this.get(this.get('_rotateFuncChoice')),{silent: true});
    console.log('initializing');
    this.url += "/GamingNoun?limit="+ this.get('count');

    this.fetch({
      success: function(model, res, options){
        console.log('fetch success - res: ', res);
      },
      error: function(model, res, options){
          console.log('fetch error - res: ', res);
      }
    });
  },
  url: '/api/wordClouds',
  parse: function(data) {
    // overwrite parse to reformat the data before backbone handles it
    var updatedAttributes = _.extend(this.attributes);
    updatedAttributes.wordArray = [];
    updatedAttributes.frequency = {};
    for(var i = 0; i <= updatedAttributes.count && i < data.length; i++){
      updatedAttributes.wordArray.push(data[i].noun);
      updatedAttributes.frequency[data[i].noun] = Math.sqrt(+data[i].frequency) * this.get('sizeMultiple');
    }
    return updatedAttributes;
  }
});

