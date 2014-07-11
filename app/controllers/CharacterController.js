//Character controller
var mongoose = require('mongoose'),
	Character = mongoose.model('Character');

exports.create = function(req, res) {
	var character = new Character(req.body);
	character.player = req.params.name;
	character.save(function(err) {
		if (err) {
			console.log(err);
		} else {
			res.json(character);
		}
	});
};

exports.get = function(req, res) {
	Character.findOne({player: req.params.name, name: req.params.charName}).exec(function(err, character) {
		console.log(character);
		if (err) {
			console.log(err);
		} else {
			console.log("SENDING");
			res.json(character);
		};
	});
};

exports.all = function(req, res) {
	Character.find().exec(function(err, characterList) {
		res.json(characterList);
	});
};