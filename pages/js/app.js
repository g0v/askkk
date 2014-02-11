/* App Module */

var askApp = angular.module("askApp", [
  'ngRoute',
  'askControllers'
]);

askApp.config(['$routeProvider','$locationProvider',
  function($routeProvider,$locationProvider){
    $routeProvider.
      when('/question-list',{
      templateUrl: 'partials/question-list.html',
      controller: 'questionListCtrl'
    }).
      otherwise({
      redirectTo:''
    });
  }]);


