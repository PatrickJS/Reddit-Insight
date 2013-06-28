Redd.Models.TrackData = Backbone.Model.extend({
  url: function() {
    return this.get('url') +'.json';
  },
  sync: Redd.JSONP.Sync

});
