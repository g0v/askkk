askControllers.controller('responseDetailCtrl', ['$scope', 'candidateService', function($scope, candidateService){


  semanticMenuReady();
  semanticAccordingReady();
  
  $scope.candidates = candidateService;
  $scope.data = global.responseData[0];

  $scope.voteQuestion = function(questionId){
    event.stopPropagation();
    console.log("vote for this detail, id:"+questionId);

  };
  $scope.voteUpResponse = function(responseId){
     console.log("vote up response, id:"+responseId);

  };
  $scope.voteDownResponse = function(responseId){
    console.log("vote down response, id:"+responseId);

  };
  $scope.goToCandidate = function(id){
     var body = $("html, body");
     var p = $('#response_item_'+id).position();
     var o = $('#response_item_'+id).offset();
     body.animate({scrollTop:o.top}, '500', 'swing');

  };
  $scope.goToTop = function(){

     var body = $("html, body");
     body.animate({scrollTop:0}, '500', 'swing');
  };
    
  // for sign peition area keep floating
  var nav = $('#response_detail_right_menu');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 230) {
            nav.addClass("f-nav");
            nav.removeClass("fr-fix");

        } else {
            nav.removeClass("f-nav");
            nav.addClass("fr-fix");

        }
    });
  
}]);

