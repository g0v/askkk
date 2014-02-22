askControllers.controller('loginCheckCtrl', ['$scope', '$firebaseSimpleLogin', 'conf', 'authService', '$location', 'candidateService', 'questionService', function($scope, $firebaseSimpleLogin, conf, authService, $location, candidateService, questionService){
  
  
  $scope.conf = conf;
   $scope.candidates = candidateService;
   $scope.auth = $firebaseSimpleLogin(new Firebase('https://askkkkk.firebaseio.com/'));
  
   $scope.auth.$getCurrentUser().then(function (user) {
    
    try{
         authService.get(user.id).then(function (user) {
           $scope.user = user;
           window.location = "#/ask-question";
         });
    }catch(error){
       console.log("請先登入後再發問！");

    }
  });

  $scope.login = function () {
    event.preventDefault();
    $scope.auth.$login('facebook')
    .then(function (user) {
      try{
         authService.get(user.id).then(function (user) {
           $scope.user = user;
           window.location = "#/ask-question";
         });
       }catch(error){
          alert("請先登入後再發問！");

       }
       authService.onLogin(user);


    }, function (error) {
    });
  };



}]);
