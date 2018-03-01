var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var QuestionSchema = require('./question').schema;

/**
 * Quiz schema
 */

var QuizSchema = new Schema({
  id: String, // use Schema.Types.ObjectId ?
  name: String,
  description: String,
  category: String,
  basePoints: String, // Number, default 0 ?
  startDate: Date,
  endDate: Date,
  isActive: Boolean,
  alreadyAnswered: Boolean,
  questions: [QuestionSchema]
});

// added custom toJSON method to hide some internal mongodb/mongoose fields
QuizSchema.methods.toJSON = function() {
	var o = this.toObject();
	delete o._id;
	delete o.__v;
	o.questions.forEach(function(question) {
		delete question._id;
		if(question.options instanceof Array) {
			question.options.forEach(function(option) {
				delete option._id;
			});
		}
	});
	return o;
};

module.exports = mongoose.model('Quiz', QuizSchema);