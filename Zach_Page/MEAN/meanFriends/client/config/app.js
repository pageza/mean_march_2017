var app = angular.module('myApp', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/users_new.html',
		controller: 'UsersController as UC'
	})
	.when('/success', {
		templateUrl: 'partials/users_index.html',
		controller: 'UsersController as UC'
	})
})
