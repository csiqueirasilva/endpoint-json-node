var mongoose = require('mongoose');
var userPlugin = require('mongoose-user');
var Schema = mongoose.Schema;
var QuestionSchema = require('./question').schema;

/**
 * Quiz schema
 */

var QuizSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: String,
  description: String,
  category: String,
  basePoints: { type: Number, default: 0 },
  startDate: Date,
  endDate: Date,
  isActive: Boolean,
  alreadyAnswered: Boolean,
  questions: [QuestionSchema]
});

module.exports = mongoose.model('Quiz', QuizSchema);