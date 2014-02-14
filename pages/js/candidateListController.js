askControllers.controller('candidateListCtrl', function($scope){

  semanticMenuReady();
  semanticAccordingReady();

$scope.join = 'join';
$scope.pending = 'pending';
$scope.refused = 'refused';



  $scope.candidates = global.candidates;






$scope.flag = true;
$scope.$watch(function(){
  return document.body.innerHTML
}, function(val){
  if($scope.flag && ($(".candidate_img").length===$scope.candidates.length)){
    $scope.setCandidateJS();
    $scope.flag = false;
  }
});

$scope.setCandidateJS = function(){
//candidate
 

  
  
}
$scope.candidateChoose = function(id){
  var id_number = $(this);
  console.log(id);
  //attr("id").split('_')[1];

  //window.location = ("#/candidate/"+id);
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



});
/*
 $('.candidate_img').on("mouseenter",function(event){
   
    var id_number = $(this).attr('id').split("_")[1];

    $('.pressure_candidate').hide();
    
    $('#pressure_candidate_'+id_number).show();
    var p = $('#candidate_'+id_number).position();
    var o = $('#candidate_'+id_number).offset();

    $('#pressure_candidate_'+id_number).position({ top: p.top, left: p.left});
    $('#pressure_candidate_'+id_number).offset({ top: o.top, left: o.left});
    
  });
 
  
 
  $('#taipei').on("mouseleave",function(){
    $('.pressure_candidate').hide();
    
  });
  $('.candidate_list').on("mouseenter",function(){
    console.log("leave candidate list");
    $('.pressure_candidate').hide();
    
  });
  */
