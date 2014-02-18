askControllers.controller('candidateDetailCtrl', ['$scope','$routeParams', 'candidateService', 

function($scope,$routeParams,candidateService){

  semanticMenuReady();
  semanticAccordingReady();

  
  $scope.data = global.responseDataCandidate;
  $scope.n = global.oneCandidate;
  $scope.candidates = candidateService;

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

