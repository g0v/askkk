/* App Module */

var askApp = angular.module("askApp", [
  'ngRoute',
  'askControllers',
  'askkkService'
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
      when('/response-list-latest',{
      templateUrl: 'partials/response-list-latest.html',
      controller: 'responseListLatestCtrl'
    }).
      when('/response-list',{
      templateUrl: 'partials/response-list.html',
      controller: 'responseListCtrl'
    }).
      when('/response/:responseId',{
      templateUrl: 'partials/response-detail.html',
      controller: 'responseDetailCtrl'
    }).
      when('/candidate-list',{
      templateUrl: 'partials/candidate-list.html',
      controller: 'candidateListCtrl'
    }).
      when('/candidate/:candidateId',{
      templateUrl: 'partials/candidate-detail.html',
      controller: 'candidateDetailCtrl'
    }).
      when('/candidate/:candidateId/pending',{
      templateUrl: 'partials/candidate-detail-pending.html',
      controller: 'candidateDetailPendingCtrl'
    }).
      when('/candidate-inbox',{
      templateUrl: 'partials/candidate-inbox.html',
      controller: 'candidateInboxCtrl'
    }).
      when('/candidate-inbox-replied',{
      templateUrl: 'partials/candidate-inbox-replied.html',
      controller: 'candidateInboxRepliedCtrl'
    }).
      when('/register',{
      templateUrl: 'partials/register.html',
      controller: 'registerCtrl'
    }).
      when('/user-list',{
      templateUrl: 'partials/user-list.html',
      controller: 'userListCtrl'
    }).
      otherwise({
      redirectTo:'/',
      templateUrl: 'partials/index.html',
      controller: 'indexCtrl'
    });
  }]);


