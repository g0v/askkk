askControllers.controller('candidateDetailPendingCtrl', ['$scope','$routeParams', 'askKK', 
  function($scope, $routeParams, askKK){

  semanticMenuReady();
  semanticAccordingReady();

  askKK.getCandidate(null, function (data) {
    $scope.$apply(function () {
      $scope.candidates = data;
    });
  });
  
  $scope.data = global.responseData;
  $scope.n = global.oneCandidate;

  $scope.answered=function(){
    window.location = "#/candidate/"+$routeParams.candidateId;
  }


  // for sign question area keep floating
  var nav = $('#taipei_candidates');

    $(window).scroll(function () {
        
        if ($(this).scrollTop() > 230) {
            nav.addClass("f-nav");
            nav.removeClass("fc-fix");

        } else {
            nav.removeClass("f-nav");
            nav.addClass("fc-fix");

        }
    });



}]);

