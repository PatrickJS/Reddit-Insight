Backbone.Controller = Backbone.View.extend({
  el: 'html',
  show: function(action) {
    this[action].render();
    $('#'+action).show();
    return this;
  },
  hide: function() {
    $('section').hide();
    return this;
  },
  hidePages: function() {
    $('.main-container').hide();
  },
  showPages: function() {
    $('.main-container').show();
  },
  hideFull: function() {
    $('.full-width-container').hide();
  },
  showFull: function() {
    $('.full-width-container').show();
  }
});
