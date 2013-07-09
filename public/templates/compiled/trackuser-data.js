(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['trackuser-data.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  ";
  stack1 = helpers['if'].call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n    ";
  options = {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data};
  stack2 = ((stack1 = helpers.compare || depth0.compare),stack1 ? stack1.call(depth0, ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.key), "===", "created_utc", options) : helperMissing.call(depth0, "compare", ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.key), "===", "created_utc", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n      <span class=\"stats-title\">created at: </span>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.epoch || depth0.epoch),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "epoch", depth0, options)))
    + " <br>\n    ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <span class=\"stats-title\">"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ": </span>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + " <br>\n    ";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<div id=\"user-chart\"></div>\n";
  return buffer;
  });
})();