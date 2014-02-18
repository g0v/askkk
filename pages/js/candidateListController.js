askControllers.controller('candidateListCtrl', ['$scope', 'askKK', function($scope, askKK){

  semanticMenuReady();
  semanticAccordingReady();

  askKK.getCandidate(null, function (data) {
    $scope.$apply(function () {
      $scope.candidates = data;
    });
  });
 


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
