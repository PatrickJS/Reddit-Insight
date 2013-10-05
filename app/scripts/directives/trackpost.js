'use strict';

angular.module('services')
  .directive('TrackPost', function($d3) {
    return {
      restrict: 'EA',
      scope: {},
      link: function(scope, element, attrs) {
        // TODO: refactor collection to angular POJO

        var bottomRange = collection.last().attributes.score,
            topRange = collection.last().attributes.score,
            timeInt = 4100;

        var scaleRange = [bottomRange,topRange];

        var scale = [d3.scale.linear().domain(scaleRange).nice()];

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


        scope.on('add', function() {
          //updated data pushed to this variable:
          var data = {
            Karma: collection.last().attributes.score
          };
          //additional data set dilineated by .two .three ...

          //add the data to the series
          graph.series.addData(data);

          //re render
          graph.render();


        });
      }
    }
});
