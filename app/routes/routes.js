//routes.js

var Character = require('../controllers/CharacterController');

module.exports = function(app) {

	//set up routing for http requests
	app.route('/api/:name/character/:charName')
		.get(Character.get)
		.post(Character.create)
		.put(Character.update)
		.delete(Character.delete);

	//This looks vaguely query-ish... deal with it
	app.route('/api/character')
		.get(Character.all)
		.delete(Character.deleteAll);
	app.route('/api/:name/character')
		.get(Character.all)
		.delete(Character.deleteAll);

	app.route('/api/haskell').get(function(req, res) {
		res.sendfile('./public/haskell.html');
	});

	//default routing
	app.route('*').get(function(req, res) {
		res.sendfile('./public/index.html');
	});
};