(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['nav.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"navbar\">\n  <div class=\"navbar-inner\">\n    <div class=\"container\" style=\"width: auto;\">\n      <a class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\".nav-collapse\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </a>\n      <a class=\"brand\" href=\"\">Reddit Insight</a>\n      <div class=\"nav-collapse\">\n        <ul class=\"nav\">\n          <li class=\"\"><a href=\"#/trackpost\">Track Post</a></li>\n          <li class=\"\"><a href=\"#/trackuser\">Track User</a></li>\n          <li class=\"\"><a href=\"#/wordcloud\">Word Clouds</a></li>\n          <li class=\"\"><a href=\"#/topiccluster\">Topic Cluster</a></li>\n          <li class=\"\"><a href=\"#/circlecluster\">All The Clusters</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n";
  });
})();