
askControllers.controller('candidateInboxRepliedCtrl',['$scope','$routeParams','candidateService',

function($scope,$routeParams,candidateService){

  semanticMenuReady();
  semanticAccordingReady();
  semanticSidebarReday();
  


  $scope.inboxUnreplied = function(){
    window.location = "#/candidate-inbox"
  }

  $scope.goToTop = function(){
     var body = $("html, body");
     body.animate({scrollTop:0}, '500', 'swing');
  };
  
  $scope.candidates = candidateService;
  $scope.detail = global.responseData[0];
  $scope.data = global.responseDataCandidate;

}]);

