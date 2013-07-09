Redd.Views.TopicCluster = Backbone.View.extend({
  initialize: function() {
    this.model.on('sync', this.render, this);
    this.model.on('change', this.render, this);
    $('.topiccluster-template select').on('change', this.formHandler);
  },
  el: '#topiccluster',
  template: Redd.Templates('topiccluster'),
  events: {
    'submit': 'formHandler'
  },
  formHandler: function(e) {
    e.preventDefault();
    var obj ={};
    $('#topiccluster').find('option').each(function(index, data){
      if ( $(data).is(':selected') ) {
        obj.subreddit = $(data).val();
      }
    });
    this.model.update(obj);
  },
  render: function(){
    obj = {};
    obj[this.model.get('selectedSubreddit')] = this.model.get('selectedSubreddit');
    this.$el.html(this.template(obj));
    this.d3Stuff('#topiccluster');
    console.log('Topic Cluster has been rendered ' + (this.model.renderCounter += 1) + " times");

    return this;
  },
  d3Stuff: function(parentEl){
    var width = $('.main-container').width(); //dynWeight
    var height = this.model.get('height');  //dynHeight
    var cluster = d3.layout.cluster()
        // 100 each for ousdie words
        // one cluster is horizontal distance from nodes
        .size([height, ( width - 250) ]);

    var diagonal = d3.svg.diagonal()
        .projection(function(d) { return [d.y, d.x]; });
    var svg = d3.select(parentEl).append("svg")
        .attr("width", width)
        .attr("height", height)
      .append("g")
        .attr("transform", "translate(100,0)");
    d3.json(this.model.get('path')(), function(error, root) {
      var nodes = cluster.nodes(root),
          links = cluster.links(nodes);

      var link = svg.selectAll(".link")
          .data(links)
        .enter().append("path")
          .attr("class", "link")
          .attr("d", diagonal);

      var node = svg.selectAll(".node")
          .data(nodes)
        .enter().append("g")
          .attr("class", "node")
          .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

      node.append("circle")
          .attr("r", 4.5);

      node.append("text")
          .attr("dx", function(d) { return d.children ? -8 : 8; })
          .attr("dy", 3)
          .style("text-anchor", function(d) { return d.children ? "end" : "start"; })
          .text(function(d) { return d.name; });
    });

    d3.select(self.frameElement).style("height", height + "px");
  }
});
