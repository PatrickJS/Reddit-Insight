Redd.Models.TrackPost = Backbone.Model.extend({
  url: function() {
    return this.get('url') +'.json';
  },
  sync: Backbone.JSONP.Sync

});
