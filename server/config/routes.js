var clouds = require('../controllers/clouds');

module.exports = function(app) {
  app.get('/api/wordClouds/:collectionName', clouds.getCloud);
};
