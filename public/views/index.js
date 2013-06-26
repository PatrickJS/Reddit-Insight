Redd.Views.Index = Backbone.View.extend({
  el: $('#redd-index'),
  initialize: function(){
    this.collection.on('sync', this.addAll, this);
    this.collection.on('add', this.addOne, this);
    this.collection.on('remove', this.addAll, this);
  },
  render: function() {
    this.$el.empty();
    $('#hackreactor-index').html( this.template() );
    return this;
  },
  addOne: function(siteModel) {
    var website =  new HackReactor.Views.Website({model: siteModel});
    $('#hackreactor-websites').prepend(website.render().el);
  },
  addAll: function() {
    $('#hackreactor-websites').html( _( this.collection.models ).map(function(websiteModel) {
      return new HackReactor.Views.Website({model: websiteModel}).render().el;
    }) );
  }

});
