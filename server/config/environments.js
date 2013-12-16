var express = require('express'),
    hbsPrecompiler = require('handlebars-precompiler'),
    path = require('path');

module.exports = function(app) {
  // development compile Handlebars and show errors
  app.configure('development', function(){
    app.set('db-uri', process.env.MONGOLAB_URI || 'mongodb://localhost/WordClouds');
    app.use(express.errorHandler());
  });

  app.configure('production', function(){
    app.set('db-uri', process.env.MONGOLAB_URI);
  });
};
