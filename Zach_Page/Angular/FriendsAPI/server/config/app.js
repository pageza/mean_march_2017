var app = angular.module('myApp',['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/new', {
   templateUrl: 'partials/new.html',
   controller: 'newController as NC',
 })
 .when('/edit/:_id', {
     templateUrl: 'partials/edit.html',
     controller: 'editController as EC',
   })
   .otherwise('/new');
})
