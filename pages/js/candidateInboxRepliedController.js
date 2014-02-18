
askControllers.controller('candidateInboxRepliedCtrl',['$scope','$routeParams','askKK',

function($scope,$routeParams,askKK){

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
  
  askKK.getCandidate(null, function (data) {
    $scope.$apply(function () {
      $scope.candidates = data;
    });
  });
  $scope.detail = global.responseData[0];
  $scope.data = global.responseDataCandidate;

}]);

