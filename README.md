Reddit Insight - Reddit Analytics
=============


#Debug Helpers

===
####Global Debug
<pre>
  Debug.Controller.[view].[action or model/collection].[action]
</pre>

===
####Handlebars debugger

<pre>
Handlebars.registerHelper("debug", function(optionalValue) {
  console.log("Current Context");
  console.log("====================");
  console.log(this);

  if (optionalValue) {
    console.log("Value");
    console.log("====================");
    console.log(optionalValue);
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

##Current Context
<pre>
email: "alan@test.com"
first_name: "Alan"
last_name: "Johnson"
member_since: "Mar 25, 2011"
phone: "1234567890"
stripeClass: "even"
__proto__: Object
</pre>
##Value
<pre>
Alan
</pre>

===
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
