var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  noun: String,
  frequency: Number
});
