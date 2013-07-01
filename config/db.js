var mongoose = require('mongoose');

module.exports = function(app) {
	mongoose.model('GamingNoun', require('../schemas/noun.js'));
	mongoose.model('Noun', require('../schemas/noun.js'));
};
