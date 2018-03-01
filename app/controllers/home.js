/*!
 * Module dependencies.
 */

const Quiz = require('../models/quiz');
 
exports.index = function (req, res) {
	// setting 'ok' status
	var status = res.status(200);
	Quiz.find({}).exec(function(err, data) {
		// setting json content-type
		res.setHeader('Content-Type', 'application/json');
		if(err) { // if an error happened, sends appropriate data
			status.json({error: true, message: "error while fetching data!"});		
		} else { // sends fetched data
			status.json({data: data});
		}
	});
};