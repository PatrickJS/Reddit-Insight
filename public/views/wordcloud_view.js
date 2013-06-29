Redd.Views.WordCloud = Backbone.View.extend({
  initialize: function() {
    console.log('in WordCloud view');
    // render on sync
    this.model.on('sync', this.render, this);
  },
  el: '#wordcloud',
  template: Redd.Templates('wordcloud'),
  events: {
    'click': 'clickEvent'
  },
  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  clickEvent: function(e) {
    console.log('made an event');
    return false;
  }
});
