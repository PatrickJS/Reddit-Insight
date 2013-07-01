Redd.Models.TrackPost = Backbone.Model.extend({
  initialize: function() {
    this.pollingLimit = 4000;
    Redd.Vent.on('urlSubmitChange', function(){
      var self = this;
      self.fetch();
      clearInterval(self.timer); // refactor to setTimeout
      self.urlLimit = 100;
      self.timer = setInterval(function(){
        self.urlLimit = 1;
        self.fetch();
      }, self.pollingLimit);
    }, this);
  },
  url: function() {
    return this.urlSubmit.replace('www.', 'pay.').replace('http://', 'https://') +'.json?limit='+this.urlLimit+'';
  },
  sync: Backbone.JSONP.Sync,
  parse: function(data) {
    return data[0].data.children[0].data;
  }
});
