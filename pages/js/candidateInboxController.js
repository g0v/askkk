
askControllers.controller('candidateInboxCtrl',['$scope','$routeParams','askKK',

function($scope,$routeParams,askKK){

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

  
  askKK.getCandidate(null, function (data) {
    $scope.$apply(function () {
      $scope.candidates = data;
    });
  });
  $scope.detail = global.questionData[0];
  $scope.data = global.questionData;

}]);

