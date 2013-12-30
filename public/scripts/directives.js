'use strict';
angular.module('directives').directive('Scatterplot', [
  'D3',
  function (D3) {
    return {
      restrict: 'EA',
      scope: {},
      link: function (scope, element, attrs) {
        var margin = {
            t: 30,
            r: 20,
            b: 20,
            l: 40
          };
        var w = $('#chart').width() - margin.l - margin.r;
        var h = w * 0.5 - margin.t - margin.b;
        var color = D3.scale.category10();
        var colors = D3.scale.ordinal().range([
            'gray',
            'orange'
          ]);
        var svg = D3.select('#chart').append('svg').attr('width', w + margin.l + margin.r).attr('height', h + margin.t + margin.b);
        var groups = svg.append('g').attr('transform', 'translate(' + margin.l + ',' + margin.t + ')');
        var pieGroups = D3.selectAll('.pie-graph');
        D3.selectAll('.subredditselector').on('change', function () {
          var node = this.value;
          D3.csv('/graphsdata/final_reddit_updated.csv', function (data) {
            filtered_data = data.filter(function (d) {
              return d.subreddit === node;
            });
            plotBubble(filtered_data);
          });
        });
        D3.csv('/graphsdata/final_reddit_updated.csv', function (data) {
          x_extent = D3.extent(data, function (d) {
            return +d.dislikes / +d.likes;
          });
          y_extent = D3.extent(data, function (d) {
            return +d.interaction;
          });
          x = D3.scale.linear().range([
            0,
            w
          ]).domain(x_extent).nice();
          y = D3.scale.log().range([
            h,
            0
          ]).domain(y_extent).nice();
          karmaScale = D3.scale.log().domain([
            D3.min(data, function (d) {
              return +d.total_karma;
            }),
            D3.max(data, function (d) {
              return +d.total_karma;
            })
          ]).range([
            2,
            55
          ]);
          xAxis = D3.svg.axis().scale(x).orient('bottom').ticks(5);
          yAxis = D3.svg.axis().scale(y).orient('right').ticks(5);
          var circles = groups.selectAll('circle').data(data).enter().append('circle').attr('class', 'circles').attr({
              cx: function (d) {
                return x(+d.dislikes / +d.likes);
              },
              cy: function (d) {
                return y(+d.interaction);
              },
              r: function (d) {
                return karmaScale(d.total_karma);
              },
              id: function (d) {
                return d.subreddit;
              }
            }).style('fill', function (d) {
              return color(d.subreddit);
            });
          var bubbleclick = function (data) {
            D3.selectAll('.pie-graph').remove();
            var circle = D3.select(this);
            var like_num = parseInt(circle.datum()['likes']);
            var dislike_num = parseInt(circle.datum()['dislikes']);
            var xVal = parseInt(circle.attr('cx'));
            var yVal = parseInt(circle.attr('cy'));
            var pieData = [
                like_num,
                dislike_num
              ];
            var pieDatatext = [
                'Likes',
                'Dislikes'
              ];
            var pieChart = D3.select('#chart').append('svg:svg').data(pieData).attr('width', 100).attr('height', 100).attr('class', 'pie-graph').style('position', 'absolute').style('overflow', 'visible').style('left', xVal - 10).style('top', yVal - 18).append('svg:g').attr('transform', 'translate(50, 50)');
            var arc = D3.svg.arc().outerRadius(50).innerRadius(25);
            var pie = D3.layout.pie().value(function (d) {
                return d;
              });
            var arcs = pieChart.selectAll('g.slice').data(pie(pieData)).enter().append('svg:g').attr('class', 'slice');
            arcs.append('svg:path').attr('d', arc).attr('fill', function (d) {
              return colors(d.data);
            });
            arcs.append('svg:text').attr('transform', function (d) {
              return 'translate(' + arc.centroid(d) + ')';
            }).attr('text-anchor', 'middle').style('font-size', '9px').data(pieDatatext).text(function (d) {
              return '' + d + '';
            });
          };
          var mouseOn = function () {
            var circle = D3.select(this);
            var currentRadius = parseInt(circle.attr('r'));
            circle.transition().style('opacity', 0.5);
            circle.transition();
            svg.append('g').attr('class', 'guide').append('line').attr('x1', +circle.attr('cx')).attr('x2', +circle.attr('cx')).attr('y1', +circle.attr('cy') + 10).attr('y2', h + 10).attr('transform', 'translate(' + margin.l + ',' + margin.b + ')').style('stroke', circle.style('fill')).transition().delay(200).duration(400).styleTween('opacity', function () {
              return D3.interpolate(0, 0.5);
            });
            svg.append('g').attr('class', 'guide').append('line').attr('x1', +circle.attr('cx')).attr('x2', 0).attr('y1', circle.attr('cy')).attr('y2', circle.attr('cy')).attr('transform', 'translate(40,30)').style('stroke', circle.style('fill')).transition().delay(200).duration(400).styleTween('opacity', function () {
              return D3.interpolate(0, 0.5);
            });
            D3.selection.prototype.moveToFront = function () {
              return this.each(function () {
                this.parentNode.appendChild(this);
              });
            };
            if (!$.browser.msie) {
              circle.moveToFront();
            }
          };
          var mouseOff = function () {
            var circle = D3.select(this);
            var currentRadius = parseInt(circle.attr('r'));
            circle.transition().style('opacity', 0.5);
            D3.selectAll('.guide').transition().duration(100).styleTween('opacity', function () {
              return D3.interpolate(0.5, 0);
            }).remove();
          };
          circles.on('mouseover', mouseOn);
          circles.on('mouseout', mouseOff);
          circles.on('click', bubbleclick);
          circles.append('title').append('title').text(function (d) {
            return d.subreddit + '<p>Interaction<p>' + '<span class="badge badge-important">' + d.interaction + '</span>' + '<p class="tool">Controversy<p>' + '<span class="badge badge-important">' + Math.round(+d.dislikes / +d.likes * 1000) / 10 + '%</span>';
          });
          $('.circles').tipsy({
            gravity: 's',
            html: true
          });
          svg.append('g').attr('class', 'x axis').attr('transform', 'translate(' + margin.l + ',' + (h + margin.t) + ')').call(xAxis);
          svg.append('g').attr('class', 'y axis').attr('transform', 'translate(' + margin.l + ',' + margin.t + ')').call(yAxis);
          svg.append('text').attr('class', 'x label').attr('text-anchor', 'end').attr('x', w + 40).attr('y', h + 20).text('Controversy');
          svg.append('text').attr('class', 'y label').attr('text-anchor', 'end').attr('x', -40).attr('y', 20).attr('dy', '.75em').attr('transform', 'rotate(-90)').text('Interaction (total count of upvotes and downvotes)');
        });
        var plotBubble = function (data) {
          var circles = groups.selectAll('circle').data(data, function (d) {
              return d.total_karma;
            }).enter().append('circle').attr('class', 'circles').attr({
              cx: function (d) {
                return x(+d.total_karma);
              },
              cy: function (d) {
                return y(+d.interaction);
              },
              r: function (d) {
                return Math.abs(Math.log(+d.likes / +d.dislikes)) * 10 + 10;
              },
              id: function (d) {
                return d.subreddit;
              }
            }).style('fill', function (d) {
              return color(d.subreddit);
            });
          var bubbleclick = function (data) {
            D3.selectAll('.pie-graph').remove();
            var circle = D3.select(this);
            var like_num = parseInt(circle.datum()['likes']);
            var dislike_num = parseInt(circle.datum()['dislikes']);
            var xVal = parseInt(circle.attr('cx'));
            var yVal = parseInt(circle.attr('cy'));
            var pieData = [
                like_num,
                dislike_num
              ];
            var pieDatatext = [
                'Likes',
                'Dislikes'
              ];
            var pieChart = D3.select('#chart').append('svg:svg').data(pieData).attr('width', 100).attr('height', 100).attr('class', 'pie-graph').style('position', 'absolute').style('left', xVal - 2).style('top', yVal - 10).append('svg:g').attr('transform', 'translate(50, 50)');
            var arc = D3.svg.arc().outerRadius(50).innerRadius(25);
            var pie = D3.layout.pie().value(function (d) {
                return d;
              });
            var arcs = pieChart.selectAll('g.slice').data(pie(pieData)).enter().append('svg:g').attr('class', 'slice');
            arcs.append('svg:path').attr('d', arc).attr('fill', function (d) {
              return colors(d.data);
            });
            arcs.append('svg:text').attr('transform', function (d) {
              return 'translate(' + arc.centroid(d) + ')';
            }).attr('text-anchor', 'middle').style('font-size', '9px').data(pieDatatext).text(function (d) {
              return '' + d + '';
            });
          };
          var mouseOn = function () {
            var circle = D3.select(this);
            var currentRadius = parseInt(circle.attr('r'));
            circle.transition().style('opacity', 0.5);
            circle.transition();
            svg.append('g').attr('class', 'guide').append('line').attr('x1', circle.attr('cx')).attr('x2', circle.attr('cx')).attr('y1', +circle.attr('cy') + 26).attr('y2', h - margin.t - margin.b).attr('transform', 'translate(40,20)').style('stroke', circle.style('fill')).transition().delay(200).duration(400).styleTween('opacity', function () {
              return D3.interpolate(0, 0.5);
            });
            svg.append('g').attr('class', 'guide').append('line').attr('x1', +circle.attr('cx') - 16).attr('x2', 0).attr('y1', circle.attr('cy')).attr('y2', circle.attr('cy')).attr('transform', 'translate(40,30)').style('stroke', circle.style('fill')).transition().delay(200).duration(400).styleTween('opacity', function () {
              return D3.interpolate(0, 0.5);
            });
            D3.selection.prototype.moveToFront = function () {
              return this.each(function () {
                this.parentNode.appendChild(this);
              });
            };
            if (!$.browser.msie) {
              circle.moveToFront();
            }
          };
          var mouseOff = function () {
            var circle = D3.select(this);
            var currentRadius = parseInt(circle.attr('r'));
            circle.transition().style('opacity', 0.5);
            D3.selectAll('.guide').transition().duration(100).styleTween('opacity', function () {
              return D3.interpolate(0.5, 0);
            }).remove();
          };
          circles.on('mouseover', mouseOn);
          circles.on('mouseout', mouseOff);
          circles.on('click', bubbleclick);
          circles.append('title').append('title').text(function (d) {
            return d.subreddit + '<p>Interaction<p>' + '<span class="badge badge-important">' + d.interaction + '</span>' + '<p class="tool">Controversy<p>' + '<span class="badge badge-important">' + Math.round(+d.dislikes / +d.likes * 1000) / 10 + '%</span>';
          });
          $('.circles').tipsy({
            gravity: 's',
            html: true
          });
        };
      }
    };
  }
]);
;'use strict';
angular.module('directives').directive('trackPost', [
  'D3',
  function (D3) {
    return {
      restrict: 'EA',
      scope: { score: '=' },
      link: function (scope, element, attrs) {
        var timeInt = 4100;
        scope.bottomRange = 0;
        scope.topRange = scope.score;
        var getRange = function (score) {
          if (score < scope.bottomRange) {
            scope.bottomRange = score;
          } else if (score > scope.topRange) {
            scope.topRange = score;
            console.log('in get range');
          }
        };
        var updateYAxis = function () {
          var scaleRange = [
              scope.bottomRange,
              scope.topRange
            ];
          var scale = [D3.scale.linear().domain(scaleRange).nice()];
          yAxis.render();
        };
        var scaleRange = [
            scope.bottomRange,
            scope.topRange
          ];
        var scale = [D3.scale.linear().domain(scaleRange).nice()];
        var palette = new Rickshaw.Color.Palette();
        var graph = new Rickshaw.Graph({
            element: document.querySelector('#chart'),
            min: 'auto',
            width: 540,
            height: 240,
            renderer: 'stack',
            series: new Rickshaw.Series.ExpandingDuration([{ name: 'Karma' }], undefined, {
              timeInterval: timeInt,
              maxDataPoints: 0,
              timeBase: new Date().getTime() / 1000
            })
          });
        var legend = new Rickshaw.Graph.Legend({
            element: document.querySelector('#legend'),
            graph: graph
          });
        var hoverDetail = new Rickshaw.Graph.HoverDetail({ graph: graph });
        var ticksTreatment = 'glow';
        var xAxis = new Rickshaw.Graph.Axis.Time({
            graph: graph,
            ticksTreatment: ticksTreatment
          });
        xAxis.render();
        var yAxis = new Rickshaw.Graph.Axis.Y.Scaled({
            scale: scale[0],
            graph: graph,
            tickFormat: Rickshaw.Fixtures.Number.formatKMBT,
            ticksTreatment: ticksTreatment
          });
        yAxis.render();
        var offsetForm = document.getElementById('offset_form');
        graph.series.dropData();
        scope.$watch('score', function () {
          var data = { Karma: scope.score };
          console.log(getRange);
          getRange(scope.score);
          updateYAxis();
          graph.series.addData(data);
          console.log('scope.score ', scope.score);
          console.log('scope.top ', scope.topRange);
          console.log('scope.bottom ', scope.bottomRange);
          console.log('yAxis ', yAxis.scale(scale[0]));
          graph.render();
        });
      }
    };
  }
]);
;'use strict';
angular.module('directives').directive('TrackUser', [
  'D3',
  function (D3) {
    return {
      restrict: 'EA',
      scope: { score: '=' },
      link: function (scope, element, attrs) {
        var scoreMax = function () {
          scoreArray = [];
          collection.each(function (model) {
            if (scope.score) {
              scoreArray.push(scope.score);
            }
          });
          console.log(scoreArray);
          return _.max(scoreArray);
        };
        var bottomRange = 0, topRange = scoreMax() + 20, scaleRange = [
            bottomRange,
            topRange
          ], scale = [D3.scale.linear().domain(scaleRange).nice()], count = 0;
        var dataParse = function () {
          var allPostData = [];
          collection.each(function (model) {
            model = model.attributes;
            if (model.kind === 't3') {
              var objectData = {
                  x: count += 1,
                  y: model.data.score,
                  name: model.data.title
                };
              allPostData.push(objectData);
            }
          });
          return allPostData;
        };
        var postData = dataParse();
        var graph = new Rickshaw.Graph({
            element: document.querySelector('#user-chart'),
            renderer: 'bar',
            width: 800,
            height: 240,
            series: [{
                name: 'Karma',
                data: postData,
                color: 'steelblue'
              }]
          });
        graph.render();
        hoverDetail = new Rickshaw.Graph.HoverDetail({ graph: graph });
        var ticksTreatment = 'glow';
        xAxis = new Rickshaw.Graph.Axis.X({
          graph: graph,
          tickFormat: ' ',
          orientation: 'top'
        });
        xAxis.render();
        yAxis = new Rickshaw.Graph.Axis.Y.Scaled({
          scale: scale[0],
          graph: graph,
          tickFormat: Rickshaw.Fixtures.Number.formatKMBT,
          ticksTreatment: ticksTreatment
        });
        yAxis.render();
      }
    };
  }
]);
;