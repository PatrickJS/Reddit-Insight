var mongoose = require('mongoose');

module.exports = function(app) {
  // Create a connection
  mongoose.connect(app.get('db-uri'));
  mongoose.connection.on('err', console.error.bind(console,'Could not connect to database: "'+mongoose.connection.db.databaseName+'".'));
  mongoose.connection.once('open', function() {
    console.log('Connected to database: "'+mongoose.connection.db.databaseName+'"');
  });

  // Setup models
  mongoose.model('GamingNoun', require('../schemas/noun.js'));
  mongoose.model('TechnologyNoun', require('../schemas/noun.js'));
  mongoose.model('FunnyNoun', require('../schemas/noun.js'));
  mongoose.model('AdviceAnimalsNoun', require('../schemas/noun.js'));
  mongoose.model('MineCraftNoun', require('../schemas/noun.js'));
  mongoose.model('WTFNoun', require('../schemas/noun.js'));
  mongoose.model('AwwNoun', require('../schemas/noun.js'));
  mongoose.model('GIFNoun', require('../schemas/noun.js'));
  mongoose.model('LeageOfLegendsNoun', require('../schemas/noun.js'));
  mongoose.model('PicsNoun', require('../schemas/noun.js'));
  mongoose.model('PoliticsNoun', require('../schemas/noun.js'));
  mongoose.model('ScienceNoun', require('../schemas/noun.js'));
  mongoose.model('TodayILearnedNoun', require('../schemas/noun.js'));
  mongoose.model('TreesNoun', require('../schemas/noun.js'));
  mongoose.model('VideosNoun', require('../schemas/noun.js'));
  mongoose.model('WorldNewsNoun', require('../schemas/noun.js'));
  mongoose.model('NSFWNoun', require('../schemas/noun.js'));
};
