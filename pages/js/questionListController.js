askControllers.controller('questionListCtrl', function($scope){

  semanticMenuReady();
  semanticAccordingReady();

  $scope.data =
   [{'title':'是否有美國綠卡？', 'votes':1299, 'id':1},
    {'title':'如何解決炒房問題？', 'votes':9299,'id':2},
    {'title':'是否支持廢死？為什麼？', 'votes':183, 'id':3},
    {'title':'對同志婚姻及多元成家的看法？', 'votes':1153, 'id':4}];



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

