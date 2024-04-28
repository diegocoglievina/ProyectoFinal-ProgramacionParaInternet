var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  name: String,
  description: String,
  category: String,
  year: Number,
  langs: [String]
});

module.exports = mongoose.model('Project', ProjectSchema);