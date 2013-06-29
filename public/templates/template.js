Redd.Templates = function(id) {
  return Handlebars.compile($('#'+ id +'-template').html());
};

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
