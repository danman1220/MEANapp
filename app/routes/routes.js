//routes.js

module.exports = function(app) {

	//this is now a database
	var characters = {};

	//set up routing for http requests
	app.route('/api/:name/character/:charName')
		.get(function(req, res) {
			console.log("REQUEST: " + req.params.name);
			console.log(characters[req.params.charName]);
			res.json(characters[req.params.charName] || {name: "test"});
		})
		.post(function(req, res) {
			console.log("POST: " + req.params.name);
			console.log(req.body);
			if(!characters[req.params.charName]){
				characters[req.params.charName] = req.body;
				//they like us to send the data posted back.. I don't actually do anything with it
				res.send(201, characters[req.params.charName]);
			} else {
				res.send(400, {error: "Chacacter Already Exists"});
			}
		});

	//This looks vaguely query-ish... deal with it
	app.route('/api/:name/character').get(function(req, res) {
		res.send(characters);
	})

	//default routing
	app.route('*').get(function(req, res) {
		res.sendfile('./public/index.html');
	});
};