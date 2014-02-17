//askControllers.controller('candidateDetailCtrl', function($scope){

askControllers.controller('candidateDetailPendingCtrl',['$scope','$routeParams',

function($scope,$routeParams){

  semanticMenuReady();
  semanticAccordingReady();

$scope.join = 'join';
$scope.pending = 'pending';
$scope.refused = 'refused';



  $scope.candidates = global.candidates;

  $scope.answered=function(){
    window.location = "#/candidate/"+$routeParams.candidateId;
  }

  $scope.data =
   [{'title':'是否有美國綠卡？', 'votes':8219, 'id':1, 'date':'02/15','asker':'spicycop',
     'candidateState':
     [{'candidateId':1,'state':'askedToJoin'},
      {'candidateId':2,'state':'notAsked'},
      {'candidateId':3,'state':'askedToJoin'},
      {'candidateId':4,'state':'askedToJoin'},
      {'candidateId':5,'state':'notAsked'},
      {'candidateId':6,'state':'askedToJoin'}]},
    {'title':'如何解決炒房問題？', 'votes':2399,'id':2, 'date':'02/14','asker':'永和林志玲',
    'candidateState':
    [{'candidateId':1,'state':'askedToJoin'},
     {'candidateId':2,'state':'notAsked'},
     {'candidateId':3,'state':'askedToJoin'},
     {'candidateId':4,'state':'notAsked'},
     {'candidateId':5,'state':'askedToJoin'},
     {'candidateId':6,'state':'askedToJoin'}]},
    {'title':'是否支持廢死？為什麼？', 'votes':1283, 'id':3, 'date':'02/01','asker':'廢死聯盟',
     'candidateState':[
     {'candidateId':1,'state':'askedToJoin'},
     {'candidateId':2,'state':'askedToJoin'},
     {'candidateId':3,'state':'askedToJoin'},
     {'candidateId':4,'state':'askedToJoin'},
     {'candidateId':5,'state':'askedToJoin'},
     {'candidateId':6,'state':'askedToJoin'}]},
    {'title':'對同志婚姻及多元成家的看法？', 'votes':1353, 'id':4, 'date':'01/31','asker':'伴侶盟',
     'candidateState':[
      {'candidateId':1,'state':'askedToJoin'},
      {'candidateId':2,'state':'notAsked'},
      {'candidateId':3,'state':'askedToJoin'},
      {'candidateId':4,'state':'askedToJoin'},
      {'candidateId':5,'state':'notAsked'},
      {'candidateId':6,'state':'askedToJoin'}]},
    {'title':'對樂生問題的回應？', 'votes':1354, 'id':5, 'date':'01/30','asker':'tantamount',
     'candidateState':[
      {'candidateId':1,'state':'notAsked'},
      {'candidateId':2,'state':'askedToJoin'},
      {'candidateId':3,'state':'notAsked'},
      {'candidateId':4,'state':'askedToJoin'},
      {'candidateId':5,'state':'notAske'},
      {'candidateId':6,'state':'notAsked'}]},
    {'title':'如何解決生育率的問題？', 'votes':7356, 'id':6, 'date':'01/30','asker':'婦女新知',
     'candidateState':[
      {'candidateId':1,'state':'askedToJoin'},
      {'candidateId':2,'state':'notAsked'},
      {'candidateId':3,'state':'notAsked'},
      {'candidateId':4,'state':'notAsked'},
      {'candidateId':5,'state':'notAsked'},
      {'candidateId':6,'state':'notAsked'}]},
    {'title':'如何解決醫療五大皆空問題？', 'votes':8301, 'id':7, 'date':'01/29','asker':'拎杯骨科',
     'candidateState':[
      {'candidateId':1,'state':'askedToJoin'},
      {'candidateId':2,'state':'askedToJoin'},
      {'candidateId':3,'state':'notAsked'},
      {'candidateId':4,'state':'notAsked'},
      {'candidateId':5,'state':'askedToJoin'},
      {'candidateId':6,'state':'askedToJoin'}]}];


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

