askControllers.controller('questionListCtrl', function($scope){

  semanticMenuReady();
  semanticAccordingReady();


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



  $scope.addEventItem=function($scope, it) {
    setTimeout(function(){$scope.$apply(function() {$scope.events.push(it);});}, 0);
  };

  $scope.dbRef = new Firebase("https://blacklist.firebaseIO.com/event");
  $scope.dbRef.on("child_added", function(d) {
    v = d.val();
    $scope.addEventItem($scope, v);
  });
  $scope.events=[];


});

