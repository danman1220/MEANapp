//routes.js

var Character = require('../controllers/CharacterController');

module.exports = function(app) {

	//this is now a database
	var characters = {};

	//set up routing for http requests
	app.route('/api/:name/character/:charName')
		.get(Character.get)
		.post(Character.create);

	//This looks vaguely query-ish... deal with it
	app.route('/api/character').get(Character.all);
	app.route('/api/:name/character').get(Character.all);

	//default routing
	app.route('*').get(function(req, res) {
		res.sendfile('./public/index.html');
	});
};