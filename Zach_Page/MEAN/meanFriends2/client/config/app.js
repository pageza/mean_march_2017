// Creating my angular app here and giving its name, and putting any dependencies in the array
var app = angular.module('myApp',['ngRoute','ngCookies']);
// Configuring the app's route provider from ngRoute
app.config(function($routeProvider){
  // Calling the routeProvider
  $routeProvider
  // setting an uri and the partial and controller for it
  .when('/', {
    templateUrl: 'partials/login.html',
    controller: 'UsersController as UC'
  })
  .when('/success', {
  templateUrl: 'partials/userIndex.html',
  controller: 'UsersController as UC'
  })
})
