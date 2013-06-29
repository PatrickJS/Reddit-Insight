Redd.Templates = function(id) {
  return Handlebars.compile($('#'+ id +'-template').html());
};
