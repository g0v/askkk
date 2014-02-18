askControllers.controller('responseDetailCtrl', function($scope){

  semanticMenuReady();
  semanticAccordingReady();
  $scope.candidates = global.candidates;
  $scope.data = global.responseData[0];


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





});

