var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var OptionSchema = require('./option').schema;

/**
 * Question schema
 */

var QuestionSchema = new Schema({
  id: String, // use Schema.Types.ObjectId ?
  text: String,
  type: {type: String, enum: ['text', 'select']},
  options: {type: [OptionSchema], default: undefined}
});

module.exports = mongoose.model('Question', QuestionSchema);