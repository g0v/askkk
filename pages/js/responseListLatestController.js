askControllers.controller('responseListLatestCtrl', function($scope){

  semanticMenuReady();
  semanticAccordingReady();


  $scope.candidates = global.candidates;



  $scope.data =
   [{'title':'Re: 是否有美國綠卡？', 'votes':1299, 'id':1, 'date':'02/15','responser':'柯文哲'},
    {'title':'Re: 如何解決炒房問題？', 'votes':9299,'id':2, 'date':'02/14','responser':'顧立雄'},
    {'title':'Re: 是否支持廢死？為什麼？', 'votes':183, 'id':3, 'date':'02/01','responser':'丁守中'},
    {'title':'Re: 對同志婚姻及多元成家的看法？', 'votes':1153, 'id':4, 'date':'01/31','responser':'周博雅'},
    {'title':'Re: 對樂生問題的回應？', 'votes':14, 'id':5, 'date':'01/30','responser':'周博雅'},
    {'title':'Re: 如何解決生育率的問題？', 'votes':756, 'id':6, 'date':'01/30','responser':'丁守中'},
    {'title':'Re: 如何解決醫療五大皆空問題？', 'votes':801, 'id':7, 'date':'01/29','responser':'柯文哲'},
    {'title':'Re: 如何解決台北市空氣品質的問題？', 'votes':2000, 'id':8, 'date':'01/29','responser':'丁守中'}];





});

