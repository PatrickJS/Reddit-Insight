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
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  clickEvent: function(e) {
    console.log('made an event');
    return false;
  },
  d3Stuff: function(){
    // <!DOCTYPE html>
    // <meta charset="utf-8">
    // <body>
    // <script src="../lib/d3/d3.js"></script>
    // <script src="../d3.layout.cloud.js"></script>
    // <script>
    //   var fill = d3.scale.category20();

    //   d3.layout.cloud().size([300, 300])
    //       .words([
    //         "Hello", "world", "normally", "you", "want", "more", "words",
    //         "than", "this"].map(function(d) {
    //         return {text: d, size: 10 + Math.random() * 90};
    //       }))
    //       .padding(5)
    //       .rotate(function() { return ~~(Math.random() * 2) * 90; })
    //       .font("Impact")
    //       .fontSize(function(d) { return d.size; })
    //       .on("end", draw)
    //       .start();

    //   function draw(words) {
    //     d3.select("body").append("svg")
    //         .attr("width", 300)
    //         .attr("height", 300)
    //       .append("g")
    //         .attr("transform", "translate(150,150)")
    //       .selectAll("text")
    //         .data(words)
    //       .enter().append("text")
    //         .style("font-size", function(d) { return d.size + "px"; })
    //         .style("font-family", "Impact")
    //         .style("fill", function(d, i) { return fill(i); })
    //         .attr("text-anchor", "middle")
    //         .attr("transform", function(d) {
    //           return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
    //         })
    //         .text(function(d) { return d.text; });
    //   }
    // </script>

  }
});
