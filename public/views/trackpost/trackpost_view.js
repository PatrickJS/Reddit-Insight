Redd.Views.TrackPost = Backbone.View.extend({
  el: '#trackpost',

  template: Redd.Templates('trackpost'),

  events: {
    'submit form': 'enterURL',
    'click .submit-another': 'slideDown',
    'mouseenter a.preview': 'toolTipHover',
    'mouseleave a.preview': 'toolTipLeave',
    'click a.preview': 'toolTipClick'
  },

  initialize: function() {
    this.trackpost_stats = new Redd.Views.TrackPostStats({
      model:      this.model,
      collection: this.collection
    });
    this.trackpost_chart = new Redd.Views.TrackPostChart({
      model:      this.model,
      collection: this.collection
    });
  },

  render: function(){
    this.$el.html(this.template(this.model.attributes));
    this.delegateEvents();
    return this;
  },

  // TODO: refactor rendering of subview
  enterURL: function(e) {
    if ($('#tracking-url').val() !== '') {
      this.slideUp();
      if(this.model.urlSubmit) {
        this.trackpost_chart.render();
      }
      this.collection.reset();
      var url = $('#tracking-url').val();
      this.model.urlSubmit = url;
      this.model.poll();
      $('#tracking-url').val('');
    }
    return false;
  },

  slideUp: function() {
    $('.loader').fadeIn();
    $('.submit-another').hide();
    $('#trackpost form').slideUp('slow');
  },

  slideDown: function(e) {
    e.preventDefault();
    $('#trackpost form').slideDown('slow');
  },

  toolTipHover: function(e) {
    e.preventDefault();
    $("body").append("<p id='preview'><img src='"+ e.currentTarget.href +"' alt='Image preview' /></p>");
    $("#preview")
      .css("top",(e.pageY - 10) + "px")
      .css("left",(e.pageX + 20) + "px")
      .fadeIn("fast");
  },
  toolTipLeave: function(e) {
    e.preventDefault();
    $("#preview").remove();
  },
  toolTipClick: function (e) {
    e.preventDefault();
  }
});
