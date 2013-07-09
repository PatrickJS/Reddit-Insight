(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['topiccluster.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return " selected ";
  }

  buffer += "<h2>Topic Cluster</h2>\n  <form id='formtopicCluster'>\n  <span for='subreddit'>Subreddit:</span>\n  <select name=\"subreddit\">\n    <option value='PoliticsCluster' ";
  stack1 = helpers['if'].call(depth0, depth0.PoliticsCluster, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">Politics</option>\n    <option value='ScienceCluster' ";
  stack1 = helpers['if'].call(depth0, depth0.ScienceCluster, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">Science</option>\n    <option value='TechnologyCluster' ";
  stack1 = helpers['if'].call(depth0, depth0.TechnologyCluster, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">Technology</option>\n    <option value='WorldNewsCluster' ";
  stack1 = helpers['if'].call(depth0, depth0.WorldNewsCluster, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">World News</option>\n  </select>\n  <input class='btn' type='submit' value='submit'>\n</form>\n";
  return buffer;
  });
})();