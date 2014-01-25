
module.exports = function(app, config) {

  app.get('/*', function(req, res, next) {
    res.render('index', {
      title: ''
    });
  });

};
