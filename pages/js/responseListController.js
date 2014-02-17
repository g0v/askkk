askControllers.controller('responseListCtrl', function($scope){

  semanticMenuReady();
  semanticAccordingReady();
  semanticSidebarReday();

  $scope.flag = true;
  $scope.$watch(function(){
  return document.body.innerHTML
  }, function(val){
  if($scope.flag && ($(".category_checkbox").length===$scope.categories.length)){
    semanticAccordingReady();
    $scope.flag = false;
  }
  });


  $scope.candidates = global.candidates;
  $scope.categories = global.categories;


  $scope.data =
   [{'title':'是否有美國綠卡？', 'votes':1299, 'id':1, 'date':'02/15','asker':'spicycop',
     'candidateState':
     [{'candidateId':1,'state':'pending'},
      {'candidateId':2,'state':'notAsked'},
      {'candidateId':3,'state':'pending'},
      {'candidateId':4,'state':'responded'},
      {'candidateId':5,'state':'notAsked'},
      {'candidateId':6,'state':'pending'}]},
    {'title':'如何解決炒房問題？', 'votes':9299,'id':2, 'date':'02/14','asker':'永和林志玲',
    'candidateState':
    [{'candidateId':1,'state':'pending'},
     {'candidateId':2,'state':'notAsked'},
     {'candidateId':3,'state':'pending'},
     {'candidateId':4,'state':'notAsked'},
     {'candidateId':5,'state':'pending'},
     {'candidateId':6,'state':'responded'}]},
    {'title':'是否支持廢死？為什麼？', 'votes':1853, 'id':3, 'date':'02/01','asker':'廢死聯盟',
     'candidateState':[
     {'candidateId':1,'state':'pending'},
     {'candidateId':2,'state':'responded'},
     {'candidateId':3,'state':'responded'},
     {'candidateId':4,'state':'pending'},
     {'candidateId':5,'state':'pending'},
     {'candidateId':6,'state':'responded'}]},
    {'title':'對同志婚姻及多元成家的看法？', 'votes':1153, 'id':4, 'date':'01/31','asker':'伴侶盟',
     'candidateState':[
      {'candidateId':1,'state':'responded'},
      {'candidateId':2,'state':'notAsked'},
      {'candidateId':3,'state':'pending'},
      {'candidateId':4,'state':'pending'},
      {'candidateId':5,'state':'notAsked'},
      {'candidateId':6,'state':'pending'}]},
    {'title':'對樂生問題的回應？', 'votes':1554, 'id':5, 'date':'01/30','asker':'tantamount',
     'candidateState':[
      {'candidateId':1,'state':'notAsked'},
      {'candidateId':2,'state':'responded'},
      {'candidateId':3,'state':'notAsked'},
      {'candidateId':4,'state':'responded'},
      {'candidateId':5,'state':'notAske'},
      {'candidateId':6,'state':'notAsked'}]},
    {'title':'如何解決生育率的問題？', 'votes':5756, 'id':6, 'date':'01/30','asker':'婦女新知',
     'candidateState':[
      {'candidateId':1,'state':'responded'},
      {'candidateId':2,'state':'notAsked'},
      {'candidateId':3,'state':'notAsked'},
      {'candidateId':4,'state':'notAsked'},
      {'candidateId':5,'state':'notAsked'},
      {'candidateId':6,'state':'notAsked'}]},
    {'title':'如何解決醫療五大皆空問題？', 'votes':2801, 'id':7, 'date':'01/29','asker':'拎杯骨科',
     'candidateState':[
      {'candidateId':1,'state':'pending'},
      {'candidateId':2,'state':'responded'},
      {'candidateId':3,'state':'notAsked'},
      {'candidateId':4,'state':'notAsked'},
      {'candidateId':5,'state':'pending'},
      {'candidateId':6,'state':'responded'}]}];

});

