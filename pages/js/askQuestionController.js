askControllers.controller('askQuestionCtrl', function($scope){

  semanticMenuReady();
  semanticAccordingReady();
  $scope.candidates = global.candidates;


  $scope.candidateSelection = [];
  $scope.toggleCandidate = function(row){
   row = row+1;
   var name = $("#candidateName_"+row).text();
   var current = $("#candidate_"+row);
   //var idx = current.attr("class").indexOf("ask_question_candidate_selected");
   var idx = $scope.candidateSelection.indexOf(name);
   // is currently selected
   if (idx > -1) {
       current.removeClass("ask_question_candidate_selected");
       $scope.candidateSelection.splice(idx, 1);
      
   }else{
      current.addClass("ask_question_candidate_selected");
      $scope.candidateSelection.push(name);
   }

   if($scope.candidateSelection.length<$scope.candidates.length){
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
      if($scope.candidateSelection.length<$scope.candidates.length){

         $(".ask_question_candidate").addClass("ask_question_candidate_selected");
         $scope.candidateSelection = [];
         for(var i=0;i<$scope.candidates.length;i++){
             $scope.candidateSelection.push($scope.candidates[i].name);
         }
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
  $scope.getDate = function(){
     var d = new Date();
     var month = d.getMonth()+1;
     var day = d.getDate();
     var output = d.getFullYear()+"-"+((''+month).length<2?'0':'')+month+"-"+((''+day).length<2?'0':'')+day;
     return output;

  }
  $scope.postQuestion = function(){
    if($scope.candidateSelection.length==0){ alert("請至少選擇一位候選人提問"); return false;}
    if($scope.newQuestionTitle==null){ alert("請輸入問題簡述"); return false;}
    console.log("posting quesiton...");
    console.log("address to: "+$scope.candidateSelection);
    console.log("title: "+$scope.newQuestionTitle);
    console.log("category: "+$scope.listSelection);
    console.log("content: "+$scope.newQuestionContent);
    console.log("date: "+$scope.getDate());
    console.log("[user id]");

  }



});

