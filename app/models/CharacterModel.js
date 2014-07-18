//CharacterModel.js

//character model for Mongodb
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

//Because I don't know how to One-To-Many, I'll just stick player name here
//@TODO get player as a seperate collection or something
var CharacterSchema = new Schema({
	player: 'string',
	name: 'string',
	class: 'string',
	race: 'string',
	level: 'number'	
});

mongoose.model('Character', CharacterSchema);