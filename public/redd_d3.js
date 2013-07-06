/*
namespace Redd.d3
*/
Redd.d3.on('initPostChart', function() {
  Redd.d3.tv = 1000;
  //inject these values into the graph, with arguments (see below)
  var bottomRange = Debug.Controller.trackpost.collection.first().attributes.score - 50;
  var topRange = Debug.Controller.trackpost.collection.first().attributes.score + 50;
  Redd.d3.scaleRange = [bottomRange,topRange];

  Redd.d3.scale = [d3.scale.linear().domain(Redd.d3.scaleRange).nice()];

  Redd.d3.palette = new Rickshaw.Color.Palette();

  Redd.d3.graph = new Rickshaw.Graph( {
          element: document.querySelector("#chart"),
          width: 540,
          height: 240,
          renderer: 'line',
          series: new Rickshaw.Series.ExpandingDuration([{ name: 'Karma' }], undefined, {
            timeInterval: Redd.d3.tv,
            maxDataPoints: 0,
            timeBase: new Date().getTime() / 1000
          })
          // min:'auto'
          // max:'auto'
  });

  Redd.d3.legend = new Rickshaw.Graph.Legend( {
          element: document.querySelector('#legend'),
          graph: Redd.d3.graph
  } );

  Redd.d3.hoverDetail = new Rickshaw.Graph.HoverDetail( {
    graph: Redd.d3.graph
  } );

  var ticksTreatment = 'glow';

  Redd.d3.xAxis = new Rickshaw.Graph.Axis.Time( {
    graph: Redd.d3.graph,
    ticksTreatment: ticksTreatment
  } );

  Redd.d3.xAxis.render();

  Redd.d3.yAxis = new Rickshaw.Graph.Axis.Y.Scaled( {
    scale: Redd.d3.scale[0],
    graph: Redd.d3.graph,
    tickFormat: Rickshaw.Fixtures.Number.formatKMBT,
    ticksTreatment: ticksTreatment
  } );

  Redd.d3.yAxis.render();

  var offsetForm = document.getElementById('offset_form');

  //drop initial 0 value
  Redd.d3.graph.series.dropData();

  Redd.d3.iv = setInterval( function() {
    Redd.d3.score = Debug.Controller.trackpost.collection.last().attributes.score;

    //updated data pushed to this variable:
    Redd.d3.data = { Karma: Redd.d3.score};
    //additional data set dilineated by .two .three ...
    console.log(Redd.d3.data);

    //add the data to the series
    Redd.d3.graph.series.addData(Redd.d3.data);

    //re render
    Redd.d3.graph.render();

  //time offset:
  }, Redd.d3.tv );

  //add toggles
  offsetForm.addEventListener('change', function(e) {
        var offsetMode = e.target.value;

        if (offsetMode == 'lines') {
                Redd.d3.graph.setRenderer('line');
                Redd.d3.graph.offset = 'zero';
        } else {
                Redd.d3.graph.setRenderer('stack');
                Redd.d3.graph.offset = offsetMode;
        }
        Redd.d3.graph.render();

  }, false);

});
