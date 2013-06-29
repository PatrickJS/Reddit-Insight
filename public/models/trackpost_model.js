Redd.Models.TrackPost = Backbone.Model.extend({
  initialize: function() {
    Redd.Vent.on('urlSubmitChange', function(){
      var self = this;
      self.fetch();
      clearInterval(self.timer);
      self.timer = setInterval(function(){
        self.fetch();
      }, 3000);
    }, this);
  },
  url: function() {
    return Redd.Data.urlSubmit +'.json?limit=100';
  },
  sync: Backbone.JSONP.Sync,
  parse: function(data) {
    return data[0].data.children[0].data;
  }
});
