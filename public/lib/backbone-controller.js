Backbone.Controller = Backbone.View.extend({
  el: 'html',
  show: function(action) {
    this[action].render();
    $('#'+action).show();
    return this;
  },
  hide: function() {
    Redd.trigger('navchange');
    $('section').hide();
    return this;
  }
});
