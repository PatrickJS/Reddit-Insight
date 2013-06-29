Redd.Views.WordCloud = Backbone.View.extend({
  initialize: function() {
    console.log('in WordCloud view');
    // render on sync
    this.model.on('sync', this.render, this);
  },
  el: '#wordcloud',
  template: Redd.Templates('wordcloud'),
  events: {
    'click': 'clickEvent'
  },
  render: function(){

    this.$el.html(this.template());
    this.d3Stuff('#wordcloud')

    return this;
  },

  clickEvent: function(e) {
    console.log('made an event');
    return false;
  },
  d3Stuff: function(parentEl){
      var self = this;
      var fill = d3.scale.category20();

      d3.layout.cloud().size([1000, 500])
          .words(this.model.get('wordArray').map(function(d) {  //change wordArray should have list of words
            return {text: d, size: self.model.get('frequencyOf')[d]}; // changed d should be name of word
          }))
          .padding(5)
          .rotate(function() { return ~~(Math.random() * 180) * 1 - 90; })
          .font("Impact")
          .fontSize(function(d) { return d.size; })
          .on("end", draw)
          .start();

      function draw(words) {
        d3.select(parentEl).append("svg")
            .attr("width", 1000)
            .attr("height", 500)
          .append("g")
            .attr("transform", "translate(500,250)")
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
