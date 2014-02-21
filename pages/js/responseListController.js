askControllers.controller('responseListCtrl', ['$scope', '$firebaseSimpleLogin', 'authService', '$location', 'candidateService', 'questionService', function($scope, $firebaseSimpleLogin, authService, $location, candidateService, questionService){


  semanticMenuReady();
  //semanticAccordingReady();
  semanticSidebarReday();
  
  $scope.categoryCheckboxSetup = function(){
      //category checkbox
      $scope.toggleCategory = function(){
        console.log("toggle category");
        var text = $(this).find("label").text();
        console.log(text);
        var idx = $scope.categorySelection.indexOf(text);
        // is currently selected
        if (idx > -1) {
           $scope.categorySelection.splice(idx, 1);      
        }else{
           $scope.categorySelection.push(text);
        }
        console.log($scope.categorySelection);
    
      };
    
      $scope.flag = true;
      $scope.$watch(function(){
      return document.body.innerHTML
      }, function(val){
      if($scope.flag && ($(".category_checkbox").length===$scope.categories.length)){
        semanticAccordingReady();
        $scope.flag = false;
        $(".category_checkbox").on("click",$scope.toggleCategory);
      }
      });
  
  };
  

  $scope.titleLimit=global.titleLimit;
  $scope.askerNameLimit=global.askerNameLimit;
  $scope.categorySelection = [];
  /* --- mobile nav set --- */
  $('.body').removeClass("left");
  $('.body').removeClass("pushed");
  mobileNavPosition();
  $("#mobile_nav_button").on("click",function(){
    mobileNavPosition();
  });
  if($(window).width()<400){
    mobileNavSetup();
    mobileSideBarSetup();
    $scope.titleLimit=global.titleLimitMobile;
  }else{
    $scope.categoryCheckboxSetup();
  }
  /* ---------------------- */

  $scope.auth = $firebaseSimpleLogin(new Firebase('https://askkkkk.firebaseio.com/'));
  $scope.auth.$getCurrentUser().then(function (user) {
    if (user) {
      authService.get(user.id).then(function (user) {
        $scope.user = user;
      });
    }
  });
  $scope.login = function () {
    event.preventDefault();
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
  $scope.candidates = candidateService;
  $scope.categories = global.categories;
  $scope.questions = questionService;

  $scope.showQuestionDetail = function(questionId){
    //event.stopPropagation();
    console.log("show question detail, id:"+questionId);
    $location.path("/response/"+questionId);
    
  };
  $scope.voteQuestion = function(questionId){
    console.log("vote for this detail, id:"+questionId);
    //event.stopPropagation();
  };
  $scope.sortByTime = function(){
    console.log("sort by time");
  };
  $scope.sortByVotes = function(){
    console.log("sort by votes");
  };

}]);

