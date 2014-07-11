//character model for Mongo
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

//Because I don't know how to One-To-Many, I'll just stick player name here
var CharacterSchema = new Schema({
	player: 'string',
	name: 'string',
	class: 'string',
	race: 'string'	
});

mongoose.model('Character', CharacterSchema);