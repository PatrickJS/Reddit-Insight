Redd.Models.WordCloud = Backbone.Model.extend({
<<<<<<< HEAD
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
=======
  renderCounter: 0,
  url: '/api/wordClouds',
>>>>>>> 758fc4cbe737ad315b34fb7301d9be5007754eae
  defaults: {
    'baseUrl': null,
    'limit': 550,
    'sizeMultiple': 2,
    'rotateFunc': null,
    'selectedSubreddit': 'GamingNoun',
    '_rotateFuncChoice': '_rotate90discrete',
    '_rotate180continuous': function() { return ~~(Math.random() * 180) - 90;},
    '_rotate90discrete': function() { return ~~(Math.random() * 2) * 90; },
<<<<<<< HEAD
    'switchRotateFuncChoice': function(){

      if( this.get('_rotateFuncChoice') === '_rotate180continuous'){
        this.set('rotateFunc', this.get('_rotate90discrete'), {silent: true});
        this.set('_rotateFuncChoice', '_rotate90discrete');
      } else if( this.get('_rotateFuncChoice') === '_rotate90discrete'){
        this.set('rotateFunc', this.get('_rotate180continuous'), {silent: true});
        this.set('_rotateFuncChoice', '_rotate180continuous');
      } else { throw "internal error: unexpected rotation functino selected";}
    }
  },
  url: '/api/wordClouds',
=======
  },
  initialize: function() {
    this.set('rotateFunc', this.get(this.get('_rotateFuncChoice')),{silent: true});
    console.log('initializing');
    this.base = this.url;
    this.pull(this);
  },
  pull: function(self){
    self.url = self.base + "/GamingNoun?limit="+ self.get('limit');
    self.fetch({
      success: function(model, res, options){
        console.log('fetch success - res: ', res);
      },
      error: function(model, res, options){
          console.log('fetch error - res: ', res);
      }
    });
  },
  update: function(obj){
    this.set('limit', obj.limit,{silent:true});
    this.set('sizeMultiple', obj.sizeMultiple,{silent:true});
    if(this.get('_rotateFuncChoice') !== obj.viewType){
      if( this.get('_rotateFuncChoice') === '_rotate180continuous'){
        this.set('rotateFunc', this.get('_rotate90discrete'), {silent: true});
        this.set('_rotateFuncChoice', '_rotate90discrete',{silent:true});
      } else if( this.get('_rotateFuncChoice') === '_rotate90discrete'){
        this.set('rotateFunc', this.get('_rotate180continuous'), {silent: true});
        this.set('_rotateFuncChoice', '_rotate180continuous',{silent:true});
      } else { throw "internal error: unexpected rotation functino selected"}
    }
    this.pull(this);
  },
>>>>>>> 758fc4cbe737ad315b34fb7301d9be5007754eae
  parse: function(data) {
    // overwrite parse to reformat the data before backbone handles it
    var updatedAttributes = _.extend(this.attributes);
    updatedAttributes.wordArray = [];
    updatedAttributes.frequency = {};
    for(var i = 0; i <= updatedAttributes.limit && i < data.length; i++){
      updatedAttributes.wordArray.push(data[i].noun);
      updatedAttributes.frequency[data[i].noun] = Math.sqrt(+data[i].frequency) * this.get('sizeMultiple');
    }
    return updatedAttributes;
  },

  renderCounter: 0,
  parsedData: {

  },
});

