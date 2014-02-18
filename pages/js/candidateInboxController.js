
askControllers.controller('candidateInboxCtrl',['$scope','$routeParams','candidateService',

function($scope,$routeParams,candidateService){

  semanticMenuReady();
  semanticAccordingReady();
  semanticSidebarReday();
  
  $scope.inboxAnswered = function(){
    window.location = "#/candidate-inbox-replied";
  }
   $scope.goToTop = function(){
     var body = $("html, body");
     body.animate({scrollTop:0}, '500', 'swing');
  };

  
  $scope.candidates = candidateService;
  $scope.detail = global.questionData[0];
  $scope.data = global.questionData;

}]);

