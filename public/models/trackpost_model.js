Redd.Models.TrackPost = Backbone.Model.JSONP.extend({
  initialize: function() {
    this.pollingLimit = 4000;
    this.urlLimit = 100;
    Redd.on('navchange', this.stopPolling, this);
  },
  url: function() { // TODO: better Regular-Expression
    return this.urlSubmit.replace('www.', 'pay.').replace('http://', 'https://') +'.json?limit='+this.urlLimit+'';
  },
  parse: function(data) {
    return data[0].data.children[0].data;
  },

  poll: function() {
    this.fetch();
    this.stopPolling();
    this.startPolling();
  },
  stopPolling: function(limit) {
    clearInterval(this.timer);
    this.urlLimit = limit || 100;
  },
  startPolling: function() {
    var self = this;
    self.timer = setInterval(function(){
      self.urlLimit = 1;
      self.fetch();
    }, self.pollingLimit);
  }
});
