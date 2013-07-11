Reddit Insight - Reddit Analytics [![Build Status](https://travis-ci.org/gdi2290/RedditInsight.png?branch=master)](https://travis-ci.org/gdi2290/RedditInsight)
=============
An analytics suite for Reddit.com using their public API, combined with real-time data analysis and graphic visualizations. Technologies used include Backbone.js, Node.js, D3, Express, MongoDB, with Python scripts.

Team:  
Patrick Stapleton - app architecture, front-end   
Alex Gaputin - pulled all the data, back-end 
Kevin Smith - front-end architecture, realtime data capture, front-end things  
Elle Beal - d3 and visualizer  
Bill Shelton - data munging, data visualization and machine learning with Python, D3 and R  
Chris Sita - d3 Interaction scatter plot  

Logo - Alex Trimpe http://alextrimpe.com/

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
