askControllers.controller('responseDetailCtrl', ['$scope', 'askKK', function($scope, askKK){


  semanticMenuReady();
  semanticAccordingReady();
  
  askKK.getCandidate(null, function (data) {
    $scope.$apply(function () {
      $scope.candidates = data;
    });
  });
  $scope.data = global.responseData[0];

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

