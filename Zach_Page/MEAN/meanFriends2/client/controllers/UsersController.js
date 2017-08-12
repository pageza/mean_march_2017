app.controller('UsersController',['UserFactory','$location','$cookies',function(UserFactory,$location,$cookies){
  // replacing $scope by setting self to the controller
  var self = this;
  self.currUser;
  self.users = [];
  self.newUser = {};
  self.errors = [];

  UserFactory.session(function(res){
    if(res){
      self.currUser = res.data;
    }
    else {
      self.currUser = {};
      $location.url('/';)
    }
  })

  self.index = function(){
    UserFactory.index(function(res){
      self.users = res.data;
    })
  }

  self.logout = function(){
    $cookies.remove('user_id');
    $location.url('/');
  }

  self.login = function(){
    UserFactory.loginUser(loginUser. function(res){
      var errors = res.data.errors;
      if(errors){
        for (key in errors){
          self.errors.push(errors[key]['message']);
        }
      }
      else {
        $location.url('/success')
      }
    })
  }

  self.create = function(){
    self.errors = [];
		UserFactory.create(newUser, function(res){
			if(res.data.code && res.data.code == 11000){
				self.errors.push('Your email must be unique.');
			}
			else if(res.data.errors){
				var errors = res.data.errors;
				for(key in errors){
					self.errors.push(errors[key]['message']);
				}
			} else {
				self.newUser = {};
				$location.url('/');
			}
		})
  }

}])
