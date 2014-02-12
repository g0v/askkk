/* App Module */

var askApp = angular.module("askApp", [
  'ngRoute',
  'askControllers'
]);

askApp.config(['$routeProvider','$locationProvider',
  function($routeProvider,$locationProvider){
    $routeProvider.
      when('/ask-question',{
      templateUrl: 'partials/ask-question.html',
      controller: 'askQuestionCtrl'
    }).
      when('/question-list',{
      templateUrl: 'partials/question-list.html',
      controller: 'questionListCtrl'
    }).
      when('/question/:questionId',{
      templateUrl: 'partials/question-detail.html',
      controller: 'questionDetailCtrl'
    }).
      otherwise({
      redirectTo:'/',
      templateUrl: 'partials/index.html',
    });
  }]);


