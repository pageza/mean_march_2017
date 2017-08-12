// Requiring the users controllers
var Users = require('../controllers/users');

// exporting the route request over to the client side in app.js
module.exports = function(app){
  app.get('/users', Users.index);
  app.post('/users', Users.create);
  app.get('/users/:id', Users.show);
  app.post('/users/:id', Users.update);
  app.post('/users/destroy/:id', Users.destroy);
  app.post('/sessions', Users.login);
}
