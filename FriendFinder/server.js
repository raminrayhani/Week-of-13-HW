var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var htmlRoute = require('./app/routing/htmlRoutes');
var apiRoute = require('./app/routing/apiRoutes');

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3003;

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Set up static components
app.use('/', express.static(__dirname + '/app/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

// html router
app.use('/', htmlRoute);

// api router
app.use('/', apiRoute);

// Server starts listening 
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})