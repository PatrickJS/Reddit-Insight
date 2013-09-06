Reddit Insight - Reddit Analytics [![Build Status](https://travis-ci.org/gdi2290/RedditInsight.png?branch=master)](https://travis-ci.org/gdi2290/RedditInsight)
=============
An analytics suite for Reddit.com using their public API, combined with real-time data analysis and graphic visualizations of historical data. A five person team, with varying areas of expertise working together to build an analytics platform on top of the Firehose that is Reddit. Technologies used include JavaScript, Backbone.js, Node.js, Handlebars, d3, Express, MongoDB, Mongoose, and Python scripts.

Team:  
<b>Patrick Stapleton</b> [gdi2290.com](https://gdi2290.com/) - Overall MVC architecture, Full-Stack, code refactoring, debugging suite, integrating everything.<br>
<b>Alex Gaputin</b> [googamanga.tumblr.com](http://googamanga.tumblr.com/) - Initiated the idea, pulled all the data from Reddit.com, worked on Word Clouds and Interaction scatter plot, and sliced and diced the data for the "data nuggets", Interactions, and Graphs pages.<br>
<b>Kevin Smith</b> [kevinhamiltonsmith.com](http://kevinhamiltonsmith.com/) - Front-side architecture (router, controller, views, and models), real-time data capture, front-end layout and styling, and user interface.<br>
<b>Elle Beal</b> [ellebeal.com](http://ellebeal.com/) - Worked primarily on the front end integrating the data into the d3.js graphs, project management, as well as styling and user testing.<br>
<b>Bill Shelton</b> [williamshelton.nodejitsu.com](http://williamshelton.nodejitsu.com/) - lead data scientist, data munging, data visualization and machine learning with Python, D3 and R.<br>
<b>Chris Sita</b> [chrissita.com](http://chrissita.com/)- d3 Interaction scatter plot<br>

Logo - Alex Trimpe http://alextrimpe.com/

===
Requirements:  
```bash
npm nodemon
```

Installing Reddit Insight:  

```bash
$ npm install -g nodemon
$ npm start
```

```bash
$ git clone https://github.com/gdi2290/RedditInsight.git
$ cd RedditInsight
$ npm install
```
===

#Debug Helpers

####Global Debug
<pre>
  Debug.[Controller/Router].[action].[view].[model/collection].[method]
</pre>

===
####Handlebars epoch

<pre>
Handlebars.registerHelper("epoch", function(epoch) {
    var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(epoch);
    return d;
});
</pre>

####Handlebars debugger

<pre>
Handlebars.registerHelper("debug", function(optionalValue) {
  console.log("=====-Current-Context-=====");
  console.log(this);

  if (optionalValue) {
    console.log("==========-Value-==========");
    console.log(optionalValue);
    console.log("===========================");
  } else {
    console.log("===========================");
  }
});
</pre>

You could then use that helper in any template like:

<pre>
{{debug}}
</pre>
or
<pre>
{{debug someValue}}
</pre>
You’ll see output in the JavaScript console letting you know what’s going on:
<pre>

=====-Current-Context-=====
email: "alan@test.com"
first_name: "Alan"
last_name: "Johnson"
member_since: "Mar 25, 2011"
phone: "1234567890"
stripeClass: "even"
__proto__: Object
==========-Value-==========
Alan
===========================
</pre>

===
Handlebars Compare
<pre>
{{#compare}}
</pre>

```javascript
Handlebars.registerHelper('compare', function (lvalue, operator, rvalue, options) {

    var operators, result;

    if (arguments.length < 3) {
        throw new Error("Handlerbars Helper 'compare' needs 2 parameters");
    }

    if (options === undefined) {
        options = rvalue;
        rvalue = operator;
        operator = "===";
    }

    operators = {
        '==': function (l, r) { return l == r; },
        '===': function (l, r) { return l === r; },
        '!=': function (l, r) { return l != r; },
        '!==': function (l, r) { return l !== r; },
        '<': function (l, r) { return l < r; },
        '>': function (l, r) { return l > r; },
        '<=': function (l, r) { return l <= r; },
        '>=': function (l, r) { return l >= r; },
        'typeof': function (l, r) { return typeof l == r; }
    };

    if (!operators[operator]) {
        throw new Error("Handlerbars Helper 'compare' doesn't know the operator " + operator);
    }

    result = operators[operator](lvalue, rvalue);

    if (result) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }

});
```
####jQuery Handlebars overwrite

```javascript
$('#content').handlebars($('#template'), { name: "Alan" });
```

<pre>
(function($) {
var compiled = {};
$.fn.handlebars = function(template, data) {
    if (template instanceof jQuery) {
    template = $(template).html();
    }

    compiled[template] = Handlebars.compile(template);
    this.html(compiled[template](data));
};
})(jQuery);
</pre>
