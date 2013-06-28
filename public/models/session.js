Redd.Models.Session = Backbone.Model.extend({
  defaults: {
    access_token: null,
    user_id: null
  },

  initialize: function(){
    this.load();
  },

  authenticated: function(){
    Boolean(this.get("access_token"));
  },
  // # Saves session information to cookie
  save: function(auth_hash){
    $.cookie('user_id', auth_hash.id);
    $.cookie('access_token', auth_hash.access_token);
  },
  // # Loads session information from cookie
  load: function(){
    this.set({user_id: $.cookie('user_id')});
    this.set({access_token: $.cookie('access_token')});
  }
});
