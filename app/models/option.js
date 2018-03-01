var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Option schema
 */

var OptionSchema = new Schema({
  id: String, // use Schema.Types.ObjectId ?
  text: String,
  value: String
});

module.exports = mongoose.model('Option', OptionSchema);