Redd.Models.TrackPost = Backbone.Model.extend({
  initialize: function() {
    Redd.Vent.on('urlSubmitChange', function(){
      var self = this;
      self.fetch();
      clearInterval(self.timer);
      Redd.Data.urlLimit = 100;
      self.timer = setInterval(function(){
        Redd.Data.urlLimit = 1;
        self.fetch();
      }, 4000);
    }, this);
  },
  url: function() {
    return Redd.Data.urlSubmit +'.json?limit='+Redd.Data.urlLimit+'';
  },
  sync: Backbone.JSONP.Sync,
  parse: function(data) {
    return data[0].data.children[0].data;
  }
});
