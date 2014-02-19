askControllers.controller('questionDetailCtrl', ['$scope', '$routeParams', 'candidateService', 'questionService', function($scope, $routeParams, candidateService, questionService){

  semanticMenuReady();
  semanticAccordingReady();

  $scope.candidates = candidateService;
  $scope.data = global.questionData[0];

  $scope.goToTop = function(){
    var body = $("html, body");
    body.animate({scrollTop:0}, '500', 'swing');
  };

  // for sign question area keep floating
  var nav = $('#sign-question');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 230) {
      nav.addClass("f-nav");
      nav.removeClass("f-fix");
    } else {
      nav.removeClass("f-nav");
      nav.addClass("f-fix");
    }
  });
 
}]);

