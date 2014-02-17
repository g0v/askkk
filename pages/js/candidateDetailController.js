//askControllers.controller('candidateDetailCtrl', function($scope){

askControllers.controller('candidateDetailCtrl',['$scope','$routeParams',

function($scope,$routeParams){

  semanticMenuReady();
  semanticAccordingReady();

$scope.join = 'join';
$scope.pending = 'pending';
$scope.refused = 'refused';



  $scope.candidates = global.candidates;

  
  $scope.pending=function(){
    window.location = "#/candidate/"+$routeParams.candidateId+"/pending";
  }


  $scope.data =
   [{'title':'是否有美國綠卡？', 'voteUp':1299,'voteDown':32, 'id':1, 'date':'02/15','asker':'匿名'},
    {'title':'如何解決炒房問題？', 'voteUp':9299,'voteDown':2,'id':2, 'date':'02/14','asker':'農陣'},
    {'title':'是否支持廢死？為什麼？', 'voteUp':183,'voteDown':9102, 'id':3, 'date':'02/01','asker':'廢死聯盟'},
    {'title':'對同志婚姻及多元成家的看法？', 'voteUp':1153,'voteDown':32, 'id':4, 'date':'01/31','asker':'伴侶盟'},
    {'title':'對樂生問題的回應？', 'voteUp':14, 'voteDown':765,'id':5, 'date':'01/30','asker':'鄉民'},
    {'title':'如何解決生育率的問題？', 'voteUp':756,'voteDown':132, 'id':6, 'date':'01/30','asker':'婦女新知'},
    {'title':'如何解決醫療五大皆空問題？', 'voteUp':801,'voteDown':643, 'id':7, 'date':'01/31','asker':'柳林瑋'},
    {'title':'如何解決台北市空氣品質的問題？', 'voteUp':2000,'voteDown':1, 'id':8, 'date':'01/31','asker':'郭俊麟'}];
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

