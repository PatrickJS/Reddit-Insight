d3.json('/lib/userTestData.json', function(data) {
   nv.addGraph(function() {
     var chart = nv.models.multiBarHorizontalChart()
         .x(function(d) { return d.title })
         .y(function(d) { return d.value })
         .margin({top: 30, right: 20, bottom: 50, left: 375})
         .showValues(true)
         .tooltips(false)
         .showControls(false);

     chart.yAxis
         .tickFormat(d3.format(',.2f'));

     d3.select('.chart-container svg')
         .datum(data)
       .transition().duration(500)
         .call(chart);

     nv.utils.windowResize(chart.update);

     return chart;
   });
 });
