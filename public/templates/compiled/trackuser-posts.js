(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['trackuser-posts.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n ";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.compare || depth0.compare),stack1 ? stack1.call(depth0, depth0.kind, "t3", options) : helperMissing.call(depth0, "compare", depth0.kind, "t3", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n       <a href=\"http://www.reddit.com"
    + escapeExpression(((stack1 = ((stack1 = depth0.data),stack1 == null || stack1 === false ? stack1 : stack1.permalink)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\">\n         <h4>"
    + escapeExpression(((stack1 = ((stack1 = depth0.data),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h4>\n       </a>\n       ";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  stack2 = ((stack1 = helpers.compare || depth0.compare),stack1 ? stack1.call(depth0, ((stack1 = depth0.data),stack1 == null || stack1 === false ? stack1 : stack1.thumbnail), "!==", "default", options) : helperMissing.call(depth0, "compare", ((stack1 = depth0.data),stack1 == null || stack1 === false ? stack1 : stack1.thumbnail), "!==", "default", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n       <br>\n       <span class=\"stats-title\">Author: </span>"
    + escapeExpression(((stack1 = ((stack1 = depth0.data),stack1 == null || stack1 === false ? stack1 : stack1.author)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br>\n       <span class=\"stats-title\">Score: </span>"
    + escapeExpression(((stack1 = ((stack1 = depth0.data),stack1 == null || stack1 === false ? stack1 : stack1.score)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br>\n       <span class=\"stats-title\"><i class=\"icon-arrow-up\"></i>: </span>"
    + escapeExpression(((stack1 = ((stack1 = depth0.data),stack1 == null || stack1 === false ? stack1 : stack1.ups)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</br>\n       <span class=\"stats-title\"><i class=\"icon-arrow-down\"></i>: </span>"
    + escapeExpression(((stack1 = ((stack1 = depth0.data),stack1 == null || stack1 === false ? stack1 : stack1.downs)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br>\n      <span class=\"stats-title\">Created at: </span>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.epoch || depth0.epoch),stack1 ? stack1.call(depth0, ((stack1 = depth0.data),stack1 == null || stack1 === false ? stack1 : stack1.created_utc), options) : helperMissing.call(depth0, "epoch", ((stack1 = depth0.data),stack1 == null || stack1 === false ? stack1 : stack1.created_utc), options)))
    + "<br>\n       <span class=\"stats-title\">Comments: </span>"
    + escapeExpression(((stack1 = ((stack1 = depth0.data),stack1 == null || stack1 === false ? stack1 : stack1.num_comments)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br>\n       <hr>\n ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n       <a href=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.data),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\">\n         <img src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.data),stack1 == null || stack1 === false ? stack1 : stack1.thumbnail)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n       </a>\n       ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n ";
  options = {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data};
  stack2 = ((stack1 = helpers.compare || depth0.compare),stack1 ? stack1.call(depth0, depth0.kind, "t1", options) : helperMissing.call(depth0, "compare", depth0.kind, "t1", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n       <span class=\"stats-title\">Link Title: </span>"
    + escapeExpression(((stack1 = ((stack1 = depth0.data),stack1 == null || stack1 === false ? stack1 : stack1.link_title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br>\n       <span class=\"stats-title\">Author: </span>"
    + escapeExpression(((stack1 = ((stack1 = depth0.data),stack1 == null || stack1 === false ? stack1 : stack1.author)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br>\n       <span class=\"stats-title\">Score: </span>"
    + escapeExpression(((stack1 = ((stack1 = depth0.data),stack1 == null || stack1 === false ? stack1 : stack1.score)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br>\n       <span class=\"stats-title\"><i class=\"icon-arrow-up\"></i>: </span>"
    + escapeExpression(((stack1 = ((stack1 = depth0.data),stack1 == null || stack1 === false ? stack1 : stack1.ups)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</br>\n       <span class=\"stats-title\"><i class=\"icon-arrow-down\"></i>: </span>"
    + escapeExpression(((stack1 = ((stack1 = depth0.data),stack1 == null || stack1 === false ? stack1 : stack1.downs)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br>\n       <span class=\"stats-title\">Sub Reddit: </span>"
    + escapeExpression(((stack1 = ((stack1 = depth0.data),stack1 == null || stack1 === false ? stack1 : stack1.subreddit)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br>\n       <span class=\"stats-title\">Created at: </span>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.epoch || depth0.epoch),stack1 ? stack1.call(depth0, ((stack1 = depth0.data),stack1 == null || stack1 === false ? stack1 : stack1.created_utc), options) : helperMissing.call(depth0, "epoch", ((stack1 = depth0.data),stack1 == null || stack1 === false ? stack1 : stack1.created_utc), options)))
    + "<br>\n       <span class=\"stats-title\">Comment: </span>"
    + escapeExpression(((stack1 = ((stack1 = depth0.data),stack1 == null || stack1 === false ? stack1 : stack1.body)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br>\n       <hr>\n ";
  return buffer;
  }

  buffer += "<ul class=\"nav nav-tabs\" id=\"myTab\">\n  <li class=\"active\"><a href=\"#posts\">Posts</a></li>\n  <li><a href=\"#comments\">Comments</a></li>\n</ul>\n<div class=\"tab-content\">\n<div class=\"tab-pane active\" id=\"posts\">\n";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<div class=\"tab-pane\" id=\"comments\">\n";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });
})();