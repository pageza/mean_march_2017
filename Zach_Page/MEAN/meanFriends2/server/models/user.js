// requiring the modules I will need to build and validate a User
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// Creating the scheme for my User and setting validations on the fields
var UserSchema = mongoose.Schema({
  name : {
    type: String,
    required: true,
    minlength: 4
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
},{timestamps: true});

// Hashing the password before its saved into the db
UserSchema.pre('save',function(done){
  this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  done();
})
// Registering the model to be used by its alias 
var User = mongoose.model('User', UserSchema);
