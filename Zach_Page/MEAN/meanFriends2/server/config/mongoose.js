// Requiring modules to connect to db
var mongoose = require('mongoose');
var fs = require('fs');

// connecting to the db I choose
mongoose.connect('mongodb://localhost/RmeanFriends');

// setting the path to my models
var models_path = __dirname + '/../models';

// looking through the models path for all the .js models
fs.readdirSync(models_path).forEach(function(file){
  if(file.indexOf('.js') != -1){
    console.log('loading'+ file + '...');
    require(models_path + '/' + file)
  }
});
