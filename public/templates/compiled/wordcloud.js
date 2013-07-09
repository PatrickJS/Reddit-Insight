(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['wordcloud.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return " selected ";
  }

function program3(depth0,data) {
  
  
  return " checked ";
  }

  buffer += "<h2>Word Clouds</h2>\n  <form id='wordCloudForm'>\n    <span for='subreddit'>Subreddit:</span>\n    <select name=\"subreddit\">\n      <option value='GamingNoun' ";
  stack1 = helpers['if'].call(depth0, depth0.GamingNoun, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">Gaming</option>\n      <option value='TechnologyNoun' ";
  stack1 = helpers['if'].call(depth0, depth0.TechnologyNoun, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">Technology</option>\n      <option value='FunnyNoun' ";
  stack1 = helpers['if'].call(depth0, depth0.FunnyNoun, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">Funny</option>\n      <option value='AdviceAnimalsNoun' ";
  stack1 = helpers['if'].call(depth0, depth0.AdviceAnimalsNoun, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">Advice Animals</option>\n      <option value='MineCraftNoun' ";
  stack1 = helpers['if'].call(depth0, depth0.MineCraftNoun, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">Mine Craft</option>\n      <option value='WTFNoun' ";
  stack1 = helpers['if'].call(depth0, depth0.WTFNoun, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">WTF</option>\n      <option value='AwwNoun' ";
  stack1 = helpers['if'].call(depth0, depth0.AwwNoun, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">Aww</option>\n      <option value='GIFNoun' ";
  stack1 = helpers['if'].call(depth0, depth0.GIFNoun, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">GIF</option>\n      <option value='LeageOfLegendsNoun' ";
  stack1 = helpers['if'].call(depth0, depth0.LeageOfLegendsNoun, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">Leage Of Legends</option>\n      <option value='PicsNoun' ";
  stack1 = helpers['if'].call(depth0, depth0.PicsNoun, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">Pics</option>\n      <option value='PoliticsNoun' ";
  stack1 = helpers['if'].call(depth0, depth0.PoliticsNoun, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">Politics</option>\n      <option value='ScienceNoun' ";
  stack1 = helpers['if'].call(depth0, depth0.ScienceNoun, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">Science</option>\n      <option value='TodayILearnedNoun' ";
  stack1 = helpers['if'].call(depth0, depth0.TodayILearnedNoun, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">Today I Learned</option>\n      <option value='TreesNoun' ";
  stack1 = helpers['if'].call(depth0, depth0.TreesNoun, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">Trees</option>\n      <option value='VideosNoun' ";
  stack1 = helpers['if'].call(depth0, depth0.VideosNoun, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">Videos</option>\n      <option value='WorldNewsNoun' ";
  stack1 = helpers['if'].call(depth0, depth0.WorldNewsNoun, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">World News</option>\n      <option value='NSFWNoun' ";
  stack1 = helpers['if'].call(depth0, depth0.NSFWNoun, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">NSFW</option>\n    </select>\n    <span>Number of Items pulled:</span>\n    <input type='input' name='limit' value=\"";
  if (stack1 = helpers.limit) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.limit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    <span for='sizeMultiple'>Size Multiplyer</span>\n    <input type='input' name='sizeMultiple' value=\"";
  if (stack1 = helpers.sizeMultiple) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.sizeMultiple; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    <input type='radio' name='viewType' ";
  stack1 = helpers['if'].call(depth0, depth0._rotate90discrete, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " value=\"_rotate90discrete\"> Horizontal and Vertical\n    <input type='radio' name='viewType' ";
  stack1 = helpers['if'].call(depth0, depth0._rotate180continuous, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " value='_rotate180continuous'> All Angles\n    <input class='btn' type='submit' value='submit'>\n  </form>\n";
  return buffer;
  });
})();