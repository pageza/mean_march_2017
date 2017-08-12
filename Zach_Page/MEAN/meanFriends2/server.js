// Requiring the various modules I will need to run the server
var express = require('express')
var Bodyparser = require('body-parser')

// Creating the express server
var app = express();

// setting the static file locations
app.use(express.static(__dirname + '/client'))
app.use(express.static(__dirname + '/bower_components'))

// letting body-parser work with json data
app.use(Bodyparser.json());

// connecting my db to my server
require('./server/config/mongoose.js');
// and my server routes to the app
require('./server/config/routes')(app);

// Setting the server to listen on port 8000 and logging it
app.listen(8000, function(){
  console.log("listening on 8000.... ");
})
