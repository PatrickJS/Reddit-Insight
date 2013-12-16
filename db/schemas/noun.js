var mongoose = require('mongoose');

var Noun = new mongoose.Schema({
  noun: String,
  frequency: Number
});

module.exports = Noun;
