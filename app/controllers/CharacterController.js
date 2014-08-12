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
	// If the database has a record of the character, respond 400
	Character.findOne({
						  player: character.player, 
		 				  name:   character.name
					  })
	.exec(function(error, found) {
		if(found) {
			return res.send(400, "Character already exists");
		} else {
			character.save(function(err) {
				if (err) {
					console.log(err);
				} else {
					res.json(character);
				}
			});
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
	Character.findOne({
						  player: req.params.name, 
						  name:   req.params.charName
					  })
	.exec(function(err, character) {
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
	res.json(Character.update({
								  player: req.params.name, 
								  name:   req.params.charName
							  }, 
							req.body));

};

/**
 * deletes a character from the database
 *
 *@error: 404 on no character found, 500 on server error
 */
 exports.delete = function(req, res) {
 	Character.remove({
 		player: req.params.name,
 		name:   req.params.charName
 	},
 	function (err, result){
 		if(err) {
 			console.log(err);
 			res.status(500).send(err);
 		} else {
 			if(result === 0) {
 				res.status(404).send("No such character found");
 			} else {
	 			console.log(result);
	 			res.json(result);
	 		}
 		}
 	});
 };

/**
 * gets all characters under the player req.params.name or all players
 * 
 * @error: 404 on no collection found in the database
 */
exports.all = function(req, res) {
	Character.find({
					   player: req.params.name || {$exists: true}
				   })
	.exec(function(err, characterList) {
		if (!characterList) {
			return res.status(404).send("The Character collection does not exist");
		} else {
			res.json(characterList);
		}
	});
};

/**
 * deletes all characters under the player req.params.name or all players
 *
 *@error: 404 on no player found in database
 */
exports.deleteAll = function(req, res) {
	Character.remove({
		player: req.params.name || {$exists: true}
	},
	function(err, result) {
		if(err) {
			console.log(err);
		} else {
			if(result === 0) {
				res.status(404).send('No Player Found');
			} else {
				console.log(result);
				res.json(result);
			}
		}
	});
};