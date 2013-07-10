Redd.d3.BubblePie = function(collection) {
  var margin = {t:30, r:20, b:20, l:40 },
    w = ($('#chart').width()) - margin.l - margin.r,
    h = window.innerHeight - margin.t - margin.b;
    color = d3.scale.category10();

  var colors = d3.scale.ordinal()
      .range(["gray","orange"]);

  var svg = d3.select("#chart").append("svg")
    .attr("width", w + margin.l + margin.r)
    .attr("height", h + margin.t + margin.b);

  var groups = svg.append("g")
    .attr("transform", "translate(" + margin.l + "," + margin.t + ")");

  var pieGroups = d3.selectAll('.pie-graph');

  d3.selectAll(".subredditselector").on("change", function(){
    var node = this.value;
    d3.csv("/graphsdata/final_reddit_updated.csv", function(data) {
      filtered_data = data.filter(function(d){return d.subreddit === node;});
      console.log(filtered_data);
      plotBubble(filtered_data);
    });
  });

  d3.csv("/graphsdata/final_reddit_updated.csv", function(data) {
    var subreddit_selections = d3.select(".subredditselector")
      .selectAll("div")
      .data(data)
      .enter()
      .append("option")
        .attr("class", "subreddit_select")
        .attr("id", function(d){return d.subreddit;})
        .text(function(d){return d.subreddit;});

  //Globals 
  x_entent = d3.extent(data, function(d){return +d.total_karma;});
  y_entent = d3.extent(data, function(d){return +d.comments;});

  x = d3.scale.log()
    .range([0, w])
    .domain(x_entent).nice();

  y = d3.scale.log()
    .range([h-60, 0])
    .domain(y_entent).nice();

  xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
    .tickFormat(function(d) {
    if (d=== 0 || d === 250000 || d === 1000000 || d === 2500000 || d === 5000000 || d=== 100000000)
      return String(d);
    return "";
    })
    .ticks(5);

  yAxis = d3.svg.axis()
    .scale(y)
    .orient("right")
    .tickFormat(function(d) {
    if (d=== 0 || d === 250000 || d === 1000000 || d === 2500000 || d === 5000000 || d=== 100000000)
      return String(d);
    return "";
    })
    .ticks(5);

    var lowKarma = function(data){
    var filtered_data = data.filter(function(d){return d.total_karma < 50000;});
    return filtered_data;
  };

  var circles = groups.selectAll("circle")
    .data(lowKarma(data))
    .enter()
    .append("circle")
    .attr("class", "circles")
    .attr({
      cx: function(d) { return x(+d.total_karma);},
      cy: function(d) { return y(+d.comments);},
      r:  function(d) { return Math.abs(Math.log(+d.likes / +d.dislikes)) * 10;},
      id: function(d) { return d.subreddit;}
    })
    .style("fill", function(d) { return color(d.subreddit); });

    var bubbleclick =  function(data) {
      d3.selectAll('.pie-graph').remove();
      var circle = d3.select(this);
      var like_num = parseInt(circle.datum()['likes']);
      var dislike_num = parseInt(circle.datum()['dislikes']);
      var xVal = parseInt(circle.attr("cx"));
      var yVal = parseInt(circle.attr("cy"));
      var pieData = [like_num, dislike_num];
      var pieDatatext = ["Likes","Dislikes"];

      var pieChart = d3.select('#chart').append("svg:svg")
        .data(pieData)
          .attr("width", 100)
          .attr("height", 100)
          .attr("class", "pie-graph")
          .style("position", "absolute")
          .style("overflow", "visible")
          .style("left", xVal -10)
          .style("top", yVal-18)
          .append("svg:g")
            .attr("transform", "translate(50, 50)");

      var arc = d3.svg.arc()
          .outerRadius(50)
          .innerRadius(25);

      var pie = d3.layout.pie()
          .value(function(d) {return d; });


      var arcs = pieChart.selectAll("g.slice")
          .data(pie(pieData))
          .enter()
            .append("svg:g")
              .attr("class", "slice");

        arcs.append("svg:path")
          .attr("d", arc)
          .attr("fill", function(d){ return colors(d.data); });


        arcs.append("svg:text")
        .attr("transform", function(d) {
        return "translate(" + arc.centroid(d) + ")";

        }).attr("text-anchor", "middle").style("font-size", "9px").data(pieDatatext)
        .text(function(d){
          return "" + d + "";
        });
    };

    var mouseOn = function() {

      var circle = d3.select(this);
      var currentRadius = parseInt(circle.attr("r"));

      circle.transition()
        .style("opacity", 0.5);
        circle.transition();

      svg.append("g")
        .attr("class", "guide")
        .append("line")
        .attr("x1", circle.attr("cx"))
        .attr("x2", circle.attr("cx"))
        .attr("y1", +circle.attr("cy") + 26)
        .attr("y2", h - margin.t - margin.b)
        .attr("transform", "translate(40,20)")
        .style("stroke", circle.style("fill"))
        .transition().delay(200).duration(400).styleTween("opacity", function() {
          return d3.interpolate(0, 0.5);
        });

      svg.append("g")
        .attr("class", "guide")
        .append("line")
        .attr("x1", +circle.attr("cx") - 16)
        .attr("x2", 0)
        .attr("y1", circle.attr("cy"))
        .attr("y2", circle.attr("cy"))
        .attr("transform", "translate(40,30)")
        .style("stroke", circle.style("fill"))
        .transition().delay(200).duration(400).styleTween("opacity", function() {
          return d3.interpolate(0, 0.5);
        });

      d3.selection.prototype.moveToFront = function() {
        return this.each(function() {
          this.parentNode.appendChild(this);
        });
      };

      // skip this functionality for IE9, which doesn't like it
      if (!$.browser.msie) {
        circle.moveToFront();
      }
    };

    var mouseOff = function() {
      var circle = d3.select(this);
      var currentRadius = parseInt(circle.attr("r"));

      circle.transition()
      .style("opacity", 0.5);

      d3.selectAll(".guide")
        .transition()
        .duration(100)
        .styleTween("opacity", function() {
          return d3.interpolate(0.5, 0);
        })
        .remove();
    };

    circles.on("mouseover", mouseOn);
    circles.on("mouseout", mouseOff);
    circles.on("click", bubbleclick);

    // tooltips (using jQuery plugin tipsy)
    circles.append("title")
      .append("title")
        .text(function(d) {return d.subreddit + '<p class="tool">Comments<p>'+'<span class="badge badge-important">'+ d.comments +'</span>' + '<p class="tool">Karma<p>'+ '<span class="badge badge-important">'+ d.total_karma +'</span>';});

    $(".circles").tipsy({ gravity: 's', html: true});

    // draw axes and axis labels
    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(" + margin.l + "," + (h - 60+ margin.t) + ")")
      .call(xAxis);

    svg.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + margin.l + "," + margin.t + ")")
      .call(yAxis);

    svg.append("text")
      .attr("class", "x label")
      .attr("text-anchor", "end")
      .attr("x", w + 50)
      .attr("y", h - margin.t - 5)
      .text("Karma");

    svg.append("text")
      .attr("class", "y label")
      .attr("text-anchor", "end")
      .attr("x", - 40)
      .attr("y", 20)
      .attr("dy", ".75em")
      .attr("transform", "rotate(-90)")
      .text("Comments");

  });


  var plotBubble = function(data) {

    var circles = groups.selectAll("circle")
            .data(data, function(d){return d.total_karma;})
            .enter()
            .append("circle")
            .attr("class", "circles")
            .attr({
              cx: function(d) { return x(+d.total_karma);},
              cy: function(d) { return y(+d.comments);},
              r:  function(d) { return Math.abs(Math.log(+d.likes / +d.dislikes)) *10;},
              id: function(d) { return d.subreddit;}
            })
            .style("fill", function(d) { return color(d.subreddit); });

    var bubbleclick =  function(data) {

      d3.selectAll('.pie-graph').remove();
      var circle = d3.select(this);
      var like_num = parseInt(circle.datum()['likes']);
      var dislike_num = parseInt(circle.datum()['dislikes']);
      var xVal = parseInt(circle.attr("cx"));
      var yVal = parseInt(circle.attr("cy"));
      var pieData = [like_num, dislike_num];
      var pieDatatext = ["Likes","Dislikes"];

      var pieChart = d3.select('#chart').append("svg:svg")
          .data(pieData)
          .attr("width", 100)
          .attr("height", 100)
          .attr("class", "pie-graph")
          .style("position", "absolute")
          .style("left", xVal -2)
          .style("top", yVal-10)
          .append("svg:g")
          .attr("transform", "translate(50, 50)");

      var arc = d3.svg.arc()
          .outerRadius(50)
          .innerRadius(25);

      var pie = d3.layout.pie()
          .value(function(d) {return d; });


      var arcs = pieChart.selectAll("g.slice")
          .data(pie(pieData))
          .enter()
          .append("svg:g")
          .attr("class", "slice");

        arcs.append("svg:path")
          .attr("d", arc)
          .attr("fill", function(d){ return colors(d.data); });


        arcs.append("svg:text")
          .attr("transform", function(d) {
            return "translate(" + arc.centroid(d) + ")";
          })
          .attr("text-anchor", "middle")
          .style("font-size", "9px")
          .data(pieDatatext)
          .text(function(d){
            return "" + d + "";
          });
      };

      var mouseOn = function() {
      
        var circle = d3.select(this);
        var currentRadius = parseInt(circle.attr("r"));

        circle.transition()
          .style("opacity", 0.5);

        circle.transition();

        svg.append("g")
          .attr("class", "guide")
          .append("line")
          .attr("x1", circle.attr("cx"))
          .attr("x2", circle.attr("cx"))
          .attr("y1", +circle.attr("cy") + 26)
          .attr("y2", h - margin.t - margin.b)
          .attr("transform", "translate(40,20)")
          .style("stroke", circle.style("fill"))
          .transition().delay(200).duration(400).styleTween("opacity",
                function() { return d3.interpolate(0, 0.5);
          });

        svg.append("g")
          .attr("class", "guide")
          .append("line")
          .attr("x1", +circle.attr("cx") - 16)
          .attr("x2", 0)
          .attr("y1", circle.attr("cy"))
          .attr("y2", circle.attr("cy"))
          .attr("transform", "translate(40,30)")
          .style("stroke", circle.style("fill"))
          .transition().delay(200).duration(400).styleTween("opacity",
                function() { return d3.interpolate(0, 0.5);
          });


        d3.selection.prototype.moveToFront = function() {
          return this.each(function() {
          this.parentNode.appendChild(this);
          });
        };

        // skip this functionality for IE9, which doesn't like it
        if (!$.browser.msie) {
          circle.moveToFront();
          }
      };

      var mouseOff = function() {

        var circle = d3.select(this);
        var currentRadius = parseInt(circle.attr("r"));

          // go back to original size and opacity
        circle.transition()
          .style("opacity", 0.5);

          // fade out guide lines, then remove them
        d3.selectAll(".guide").transition().duration(100).styleTween("opacity",
            function() { return d3.interpolate(0.5, 0); })
        .remove();

      };

      // run the mouseon/out functions
      circles.on("mouseover", mouseOn);
      circles.on("mouseout", mouseOff);
      circles.on("click", bubbleclick);

      // tooltips (using jQuery plugin tipsy)
      circles.append("title")
        .append("title")
        .text(function(d) {
          return d.subreddit + '<p class="tool">Comments<p>' + '<span class="badge badge-important">' + d.comments + '</span>' + '<p class="tool">Karma<p>' + '<span class="badge badge-important">' + d.total_karma + '</span>';
        });


      $(".circles").tipsy({ gravity: 's', html: true});

  };

};