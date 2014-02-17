
askControllers.controller('candidateInboxCtrl',['$scope','$routeParams',

function($scope,$routeParams){

  semanticMenuReady();
  semanticAccordingReady();
  semanticSidebarReday();
  $scope.candidates = global.candidates;
  $scope.inboxAnswered = function(){
    window.location = "#/candidate-inbox-replied";
  }
   $scope.goToTop = function(){
     var body = $("html, body");
     body.animate({scrollTop:0}, '500', 'swing');
  };

  $scope.detail = {
  'title':'國際醫療生意經 社會公平疑慮',
  'categories':['醫療','自由貿易','公平正義'],
  'date':'2014-01-30',
  'votes':9527,
  'asker':{"name":"soidid","city":"台北市","district":"大安區"},
  'addressedTo':
     [{"name":'丁守中',"id":1,"state":"answered"},
      {"name":'顧立雄',"id":2,"state":"pending","pendingDays":12},
      {"name":'呂秀蓮',"id":5,"state":"pending","pendingDays":2},
      {"name":'柯文哲',"id":6,"state":"answered"}
     ],
  'content':["自經區專題系列報導（中央社記者陳清芳台北20日電）去年12月下旬，香港女子易小玲來台動手術，她在菲律賓旅遊遭挾持受到槍擊，3年多歷經30多次手術，仍終日口罩遮面，在林口長庚醫院醫生魏福全領軍，成功重建下顎缺損。",
  "香港媒體報導易小玲露出笑容、吃蛋糕的畫面，為長庚整形重建外科團隊做了最佳國際宣傳，DISCOVERY頻道打算6月播出手術實錄，打響台灣的醫療美名。就在這時，在台北、桃園、台中及高雄4個國際機場同步揭牌「國際醫療服務中心」，向國際旅客行銷台灣45家醫院的醫技。",
  "國際醫療是「自由經濟示範區規劃方案」的一道小菜，行政院規劃下一階段成立一、二個「國際健康產業園區」，區內特許設立營利性質的醫療「社團法人醫院」專辦國際醫療，放寬外國人入主醫院董事會，也招徠製藥、醫材、健康養生與健康資訊等產業共同進駐，形成聚落。"]};

  $scope.data =
   [{'title':'是否有美國綠卡？', 'votes':8119, 'id':1, 'date':'02/15','asker':'spicycop',
     'candidateState':
     [{'candidateId':1,'state':'askedToJoin'},
      {'candidateId':2,'state':'notAsked'},
      {'candidateId':3,'state':'askedToJoin'},
      {'candidateId':4,'state':'askedToJoin'},
      {'candidateId':5,'state':'notAsked'},
      {'candidateId':6,'state':'askedToJoin'}]},
    {'title':'如何解決炒房問題？', 'votes':2299,'id':2, 'date':'02/14','asker':'永和林志玲',
    'candidateState':
    [{'candidateId':1,'state':'askedToJoin'},
     {'candidateId':2,'state':'notAsked'},
     {'candidateId':3,'state':'askedToJoin'},
     {'candidateId':4,'state':'notAsked'},
     {'candidateId':5,'state':'askedToJoin'},
     {'candidateId':6,'state':'askedToJoin'}]},
    {'title':'是否支持廢死？為什麼？', 'votes':1183, 'id':3, 'date':'02/01','asker':'廢死聯盟',
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
    {'title':'如何解決生育率的問題？', 'votes':7536, 'id':6, 'date':'01/30','asker':'婦女新知',
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

}]);

