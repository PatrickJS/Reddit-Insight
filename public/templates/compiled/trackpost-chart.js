(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['trackpost-chart.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"chart_container\">\n  <div id=\"y_axis\"></div>\n  <span class=\"y-axis\">Karma</span>\n  <span class=\"x-axis\">Time</span>\n  <div id=\"chart\"></div>\n  <div id=\"legend\"></div>\n</div>\n";
  });
})();