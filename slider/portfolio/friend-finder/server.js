//Required denpendencies we are pull IN
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//express app configuration

var app = express();
var PORT = process.env.PORT || 3000;

//Setting up the Express app to handle data parsing
app.use(express.static(path.join(__dirname, './app/public')));

//Add middleware for parsing incoming request username
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

//Router

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

//Starts the server to begin listening
app.listen(PORT, function() {
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});
