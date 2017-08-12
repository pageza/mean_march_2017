app.factory("UserFactory", function($http,$cookies){
  var factory = {};
  factory.currUser = {};
  factory.users = [];

  factory.index = function(callback){
    $http.get('/').then(callback);
  }

  factory.create = function(newUser, callback){
    $http.post('/users', newUser).then(callback);
  }

  factory.loginUser = function(loginUser, callback) {
    $http.post('/sessions', loginUser).then(function(res){
      if(!res.data.errors){
        $cookies.uput('user_id', res.data._id)
      }
      callback(res)
    });
  }

  factory.session = function(callback){
    var user_id = $cookies.get('user_id');
    if(user_id){
      $http.get('/users/'+ user_id).then(function(res){
        factory.currUser = res.data;
        callback(res);
      })
    }
    else{
      factory.user = {};
      callback(res);
    }
  }

  return factory
})
