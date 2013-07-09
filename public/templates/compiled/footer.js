(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['footer.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"footer-inner\">\n  <ul class=\"nav nav-pills\">\n    <li><a href=\"#\">© 2013 Reddit Insight</a></li>\n    <li><a href=\"https://github.com/gdi2290/RedditInsight\">Fork on Github</a></li>\n    <li class=\"disabled\"><a href=\"#\">Team:</a></li>\n    <li><a href=\"https://github.com/gdi2290\">Patrick Stapleton</a></li>\n    <li><a href=\"https://github.com/ebeal\">Elle Beal</a></li>\n    <li><a href=\"https://github.com/googamanga\">Alex Gaputin</a></li>\n    <li><a href=\"https://github.com/sheltowt\">Bill Shelton</a></li>\n    <li><a href=\"https://github.com/kevinhamiltonsmith\">Kevin Smith</a></li>\n  </ul>\n</div>\n";
  });
})();