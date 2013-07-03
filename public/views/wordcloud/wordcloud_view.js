Redd.Views.WordCloud = Backbone.View.extend({
  //ADD ABILITY TO INTERACT WITH COUNTER, SIZE, AND ROTATOR TYPE - ALEX
  // can test with "Debug.Controller.wordcloud.model.attributes.switchRotateFuncChoice.call(Debug.Controller.wordcloud.model)"
  initialize: function() {
    console.log('in WordCloud view');
    // render on change
    this.model.on('sync', this.render, this);
    this.model.on('change', this.render, this);
  },
  el: '#wordcloud',
  template: Redd.Templates('wordcloud'),
  events: {
    'submit': 'formHandler'
  },
  render: function(){
    //quick hack, refactor to fit structure
    var obj = {
      limit: this.model.get('limit'),
      sizeMultiple: this.model.get('sizeMultiple')
    };
    //no comparison operators in handlebars!!
    if (this.model.get('_rotateFuncChoice') === '_rotate90discrete') {
      obj._rotate90discrete = '_rotate90discrete';
    } else if (this.model.get('_rotateFuncChoice') === '_rotate180continuous') {
      obj._rotate180continuous = '_rotate180continuous';
    }
    if (this.model.get('wordArray') ) {
      this.$el.html(this.template(obj));
      this.d3Stuff('#wordcloud');
      // this.$('svg').css('background-color', 'black');
      this.$('svg').addClass('word-cloud');
      console.log('WordCloudView has been rendered ' + (this.model.renderCounter += 1) + " times");
    }
    return this;
  },
  formHandler: function(e) {
    e.preventDefault();
    console.log('handling form');
    var obj ={};
    $('#wordCloudForm').find('input').each(function(index, data){
      var dataType    = $(data).attr('type'),
          dataName    = $(data).attr('name'),
          dataChecked = $(data).is(':checked');

      if (dataName !== undefined && (dataType !== 'radio' || dataChecked) ) {
        obj[dataName] = $(data).val();
      }
    });
    this.model.update(obj);
  },
  d3Stuff: function(parentEl){
      var self = this;
      var fill = d3.scale.category20();

      var dynWidth = document.body.clientWidth * 0.9;
      var dynHeight = dynWidth * 0.5;
      d3.layout.cloud().size([dynWidth, dynHeight])
          .words(this.model.get('wordArray').map(function(d) {  //change wordArray should have list of words
            return {text: d, size: self.model.get('frequency')[d]}; // changed d should be name of word
          }))
          .padding(5)
          .rotate(this.model.get('rotateFunc'))
          .font("Impact")
          .fontSize(function(d) { return d.size; })
          .on("end", draw)
          .start();

      function draw(words) {
        d3.select(parentEl).append("svg")
            .attr("width", dynWidth)
            .attr("height", dynHeight)
          .append("g")
            .attr("transform", "translate("+ dynWidth / 2 +"," + dynHeight / 2 + ")")
          .selectAll("text")
            .data(words)
          .enter().append("text")
            .style("font-size", function(d) { return d.size + "px"; })
            .style("font-family", "Impact")
            .style("fill", function(d, i) { return fill(i); })
            .attr("text-anchor", "middle")
            .attr("transform", function(d) {
              return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .text(function(d) { return d.text; });
      }
  }
});
