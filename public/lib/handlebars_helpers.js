// {{debug}} helper
Handlebars.registerHelper("debug", function(optionalValue) {
  window.Debug = window.Debug || {};
  console.log("=====-Current-Context-=====");
  console.log(this);
  window.Debug.hbs.context = this;

  if (optionalValue) {
    window.Debug.hbs.val = this;
    console.log("==========-Value-==========");
    console.log(optionalValue);
    console.log("===========================");
  } else {
    console.log("===========================");
  }
});
// {{epoch to utc}} helper
Handlebars.registerHelper("epoch", function(epoch) {
    var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(epoch);
    return d;
});
// {{#compare}} helper
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

// jQuery handlebars helper
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
