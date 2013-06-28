/*
namespace Redd.d3
*/
$(function(){
  var tv = 250;


  var palette = new Rickshaw.Color.Palette();

  var graph = new Rickshaw.Graph( {
          element: document.querySelector("#chart"),
          width: 540,
          height: 240,
          renderer: 'line',
          series: new Rickshaw.Series.ExpandingDuration([{ name: 'Karma' }], undefined, {
            timeInterval: tv,
            maxDataPoints: 100,
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

  var yAxis = new Rickshaw.Graph.Axis.Y( {
    graph: graph,
    tickFormat: Rickshaw.Fixtures.Number.formatKMBT,
    ticksTreatment: ticksTreatment
  } );

  yAxis.render();

  // var slider = new Rickshaw.Graph.RangeSlider( {
  //   graph: graph,
  //   element: $('#slider')
  // } );

  var offsetForm = document.getElementById('offset_form');


  graph.render();

  var i = 0;
  var iv = setInterval( function() {

    //updated data pushed to this variable:
    var data = { Karma: Math.floor(Math.random() * 200)+200};
    //additional data dilineated by .two .three ...

    // var randInt = Math.floor(Math.random()*100);
    // data.two = (Math.sin(i++/40) + 4) * (randInt + 400);
    // data.three = randInt + 300;

    //add the data to the series
    graph.series.addData(data);
    //re render
    graph.render();

  //time offset:
  }, tv );

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

});
