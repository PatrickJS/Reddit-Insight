Redd.Collections.TrackPosts = Backbone.Collection.extend({
  model: Redd.Models.TrackPost,

  addModel: function(model) {
    this.add({
      ups: model.ups,
      downs: model.downs,
      score: model.score
    });
  }
});
