//askControllers.controller('candidateDetailCtrl', function($scope){

askControllers.controller('candidateDetailCtrl',['$scope','$routeParams',

function($scope,$routeParams){

  semanticMenuReady();
  semanticAccordingReady();

$scope.join = 'join';
$scope.pending = 'pending';
$scope.refused = 'refused';



  $scope.candidates = global.candidates;


  $scope.data =
   [{'title':'是否有美國綠卡？', 'votes':1299, 'id':1, 'date':'02/15','asker':'匿名'},
    {'title':'如何解決炒房問題？', 'votes':9299,'id':2, 'date':'02/14','asker':'農陣'},
    {'title':'是否支持廢死？為什麼？', 'votes':183, 'id':3, 'date':'02/01','asker':'廢死聯盟'},
    {'title':'對同志婚姻及多元成家的看法？', 'votes':1153, 'id':4, 'date':'01/31','asker':'伴侶盟'},
    {'title':'對樂生問題的回應？', 'votes':14, 'id':5, 'date':'01/30','asker':'鄉民'},
    {'title':'如何解決生育率的問題？', 'votes':756, 'id':6, 'date':'01/30','asker':'婦女新知'},
    {'title':'如何解決醫療五大皆空問題？', 'votes':801, 'id':7, 'date':'01/31','asker':'柳林瑋'},
    {'title':'如何解決台北市空氣品質的問題？', 'votes':2000, 'id':8, 'date':'01/31','asker':'郭俊麟'}];
  var id = $routeParams.candidateId-1;
  $scope.n = $scope.candidates[id];


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

