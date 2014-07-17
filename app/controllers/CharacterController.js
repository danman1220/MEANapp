//Character controller
var mongoose = require('mongoose'),
	Character = mongoose.model('Character');

exports.create = function(req, res) {
	var character = new Character(req.body);
	character.player = req.params.name;
	if (Character.find({player: character.player, name: character.name})) {
		return res.send(400, "Character already exists");
	}
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
		} else if (!character) {
			console.log("No match found");
			res.send(404, {error: "No Match Found"});
		} else {
			console.log("SENDING");
			res.json(character);
		}
	});
};

exports.update = function(req, res) {
	res.json(Character.update({player: req.params.name, name: req.params.charName}, req.body));

};

exports.all = function(req, res) {
	Character.find({player: req.params.name || {$exists: true}}).exec(function(err, characterList) {
		res.json(characterList);
	});
};