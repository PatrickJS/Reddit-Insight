Redd.Models.TrackPost = Backbone.Model.JSONP.extend({
  initialize: function() {
    this.pollingLimit = 4000;
    this.urlLimit = 100;
    this.counter = 0;
    Redd.on('navchange', this.stopPolling, this);
  },
  url: function() { // TODO: better Regular-Expression
    return this.urlSubmit.replace('www.', 'pay.').replace('http://', 'https://') +'.json?limit='+this.urlLimit+'';
  },
  parse: function(data) {
    return data[0].data.children[0].data;
  },

  poll: function() {
    this.pollingLimit = 2000;
    this.counter = 0;
    this.fetch();
    this.stopPolling();
    this.startPolling();
  },
  stopPolling: function(limit) {
    clearInterval(this.timer);
    this.urlLimit = limit || 100;
    if (this.counter === 3) {
      this.pollingLimit = 4000;
      this.startPolling();
      this.counter = NaN;
    }
  },
  startPolling: function() {
    var self = this;
    self.timer = setInterval(function(){
      if (self.counter === 3) {
        self.stopPolling();
        return;
      } else {
        self.counter+=1;
      }
      self.urlLimit = 1;
      self.fetch();
    }, self.pollingLimit);
  }
});
