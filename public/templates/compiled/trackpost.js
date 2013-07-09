(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['trackpost.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"post\">\n  <h2>Track a Post</h2>\n  <div class=\"row-fluid\">\n    <div class=\"span12\">\n      <form>\n        <label for=\"tracking-url\"><h4>Track Post</h4></label>\n        <input id=\"tracking-url\" type=\"text\" value=\"http://\" autofocus>\n        <button id=\"trackpost-submit\" class=\"ladda-button\" data-style=\"contract\" data-size=\"s\">\n          <span class=\"ladda-label\">Submit</span>\n        </button>\n      </form>\n    </div>\n  </div>\n  <div class=\"row-fluid\">\n    <button class=\"submit-another ladda-button\" data-size=\"s\">\n      <span class=\"ladda-label\">Track Another Post</span>\n    </button>\n    <div class=\"loader\"></div>\n    <article id=\"trackpost-stats\"></article>\n    <article id=\"trackpost-chart\"></article>\n  </div>\n</div>\n";
  });
})();