//CharacterController.js
var mongoose  = require('mongoose'),
	Character = mongoose.model('Character');

/**
 * Creates a new character, unique by player and character name
 * 
 * @error 400 error if the character already exists under that name combination
 */
exports.create = function(req, res) {
	var character = new Character(req.body);
	character.player = req.params.name;

	//If the database has a record of the character, respond 400
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

/**
 * finds the character with the given name and character name
 * @TODO change req.params.name to req.params.player... for another day
 *
 * @error 404 error if the character cannot be found
 */
exports.get = function(req, res) {
	Character.findOne({player: req.params.name, name: req.params.charName}).exec(function(err, character) {
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

/**
 * updates the character requested with new information from req.body
 * @TODO write errors for this
 */
exports.update = function(req, res) {
	res.json(Character.update({player: req.params.name, name: req.params.charName}, req.body));

};

/**
 * gets all characters under the player req.params.name or all players
 * should never 404
 */
exports.all = function(req, res) {
	Character.find({player: req.params.name || {$exists: true}}).exec(function(err, characterList) {
		res.json(characterList);
	});
};