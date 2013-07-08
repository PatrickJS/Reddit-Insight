Redd.d3.CreateUserChart = function(collection) {
  var bottomRange = 0,
      topRange = 200,
      scaleRange = [bottomRange,topRange],
      scale = [d3.scale.linear().domain(scaleRange).nice()];

  var dataParse = function(){
    var allPostData = [],
        dataCount = 0;
        _(collection.toJSON()).map(function(model){
          if(model.kind === "t3"){
            dataCount++;
            var objectData = {
              x : dataCount,
              y : model.data.score
            };
            //model.data.title
            //model.data.score
            //model.data.created_utc
            allPostData.push(objectData);
          }
        });
        return allPostData;
      };

  var postData = dataParse();

  var graph = new Rickshaw.Graph({
    element: document.querySelector("#user-chart"),
    renderer: 'bar',
    series: [{
      data: postData,
      color: 'steelblue'
    }]
  });
  graph.render();

  hoverDetail = new Rickshaw.Graph.HoverDetail( {
    graph: graph
  } );

  var ticksTreatment = 'glow';

  xAxis = new Rickshaw.Graph.Axis.Time( {
    graph: graph,
    ticksTreatment: ticksTreatment
  } );

  xAxis.render();

  yAxis = new Rickshaw.Graph.Axis.Y.Scaled( {
    scale: scale[0],
    graph: graph,
    tickFormat: Rickshaw.Fixtures.Number.formatKMBT,
    ticksTreatment: ticksTreatment
  } );

  yAxis.render();

};
