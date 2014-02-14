askControllers.controller('responseListCtrl', function($scope){

  semanticMenuReady();
  semanticAccordingReady();


  $scope.candidates = global.candidates;

['pending',,'pending','responded','pending','responded'];

  $scope.data =
   [{'title':'是否有美國綠卡？', 'votes':1299, 'id':1, 'date':'02/15',
     'state':[{'item':'pending'},{'item':'notAsked'},{'item':'pending'},
              {'item':'responded'},{'item':'notAsked'},{'item':'pending'}]},
    {'title':'如何解決炒房問題？', 'votes':9299,'id':2, 'date':'02/14','state':[{'item':'pending'},{'item':'notAsked'},{'item':'pending'},
              {'item':'responded'},{'item':'pending'},{'item':'pending'}]},
    {'title':'是否支持廢死？為什麼？', 'votes':183, 'id':3, 'date':'02/01',
     'state':[{'item':'pending'},{'item':'responded'},{'item':'responded'},
              {'item':'pending'},{'item':'pending'},{'item':'responded'}]},
    {'title':'對同志婚姻及多元成家的看法？', 'votes':1153, 'id':4, 'date':'01/31',
     'state':[{'item':'responded'},{'item':'notAsked'},{'item':'pending'},
              {'item':'pending'},{'item':'notAsked'},{'item':'pending'}]},
    {'title':'對樂生問題的回應？', 'votes':14, 'id':5, 'date':'01/30',
     'state':[{'item':'pending'},{'item':'responded'},{'item':'pending'},
              {'item':'notAsked'},{'item':'pending'},{'item':'pending'}]},
    {'title':'如何解決生育率的問題？', 'votes':756, 'id':6, 'date':'01/30',
     'state':[{'item':'notAsked'},{'item':'notAsked'},{'item':'pending'},
              {'item':'pending'},{'item':'responded'},{'item':'responded'}]},
    {'title':'如何解決醫療五大皆空問題？', 'votes':801, 'id':7, 'date':'01/29',
     'state':[{'item':'pending'},{'item':'notAsked'},{'item':'pending'},
              {'item':'responded'},{'item':'pending'},{'item':'notAsked'}]},
    {'title':'如何解決台北市空氣品質的問題？', 'votes':2000, 'id':8, 'date':'01/29',
     'state':[{'item':'pending'},{'item':'responded'},{'item':'pending'},
              {'item':'pending'},{'item':'responded'},{'item':'notAsked'}]}];






});

