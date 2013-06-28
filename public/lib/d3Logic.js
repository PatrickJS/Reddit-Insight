// d3.json('/lib/userTestData.json', function(data) {
//       var chart = nv.models.lineChart();
//     nv.addGraph(function() {


//       chart.xAxis
//           .axisLabel('Time (s)')
//           .tickFormat(d3.format(',r'));

//       chart.yAxis
//           .axisLabel('Karma (v)')
//           .tickFormat(d3.format('.02f'));

//       d3.select('.chart-container svg')
//           .datum(data)
//           .transition().duration(500).call(chart);

//       nv.utils.windowResize(chart.update);

//       return chart;
//     });
//     Redd.redraw = function(){

//         d3.select('.chart-container svg')
//         .datum(data)
//         .transition().duration(4000).call(chart);
//         return chart.update;
//     };
//  });
$(document).ready(function(){
  var data = [ { x: 0, y: 40 }, { x: 1, y: 49 }, { x: 2, y: 17 }, { x: 3, y: 42 } ];

  var graph = new Rickshaw.Graph({
          element: document.querySelector("#chart"),
          width: 580,
          height: 250,
          series: [{
                  color: 'steelblue',
                  data: data
          }]
  });
});
graph.render();
