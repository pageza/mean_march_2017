var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(express.static(__dirname + '/bower_components'));


app.listen(8000,function(){
  console.log('Listening on 8000....');
})
