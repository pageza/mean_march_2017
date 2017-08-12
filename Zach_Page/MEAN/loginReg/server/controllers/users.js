var mongoose = require('mongoose')
var User = mongoose.model('User');

module.exports = {
  index: function(req,res){
    User.find({}).exec(function(err,doc){
      if (err) {
        return res.json(err)
      }
      return res.json(doc);
    })
  },
  login: function(req,res){
    var isValid = true;
    User.findOne({email: req.body.email}).exec(function(err,doc){
      if (err) {
        return res.json(err)
      }
      if(!doc){
        isValid = false;
      }
      else {
        if(bcrypt.compareSync(req.body.password, doc.pssword)){
          return res.json(doc)
        }
        else {
          isValid = false;
        }
      }
      if(!isValid){
        return res.json({"errors": {"login":{"message": "Invalid credentials."}}});
        }
      }
    )
  },
  create: function(req,res){
    var user= new User(req.body);
    user.save(function(err,doc){
      if(err){
        return res.json(err);
      }
      return res.json(doc);
    })
  },
  show: function(req,res){
    User.findById(req.params.id).exec(function(err,doc){
      if (err) {
        return res.json(err);
      }
      return res.json(doc)
    })
  },
  update: function(req,res){
    User.findById(req.params.id).exec(function(err,doc){
      if (err) {
        return res.json(err);
      }
      doc.name = req.body.name;
      doc.email + req.body.email;
      doc.save(function(err,doc){
        if (err) {
          return res.json(err)
        }
        return  res.json(doc);
      })
    })
  },
  destroy: function(req,res){
    User.findByIdAndRemove(req.params.id).exec(function(err,doc){
      if (err) {
        return res.json(err);
      }
      return res.json(doc);
    })
  }

}
