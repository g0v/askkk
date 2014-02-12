askControllers.controller('askQuestionCtrl', function($scope){

  semanticMenuReady();
  semanticAccordingReady();

  /* https://watchouttw.hackpad.com/oXPyRx5NQfX */
  $scope.categories =
   ['農業','藝術與人文','預算和稅收','公民權利和自由','氣候變化',
    '消費者保護','刑事司法和執法','國防','殘疾','經濟','教育',
    '能源','環境','家庭','槍械','外交政策','政府改革','保健',
    '國土安全和賑災','住房','人權','移民','創新','創造就業機會',
    '勞動','自然資源','郵政','貧窮','制度改革','農村政策','科學與空間政策',
    '小型企業','社會保障','科技及電訊','貿易','交通運輸和基礎設施',
    '城市政策','退伍軍人和軍人家屬','婦女'
   ];

  //ISSUE
  //This is bad..... After the checkbox has been render, have to call semantic UI
  $scope.listSelection =[];
  function toggleCategory(){
     console.log($(this).find("label").text());
     var name = $(this).find("label").text();
     var idx = $scope.listSelection.indexOf(name);
     // is currently selected
     if (idx > -1) {
      $scope.listSelection.splice(idx, 1);
     }
    // is newly selected
    else {
      $scope.listSelection.push(name);
    }
    $scope.$apply();//refresh the page
    
    console.log($scope.listSelection);
    
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



  /*
  $scope.addEventItem=function($scope, it) {
    setTimeout(function(){$scope.$apply(function() {$scope.events.push(it);});}, 0);
  };

  $scope.dbRef = new Firebase("https://blacklist.firebaseIO.com/event");
  $scope.dbRef.on("child_added", function(d) {
    v = d.val();
    $scope.addEventItem($scope, v);
  });
  $scope.events=[];
  */


});

