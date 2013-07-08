/*
namespace Redd.d3
*/
Redd.d3.CreatePostChart = function(collection) {
  var timeInt = 4100,
      bottomRange = collection.last().attributes.score - 50,
      topRange = collection.last().attributes.score + 50;

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


  collection.on('add', function() {
    console.log('yolo add');
    var score = collection.last().attributes.score;

    //updated data pushed to this variable:
    var data = { Karma: score };
    //additional data set dilineated by .two .three ...

    //add the data to the series
    graph.series.addData(data);

    //re render
    graph.render();


  });


  // var iv = setInterval( function() {
  //     var score = collection.last().attributes.score;

  //     //updated data pushed to this variable:
  //     var data = { Karma: score };
  //     //additional data set dilineated by .two .three ...

  //     //add the data to the series
  //     graph.series.addData(data);

  //     //re render
  //     graph.render();


  // //time offset:
  // }, timeInt);

  //add toggles
  offsetForm.addEventListener('change', function(e) {
        var offsetMode = e.target.value;

        if (offsetMode == 'lines') {
                graph.setRenderer('line');
                graph.offset = 'zero';
        } else {
                graph.setRenderer('stack');
                graph.offset = offsetMode;
        }
        graph.render();

  }, false);

};