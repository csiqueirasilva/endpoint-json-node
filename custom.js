'use strict';

var process = require('process');
var Quiz = require('./app/models/quiz');

// registering the script as a callback method on require
module.exports = function () {
	// Test data
	var dummyData = {"id":"1","name":"Teste de desenvolvimento","description":"Teste para desenvolvedor back-end","category":"Testes","basePoints":"100","startDate":"2018-02-15 00:00:00","endDate":"2018-02-22 00:00:00","isActive":true,"alreadyAnswered":false,"questions":[{"id":"1","text":"Qual o seu nome?","type":"text"},{"id":"2","text":"Para qual área você está aplicando?","type":"select","options":[{"id":"1","text":"Front-end","value":"front-end"},{"id":"2","text":"Back-end","value":"back-end"}]}]};
	
	// instancing test data as a model class
	var endpointQuiz = new Quiz(dummyData);
	
	// removing all known instances
	Quiz.remove({}, function(err) {
		if(err) {
			console.log("\nError while removing all previous quiz data in the database. Exiting...\n");
			process.exit(1);
		}
	});
	
	// saving the instance in the database
	endpointQuiz.save(function(err) {
		if(err) {
			console.log("\nError while inserting dummy quiz data. Exiting...\n");
			process.exit(1);
		}
	});	
	
};