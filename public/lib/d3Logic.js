d3.json('/lib/userTestData.json', function(data) {
      var chart = nv.models.lineChart();
    nv.addGraph(function() {


      chart.xAxis
          .axisLabel('Time (s)')
          .tickFormat(d3.format(',r'));

      chart.yAxis
          .axisLabel('Karma (v)')
          .tickFormat(d3.format('.02f'));

      d3.select('.chart-container svg')
          .datum(data)
          .transition().duration(500).call(chart);

      nv.utils.windowResize(chart.update);

      return chart;
    });
    Redd.redraw = function(){

        d3.select('.chart-container svg')
        .datum(data)
        .transition().duration(4000).call(chart);
        return chart.update;
    };
 });

