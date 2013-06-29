Redd.Views.WordCloud = Backbone.View.extend({
  initialize: function() {
    console.log('in WordCloud view');
    // render on sync
    this.model.on('sync', this.render, this);
  },
  el: '#wordcloud',
  template: Redd.Templates('track-post'),
  events: {
    'submit form': 'enterURL'
  },
  render: function(){
    this.debug = this.model.attributes;
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  enterURL: function(e) {
    var url = $('#tracking-url').val();
    Redd.Data.urlSubmit = url;
    console.log('url submitted', url);
    this.model.fetch();
    Redd.Vent.trigger('urlSubmitChange');
    $('#tracking-url').val('');
    return false;
  }
});
