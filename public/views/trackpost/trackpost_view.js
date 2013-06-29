Redd.Views.TrackPost = Backbone.View.extend({
  initialize: function() {
    console.log('in TrackPost view');
    this.trackpost_stats = new Redd.Views.TrackPostStats({model: this.model});
    this.trackpost_chart = new Redd.Views.TrackPostChart();
    this.model.on('sync', function() {
      console.log('trackpost sync');
      this.trackpoststats.render();
      var obj = this.model.attributes;
      var currentObj = {ups: obj.ups, downs: obj.downs, score: obj.score};
      this.collection.add(currentObj);
      Redd.Vent.trigger('trackpostSync');
    }, this);
  },
  el: '#trackpost',
  template: Redd.Templates('trackpost'),
  events: {
    'submit form': 'enterURL'
  },
  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  enterURL: function(e) {
    if(Redd.Data.urlSubmit) {
      this.trackpostchart.render();
    }
    this.collection.reset();
    var url = $('#tracking-url').val();
    console.log('url submitted', url);
    Redd.Data.urlSubmit = url;
    this.model.fetch();
    Redd.Vent.trigger('urlSubmitChange');
    $('#tracking-url').val('');
    return false;
  }
});
