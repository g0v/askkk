askControllers.controller('candidateListCtrl', ['$scope', 'candidateService', function($scope, candidateService){

  semanticMenuReady();
  semanticAccordingReady();

  $scope.candidates = candidateService;
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
