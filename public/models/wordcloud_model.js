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
    // this.attributes = this.parse(window.GLOBALWordCloudTestData, this.get('count'));
    // this.set('data', this.fetch());
    this.fetch(
      function success(model, res, options){
        console.log('fetch success - model: ', model);
        console.log('fetch success - res: ', res);
        console.log('fetch success - options: ', options);
    }, function error(model, res, options){
        console.log('fetch error - model: ', model);
        console.log('fetch error - res: ', res);
        console.log('fetch error - options: ', options);
    });

  },
  url: '/api/wordClouds/GamingAllNouns',
  parse: function(data) {
    debugger
    // overwrite parse to reformat the data before backbone handles it
    var updatedAttributes = _.extend(this.attributes);
    updatedAttributes.wordArray = [];
    updatedAttributes.frequency = {};
    for(var i = 0; i <= updatedAttributes.count && i < data.length; i++){
      updatedAttributes.wordArray.push(data[i].noun);
      updatedAttributes.frequency[data[i].noun] = Math.sqrt(+data[i].frequency) * this.get('multiple')
    };
    return updatedAttributes;
  }
});

