'use strict';

angular.module('directives')
  .directive('TrackUser', function($d3) {
    return {
      restrict: 'EA',
      scope: {},
      link: function(scope, element, attrs) {
        // TODO: refactor collection to angular POJO
        var scoreMax = function(){
          scoreArray = [];
          collection.each(function(model){
            if(model.attributes.data.score){scoreArray.push(model.attributes.data.score);}
          });
          console.log(scoreArray);
          return _.max(scoreArray);
        };
        var bottomRange = 0,
            topRange = scoreMax() + 20,
            scaleRange = [bottomRange,topRange],
            scale = [d3.scale.linear().domain(scaleRange).nice()],
            count = 0;

      //console.log(scoreMax());

        var dataParse = function(){
          var allPostData = [];
          collection.each(function(model){
            model = model.attributes;

            if(model.kind === "t3"){

              var objectData = {
                x : count+=1,
                y : model.data.score,
                name : model.data.title
              };
              //model.data.title
              allPostData.push(objectData);
            }
          });
          return allPostData;
        };

        var postData = dataParse();

        var graph = new Rickshaw.Graph({
          element: document.querySelector("#user-chart"),
          renderer: 'bar',
          width: 800,
          height: 240,
          series: [{
            name: "Karma",
            data: postData,
            color: 'steelblue'
          }]
        });
        graph.render();

        hoverDetail = new Rickshaw.Graph.HoverDetail( {
          graph: graph
        } );

        var ticksTreatment = 'glow';

        xAxis = new Rickshaw.Graph.Axis.X( {
          graph: graph,
          tickFormat: " ",
          orientation: "top"
        } );

        xAxis.render();

        yAxis = new Rickshaw.Graph.Axis.Y.Scaled( {
          scale: scale[0],
          graph: graph,
          tickFormat: Rickshaw.Fixtures.Number.formatKMBT,
          ticksTreatment: ticksTreatment
        } );

        yAxis.render();

      } // end link
    }; //end return
  }) // end directive
; // end module
