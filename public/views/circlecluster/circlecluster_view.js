Redd.Views.CircleCluster = Backbone.View.extend({
  initialize: function() {
  },
  el: '#circlecluster',
  template: Redd.Templates('circlecluster'),
  render: function(){
    this.$el.html(this.template());
    this.d3();
    return this;
  },

  d3: function(){
    var diameter = $('#circlecluster').width();

    //error check on 0 width to avoid crashing
    if (diameter === 0) {
      return;
    }

    var tree = d3.layout.tree()
        .size([360, diameter / 2 - 120])
        .separation(function(a, b) { return (a.parent == b.parent ? 1 : 2) / a.depth; });

    var diagonal = d3.svg.diagonal.radial()
        .projection(function(d) { return [d.y, d.x / 180 * Math.PI]; });

    var svg = d3.select("#circlecluster").append("svg")
        .attr("width", diameter)
        .attr("height", diameter)
      .append("g")
        .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

    d3.json("/circleclusterdata/allCluster.json", function(error, root) {
      var nodes = tree.nodes(root),
          links = tree.links(nodes);

      var link = svg.selectAll(".link")
          .data(links)
        .enter().append("path")
          .attr("class", "link")
          .attr("d", diagonal);

      var node = svg.selectAll(".node")
          .data(nodes)
        .enter().append("g")
          .attr("class", "node")
          .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; });

      node.append("circle")
          .attr("r", 4.5);

      node.append("text")
          .attr("dy", ".31em")
          .attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
          .attr("transform", function(d) { return d.x < 180 ? "translate(8)" : "rotate(180)translate(-8)"; })
          .text(function(d) { return d.name; });
    });

    d3.select(self.frameElement).style("height", diameter - 150 + "px");
  }
});
