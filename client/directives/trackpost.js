'use strict';

angular.module('directives')
  .directive('trackPost', function(D3) {
    return {
      restrict: 'EA',
      scope: {
        score: '='
      },
      link: function(scope, element, attrs) {

        var timeInt = 4100;
        scope.bottomRange = 0;
        scope.topRange = scope.score;

        var getRange = function(score) {
          if (score < scope.bottomRange) {
            scope.bottomRange = score;
          } else if(score > scope.topRange){
            scope.topRange = score;
            console.log('in get range')
          }
        };

        var updateYAxis = function(){
          var scaleRange = [scope.bottomRange, scope.topRange];
          var scale = [D3.scale.linear().domain(scaleRange).nice()];
          yAxis.render();
        };

        var scaleRange = [scope.bottomRange, scope.topRange];

        var scale = [D3.scale.linear().domain(scaleRange).nice()];

        var palette = new Rickshaw.Color.Palette();

        var graph = new Rickshaw.Graph( {
                element: document.querySelector("#chart"),
                min:'auto',
                width: 540,
                height: 240,
                renderer: 'stack',
                series: new Rickshaw.Series.ExpandingDuration([{ name: 'Karma' }], undefined, {
                  timeInterval: timeInt,
                  maxDataPoints: 0,
                  timeBase: new Date().getTime() / 1000
                })
        });

        var legend = new Rickshaw.Graph.Legend( {
                element: document.querySelector('#legend'),
                graph: graph
        } );

        var hoverDetail = new Rickshaw.Graph.HoverDetail( {
          graph: graph
        } );

        var ticksTreatment = 'glow';

        var xAxis = new Rickshaw.Graph.Axis.Time( {
          graph: graph,
          ticksTreatment: ticksTreatment
        } );

        xAxis.render();

        var yAxis = new Rickshaw.Graph.Axis.Y.Scaled( {
          scale: scale[0],
          graph: graph,
          tickFormat: Rickshaw.Fixtures.Number.formatKMBT,
          ticksTreatment: ticksTreatment
        } );

        yAxis.render();

        var offsetForm = document.getElementById('offset_form');

        //drop initial 0 value
        graph.series.dropData();

        // console.log('in directive');
        scope.$watch('score', function() {
          // console.log('rendering score');
          //updated data pushed to this variable:
          var data = {
            Karma: scope.score
          };
          console.log(getRange)
          //additional data set dilineated by .two .three ...
          getRange(scope.score)
          updateYAxis();
          //add the data to the series
          graph.series.addData(data);
          console.log("scope.score ", scope.score)
          console.log("scope.top ", scope.topRange)
          console.log("scope.bottom ", scope.bottomRange)
          console.log("yAxis ", yAxis.scale(scale[0]))
          //re render
          // yAxis.render();
          graph.render();


        });
      } // end link
    }; //end return
  }) // end directive
; // end module
