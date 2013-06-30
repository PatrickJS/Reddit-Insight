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
