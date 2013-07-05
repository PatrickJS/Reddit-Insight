Redd.Models.TrackPost = Backbone.Model.extend({
  initialize: function() {
    this.pollingLimit = 4000;
    this.on('urlSubmitChange', this.poll, this);
  },
  url: function() { // TODO: better Regular-Expression
    return this.urlSubmit.replace('www.', 'pay.').replace('http://', 'https://') +'.json?limit='+this.urlLimit+'';
  },
  sync: Backbone.JSONP.Sync,
  parse: function(data) {
    return data[0].data.children[0].data;
  },

  poll: function() {
    var self = this;
    self.fetch();
    // TODO: refactor to setTimeout
    clearInterval(self.timer);
    self.urlLimit = 100;
    self.timer = setInterval(function(){
      self.urlLimit = 1;
      self.fetch();
    }, self.pollingLimit);
  }
});
