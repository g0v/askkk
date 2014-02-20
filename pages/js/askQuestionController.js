askControllers.controller('askQuestionCtrl', ['$scope', '$firebaseSimpleLogin', 'authService', '$location', 'candidateService', 'questionService', function($scope, $firebaseSimpleLogin, authService, $location, candidateService, questionService){
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
 
  $scope.candidateSelection = [];
  $scope.toggleCandidate = function(selectedId){
   
   var name = $("#candidateName_"+selectedId).text();
   var current = $("#"+selectedId);
   //var idx = current.attr("class").indexOf("ask_question_candidate_selected");
   var idx = $scope.candidateSelection.indexOf(selectedId);
   // is currently selected
   if (idx > -1) {
       current.removeClass("ask_question_candidate_selected");
       $scope.candidateSelection.splice(idx, 1);
      
   }else{
      current.addClass("ask_question_candidate_selected");
      $scope.candidateSelection.push(selectedId);
   }

   if($scope.candidateSelection.length<$(".ask_question_candidate_data").length){
      $("#candidate_all").removeClass("ask_question_candidate_selected");
      $("#ask_all_candidate_hint_1").text("每個都想問");
      $("#ask_all_candidate_hint_2").text("按我全選吧");
      
   }else{
      $("#candidate_all").addClass("ask_question_candidate_selected");
      $("#ask_all_candidate_hint_1").text("好像也...");
      $("#ask_all_candidate_hint_2").text("沒那麼想問");

   }
   console.log($scope.candidateSelection);

  };
   
  $scope.toggleAllCandidate = function(){

      console.log($scope.candidateSelection.length);
      console.log($scope.candidates.length);
      
      if($scope.candidateSelection.length<$(".ask_question_candidate_data").length){

         $(".ask_question_candidate").addClass("ask_question_candidate_selected");
         $scope.candidateSelection = [];

         $(".ask_question_candidate_data").each(function( index ) {
            var id = $(this).attr("id");
            $scope.candidateSelection.push(id);
         });

         $("#ask_all_candidate_hint_1").text("好像也...");
         $("#ask_all_candidate_hint_2").text("沒那麼想問");
      }else{
        $(".ask_question_candidate").removeClass("ask_question_candidate_selected");
         $scope.candidateSelection = [];
         $("#ask_all_candidate_hint_1").text("每個都想問");
         $("#ask_all_candidate_hint_2").text("按我全選吧");


      }
      console.log($scope.candidateSelection);
  }


  
  $scope.categories = global.categories;
  




$scope.listSelection =[];
function toggleCategory(){

  //limit the selection to 3
  $("input[type=checkbox]").click(function() {
    var bol = $("input[type=checkbox]:checked").length >= 3;
    $("input[type=checkbox]").not(":checked").attr("disabled",bol);
  });

  
  var name = $(this).attr("value");
  var idx = $scope.listSelection.indexOf(name);
  // is currently selected
  if (idx > -1) {
    $scope.listSelection.splice(idx, 1);
    $(this).removeClass("checked");
  }
  // is newly selected
  else {
    $scope.listSelection.push(name);
    $(this).addClass("checked");
  }
  $scope.$apply();//refresh the page



};




$scope.flag = true;
$scope.$watch(function(){
  return document.body.innerHTML
}, function(val){
  if($scope.flag && ($(".category").length===$scope.categories.length)){
    $('.category').on('click',toggleCategory);
    $('.ui.checkbox').checkbox();
    $scope.flag = false;
  }
});




  /* posting question */
  $scope.getDate = function(d){
     if (!d) {
       d = new Date();
     }
     var month = d.getMonth()+1;
     var day = d.getDate();
     var output = {};
     output.year = d.getFullYear();
     output.month = ((''+month).length<2?'0':'')+month;
     output.day = ((''+day).length<2?'0':'')+day;
     console.log(output);

     //d.getFullYear()+"-"+((''+month).length<2?'0':'')+month+"-"+((''+day).length<2?'0':'')+day;
     return output;
  }
  $scope.getDeadline = function () {
    var d = new Date();
    var deadline = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 30); 
    return $scope.getDate(deadline);
  }

  $scope.postQuestion = function(){
    if($scope.candidateSelection.length==0){ alert("請至少選擇一位候選人提問"); return false;}
    if($scope.newQuestionTitle==null){ alert("請輸入問題簡述"); return false;}

    var question = {
      post_date: $scope.getDate(),
      deadline: $scope.getDeadline(),
      title: $scope.newQuestionTitle,
      content: $scope.newQuestionContent,
      category: $scope.listSelection,
      addressing: $scope.candidateSelection,
      asker: $scope.auth.user.id
    };
    questionService.post(question, function (post) {
      $location.path('/question/' + post.name()).replace();
    });
  }



//});

}]);
