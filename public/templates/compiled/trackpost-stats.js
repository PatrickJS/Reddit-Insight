(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['trackpost-stats.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\">\n  <h4>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "  <small>  ";
  if (stack1 = helpers.domain) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.domain; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</small></h4>\n</a>\n  Created at: ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.epoch || depth0.epoch),stack1 ? stack1.call(depth0, depth0.created_utc, options) : helperMissing.call(depth0, "epoch", depth0.created_utc, options)))
    + "<br>\n<div class=\"post-info\">\n  <a href=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.data),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\">\n    <img src=\"";
  if (stack2 = helpers.thumbnail) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.thumbnail; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n  </a>\n  <br>\n  Author: <h4 style=\"display:inline\">";
  if (stack2 = helpers.author) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.author; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</h4><br>\n  Subreddit: <h4 style=\"display:inline\">";
  if (stack2 = helpers.subreddit) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.subreddit; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</h4>\n  <br>\n  Score: <h4 style=\"display:inline\">";
  if (stack2 = helpers.score) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.score; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</h4>\n  <br>\n  <i class=\"icon-arrow-up\"></i>: <h4 style=\"display:inline\">";
  if (stack2 = helpers.ups) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.ups; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</h4>\n  <br>\n  <i class=\"icon-arrow-down\"></i>: <h4 style=\"display:inline\">";
  if (stack2 = helpers.downs) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.downs; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</h4>\n  <br>\n  <a href=\"http://www.reddit.com";
  if (stack2 = helpers.permalink) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.permalink; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" target=\"_blank\">\n    Comments: <h4 style=\"display:inline\">";
  if (stack2 = helpers.num_comments) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.num_comments; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</h4>\n  </a>\n\n</div>\n";
  return buffer;
  });
})();