askControllers.controller('candidateDetailCtrl', ['$scope','$routeParams', 'askKK', 

function($scope,$routeParams,askKK){

  semanticMenuReady();
  semanticAccordingReady();

  
  $scope.data = global.responseDataCandidate;
  $scope.n = global.oneCandidate;

  askKK.getCandidate(null, function (data) {
    $scope.$apply(function () {
      $scope.candidates = data;

    });
  });

  $scope.pending=function(){
    window.location = "#/candidate/"+$routeParams.candidateId+"/pending";
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

