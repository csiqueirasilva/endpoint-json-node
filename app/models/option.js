var mongoose = require('mongoose');
var userPlugin = require('mongoose-user');
var Schema = mongoose.Schema;

/**
 * Option schema
 */

var OptionSchema = new Schema({
  id: Schema.Types.ObjectId,
  text: String,
  value: String
});

module.exports = mongoose.model('Option', OptionSchema);