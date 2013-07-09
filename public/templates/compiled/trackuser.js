(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['trackuser.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h2>Track a User</h2>\n  <form>\n    <label for=\"tracking-username\"><h4>Track Username</h4></label>\n    <input id=\"tracking-username\" type=\"text\" value=\"keepsmilen\" autofocus>\n    <button id=\"trackuser-submit\" class=\"ladda-button\" data-style=\"contract\" data-size=\"s\">\n      <span class=\"ladda-label\">Submit</span>\n    </button>\n  </form>\n  <button class=\"submit-another ladda-button\" data-size=\"s\">\n    <span class=\"ladda-label\">Track Another User</span>\n  </button>\n  <div id=\"trackuser-data\"></div>\n  <div class=\"loader\"></div>\n  <div id=\"trackuser-posts\"></div>\n";
  });
})();