askControllers.controller('candidateListCtrl', ['$scope', '$firebaseSimpleLogin', 'authService', 'candidateService', function($scope, $firebaseSimpleLogin, authService, candidateService){

  semanticMenuReady();
  semanticAccordingReady();

  $scope.candidates = candidateService;
  $scope.auth = $firebaseSimpleLogin(new Firebase('https://askkkkk.firebaseio.com/'));
  $scope.login = function () {
    $scope.auth.$login('facebook')
    .then(function (user) {
      authService.onLogin(user);
    }, function (error) {
    });
  };
  $scope.logout = function () {
    authService.onLogout($scope.auth.user);
    $scope.auth.$logout();
  };

  $scope.askCandidateJoin = function(candidateId){
    console.log("ask candidate join, id:"+candidateId);
  };

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
