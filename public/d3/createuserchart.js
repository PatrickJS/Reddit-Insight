Redd.d3.CreateUserChart = function(collection) {
  var bottomRange = 0,
      topRange = 200,
      scaleRange = [bottomRange,topRange];

  var dataParse = function(){
        return _(collection.toJSON()).map(function(model){
          return model.data;
        });
      };
  var yolo = dataParse();
  var scale = [d3.scale.linear().domain(scaleRange).nice()],
      palette = new Rickshaw.Color.Palette();

  var graph = new Rickshaw.Graph( {
              element: document.querySelector("#user-chart"),
              width: 540,
              height: 240,
              renderer: 'line',
              series: new Rickshaw.Series.FixedDuration([{ name: 'Karma'}], yolo, {
                timeInterval: 300,
                maxDataPoints: 0,
                timeBase: new Date().getTime() / 1000
              })
      });

  // Redd.d3.legend = new Rickshaw.Graph.Legend( {
  //         element: document.querySelector('#legend'),
  //         graph: Redd.d3.graph
  // } );

  // Redd.d3.hoverDetail = new Rickshaw.Graph.HoverDetail( {
  //   graph: Redd.d3.graph
  // } );

  // var ticksTreatment = 'glow';

  // Redd.d3.xAxis = new Rickshaw.Graph.Axis.Time( {
  //   graph: Redd.d3.graph,
  //   ticksTreatment: ticksTreatment
  // } );

  // Redd.d3.xAxis.render();

  // Redd.d3.yAxis = new Rickshaw.Graph.Axis.Y.Scaled( {
  //   scale: Redd.d3.scale[0],
  //   graph: Redd.d3.graph,
  //   tickFormat: Rickshaw.Fixtures.Number.formatKMBT,
  //   ticksTreatment: ticksTreatment
  // } );

  // Redd.d3.yAxis.render();

  // var offsetForm = document.getElementById('offset_form');

  //drop initial 0 value
  graph.series.render();

};
