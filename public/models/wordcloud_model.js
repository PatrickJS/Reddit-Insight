Redd.Models.WordCloud = Backbone.Model.extend({
  initialize: function() {
    this.set('rotateFunc', this.get(this.get('_rotateFuncChoice')),{silent: true});
    console.log('initializing');
    this.base = this.url;
    // this.pull(); // weird things can happen, such as views rendering that aren't shown yet triggering D3 stuff on elements that have no width
  },
  defaults: {
    'baseUrl': null,
    'limit': 250,
    'sizeMultiple': 2,
    'rotateFunc': null,
    'selectedSubreddit': 'GamingNoun',
    '_rotateFuncChoice': '_rotate90discrete',
    '_rotate180continuous': function() { return ~~(Math.random() * 180) - 90;},
    '_rotate90discrete': function() { return ~~(Math.random() * 2) * 90; }
  },
  url: '/api/wordClouds',
  parse: function(data) {
    // overwrite parse to reformat the data before backbone handles it
    var updatedAttributes = _.extend(this.attributes);
    updatedAttributes.wordArray = [];
    updatedAttributes.frequency = {};
    for (var i = 0; i <= updatedAttributes.limit && i < data.length; i++) {
      updatedAttributes.wordArray.push(data[i].noun);
      updatedAttributes.frequency[data[i].noun] = Math.sqrt(+data[i].frequency) * this.get('sizeMultiple');
    }
    return updatedAttributes;
  },

  renderCounter: 0,
  pull: function(){
    this.url = this.base + "/"+this.get('selectedSubreddit')+"?limit="+ this.get('limit');
    this.fetch({
      success: function(model, res, options){
        console.log('fetch success - res: ', res);
      },
      error: function(model, res, options){
        console.log('fetch error - res: ', res);
      }
    });
  },
  update: function(obj) {
    this.set('limit', obj.limit,{silent:true});
    this.set('sizeMultiple', obj.sizeMultiple,{silent:true});
    this.set('selectedSubreddit', obj.subreddit,{silent:true});
    if(this.get('_rotateFuncChoice') !== obj.viewType){
      if( this.get('_rotateFuncChoice') === '_rotate180continuous'){
        this.set('rotateFunc', this.get('_rotate90discrete'), {silent: true});
        this.set('_rotateFuncChoice', '_rotate90discrete',{silent:true});
      } else if ( this.get('_rotateFuncChoice') === '_rotate90discrete') {
        this.set('rotateFunc', this.get('_rotate180continuous'), {silent: true});
        this.set('_rotateFuncChoice', '_rotate180continuous',{silent:true});
      } else {
        throw "internal error: unexpected rotation functino selected";
      }
    }
    this.pull();
  }
});

