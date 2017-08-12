var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 3
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
}, {timestamps: true});


UserSchema.pre('save', function(done){
	this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
	done();
})

var User = mongoose.model('User', UserSchema);
