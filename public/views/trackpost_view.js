Redd.Views.TrackPost = Backbone.View.extend({
  initialize: function() {
    console.log('in TrackPost view');
    this.trackpoststats = new Redd.Views.TrackPostStats({model: this.model});
    this.trackpostchart = new Redd.Views.TrackPostChart();
    this.model.on('sync', function() {
      console.log('trackpost sync');
      this.trackpoststats.render();
      this.trackpostchart.render();
      var obj = this.model.attributes;
      var currentObj = {ups: obj.ups, downs: obj.downs, score: obj.score};
      this.collection.add(currentObj);
    }, this);
  },
  el: '#trackpost',
  template: Redd.Templates('track-post'),
  events: {
    'submit form': 'enterURL'
  },
  render: function(){
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
