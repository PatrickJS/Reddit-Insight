/*
namespace Redd.d3
*/
$(function(){
  Redd.d3.tv = 250;


  Redd.d3.palette = new Rickshaw.Color.Palette();

  Redd.d3.graph = new Rickshaw.Graph( {
          element: document.querySelector("#chart"),
          width: 540,
          height: 240,
          renderer: 'line',
          series: new Rickshaw.Series.ExpandingDuration([{ name: 'Karma' }], undefined, {
            timeInterval: Redd.d3.tv,
            maxDataPoints: 100,
            timeBase: new Date().getTime() / 1000
          })
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

  Redd.d3.yAxis = new Rickshaw.Graph.Axis.Y( {
    graph: Redd.d3.graph,
    tickFormat: Rickshaw.Fixtures.Number.formatKMBT,
    ticksTreatment: ticksTreatment
  } );

  Redd.d3.yAxis.render();

  // var slider = new Rickshaw.Graph.RangeSlider( {
  //   graph: graph,
  //   element: $('#slider')
  // } );

  var offsetForm = document.getElementById('offset_form');


  Redd.d3.graph.render();

  // var i = 0;
  Redd.d3.iv = setInterval( function() {

    //updated data pushed to this variable:
    Redd.d3.data = { Karma: Math.floor(Math.random() * 200)+200};
    //additional data set dilineated by .two .three ...

    // var randInt = Math.floor(Math.random()*100);
    // data.two = (Math.sin(i++/40) + 4) * (randInt + 400);
    // data.three = randInt + 300;

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
