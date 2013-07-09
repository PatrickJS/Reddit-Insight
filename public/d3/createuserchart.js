Redd.d3.CreateUserChart = function(collection) {
  var bottomRange = 0,
      topRange = 200,
      scaleRange = [bottomRange,topRange],
      scale = [d3.scale.linear().domain(scaleRange).nice()],
      count = 0;
  var dataParse = function(){
    var allPostData = [];
        window.yolo = collection;
    collection.each(function(model){
      model = model.attributes;

      if(model.kind === "t3"){
        var utcSeconds = model.data.created;
        var d = new Date(0);
        var utcDate = d.setUTCSeconds(utcSeconds);

        var objectData = {
          x : count+=1,
          y : model.data.score,
          title : model.data.title
        };
        //model.data.title
        //model.data.score
        // model.data.created;
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

  xAxis = new Rickshaw.Graph.Axis.X( {
    graph: graph
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
