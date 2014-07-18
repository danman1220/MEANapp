//server.js
var mongoose = require('mongoose'),
	express = require('express'),
	app = express(),
	bodyParser = require('body-parser');

//databasing
var db = require('./config/db');

//server info
var port = 5309;

//connect to mongoose and load models
mongoose.connect(db.url);
require('./app/models/CharacterModel');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

//load routing
require('./app/routes/routes')(app);

//start app
app.listen(port);
console.log('port number::' + port);
exports = module.exports = app;