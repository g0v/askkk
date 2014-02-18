$(document)
  .ready(function() {


  });
/*----------------------------------------------------------*/
var global = {};
global.candidates = [

{"id":1,"name":"丁守中", "party":"中國國民黨","partyEng":"KMT","state":"pending","askToJoin":257},
{"id":2,"name":"馮光遠", "party":"無黨籍","partyEng":"NONE","state":"join","asked":23,"answered":19},
{"id":3,"name":"連勝文", "party":"中國國民黨","partyEng":"KMT","state":"pending","askToJoin":143430},
{"id":4,"name":"顧立雄", "party":"民主進步黨","partyEng":"DPP","state":"join","asked":10,"answered":7},
{"id":5,"name":"呂秀蓮", "party":"民主進步黨","partyEng":"DPP","state":"refused","askToJoin":3098},
{"id":6,"name":"柯文哲", "party":"無黨籍","partyEng":"NONE","state":"join","asked":93,"answered":21}];


/* https://watchouttw.hackpad.com/oXPyRx5NQfX */
global.categories = ['農業','藝術與人文','預算和稅收','公民權利和自由','氣候變化',
'消費者保護','刑事司法和執法','國防','殘疾','經濟','教育',
'能源','環境','家庭','槍械','外交政策','政府改革','保健',
'國土安全和賑災','住房','人權','移民','創新','創造就業機會',
'勞動','自然資源','郵政','貧窮','制度改革','農村政策','科學與空間政策',
'小型企業','社會保障','科技及電訊','貿易','交通運輸和基礎設施',
'城市政策','退伍軍人和軍人家屬','婦女'
  ];


 /* used in questioin-list */
 global.questionData =
   [{'title':'是否有美國綠卡？', 'votes':819, 'id':1, 
     'date':{'year':'2014','month':'02','day':'15'},
     'asker':{'name':'spicycop','id':7},
     'addressedTo':
     [{"name":'馮光遠',"id":'-JFxrKQo3Qg19zsW73b1',"state":"pending"},
      {"name":'顧立雄',"id":'-JFxrLALbptrJBMly0oT',"state":"pending"},
      {"name":'柯文哲',"id":'-JFuCJcAoUNFQY9NEHZ4',"state":"pending"},
      {"name":'丁守中',"id":'-JFxrLFtnbu79YNmJR0M',"state":"pending"}],
      /*  --- used in question-detail --- */  
    'content':
     ['經濟部智慧財產局欲修法封鎖海外侵權網站，引發網友持續震怒，除日前BBS網站批踢踢（PTT）發起百萬連署抗議，更有網友發起「六四網路全黑日」，並揚言留言「灌爆」總統馬英九的臉書粉絲專頁，以示抗議決心！',
      '「搞什麼，『制裁』都不『智財』了！」批踢踢鄉民開設反智財局討論專版（StopIPO），發起「反對智財局研議封鎖重大境外侵權網站」的網路連署，號召百萬民眾維護網路自主，公開向智財局嗆聲。鄉民直指網路自由不容侵犯，「智慧財產局侵犯我言論自由的圖謀，我無法接受。」',
      '更有網友於臉書（Facebook）發起「斷然反對鎖國，堅決主張百分之百網路自由」連署，訂定明天為「網路全黑日」，盼網友把大頭貼、封面相片都換成黑色，以示抗議智財局決心。發起人更說，除換上全黑照片外，更要民眾前往總統馬英九臉書，向總統表達最沉痛的怒吼，迄今已有超過4萬人加入。'],
    'deadline':{'year':2014,'month':3,'day':1},
    'category':['網路','自由','隱私'],
    'signature':[
      {"id":10,"name":"afike0123","date":{'year':'2014','month':'01','day':'31'},"order":6},
      {"id":11,"name":"bee","date":{'year':'2014','month':'01','day':'31'},"order":5},
      {"id":12,"name":"洪偉","date":{'year':'2014','month':'01','day':'31'},"order":4},
      {"id":13,"name":"g0ver","date":{'year':'2014','month':'01','day':'30'},"order":3},
      {"id":14,"name":"hello","date":{'year':'2014','month':'01','day':'29'},"order":2},
      {"id":15,"name":"soidid","date":{'year':'2014','month':'01','day':'29'},"order":1}],

      /*  ------------------------------- */  
    },
    {'title':'如何解決炒房問題？', 'votes':299,'id':2, 
     'date':{'year':'2014','month':'02','day':'14'},
     'asker':{'name':'永和林志玲','id':6},
     'addressedTo':
     [{"name":'連勝文',"id":'-JFuCKMKOH_eCspPxRe1',"state":"pending"},
      {"name":'丁守中',"id":'-JFxrLFtnbu79YNmJR0M',"state":"pending"}]
    },
    {'title':'是否支持廢死？為什麼？', 'votes':183, 'id':3, 
     'date':{'year':'2014','month':'02','day':'01'},
     'asker':{'name':'廢死聯盟','id':5},
     'addressedTo':
     [{"name":'馮光遠',"id":'-JFxrKQo3Qg19zsW73b1',"state":"pending"},
      {"name":'顧立雄',"id":'-JFxrLALbptrJBMly0oT',"state":"pending"},
      {"name":'柯文哲',"id":'-JFuCJcAoUNFQY9NEHZ4',"state":"pending"},
      {"name":'丁守中',"id":'-JFxrLFtnbu79YNmJR0M',"state":"pending"}]
    },
    {'title':'對同志婚姻及多元成家的看法？', 'votes':153, 'id':4, 
     'date':{'year':'2014','month':'01','day':'31'},
     'asker':{'name':'伴侶盟','id':4},
     'addressedTo':
     [{"name":'馮光遠',"id":'-JFxrKQo3Qg19zsW73b1',"state":"pending"},
      {"name":'顧立雄',"id":'-JFxrLALbptrJBMly0oT',"state":"pending"},
      {"name":'丁守中',"id":'-JFxrLFtnbu79YNmJR0M',"state":"pending"}]
    },
    {'title':'對樂生問題的回應？', 'votes':154, 'id':5, 
     'date':{'year':'2014','month':'01','day':'30'},
     'asker':{'name':'tantamount','id':3},
     'addressedTo':
     [{"name":'馮光遠',"id":'-JFxrKQo3Qg19zsW73b1',"state":"pending"},
      {"name":'顧立雄',"id":'-JFxrLALbptrJBMly0oT',"state":"pending"},
      {"name":'丁守中',"id":'-JFxrLFtnbu79YNmJR0M',"state":"pending"}]
    },
    {'title':'如何解決生育率的問題？', 'votes':756, 'id':6, 
     'date':{'year':'2014','month':'01','day':'30'},
     'asker':{'name':'婦女新知','id':2},
     'addressedTo':
     [{"name":'連勝文',"id":'-JFuCKMKOH_eCspPxRe1',"state":"pending"},
      {"name":'丁守中',"id":'-JFxrLFtnbu79YNmJR0M',"state":"pending"}]
    },
    {'title':'如何解決醫療五大皆空問題？', 'votes':801, 'id':7, 
     'date':{'year':'2014','month':'01','day':'29'},
     'asker':{'name':'拎杯骨科','id':1},
     'addressedTo':
     [{"name":'連勝文',"id":'-JFuCKMKOH_eCspPxRe1',"state":"pending"},
      {"name":'顧立雄',"id":'-JFxrLALbptrJBMly0oT',"state":"pending"},
      {"name":'柯文哲',"id":'-JFuCJcAoUNFQY9NEHZ4',"state":"pending"},
      {"name":'丁守中',"id":'-JFxrLFtnbu79YNmJR0M',"state":"pending"}]
   }];



var askControllers = angular.module('askControllers',[]);

function semanticSidebarReday(){


  // selector cache
  var
    // alias
    handler
  ;

  $('.variation .button')
    .on('click', function() {
      $(this)
        .toggleClass('active')
        .siblings()
        .removeClass('active')
      ;
      $('.sidebar')
        .filter($(this).data('variation') ).first()
        .sidebar('toggle')
      ;
    })
  ;
  $('.styled.sidebar').first()
    .sidebar('attach events', '.styled.example .button')
  ;

  $('.floating.sidebar').first()
    .sidebar('attach events', '.floating.example .button')
  ;

  $('.filter.menu .item')
      .tab()
    ;

    $('.ui.rating')
      .rating({
        clearable: true
      })
    ;

    $('.ui.sidebar')
      .sidebar('attach events', '.launch.button')
    ;

    $('.ui.dropdown')
      .dropdown()
    ;




}
function semanticMenuReady(){

  $('.dropdown').dropdown();

  // selector cache
  var menuItem = $('.menu a.item, .menu .link.item');
  var dropdown = $('.main.container .menu .dropdown');
  // alias
  handler = {

    activate: function() {
      if(!$(this).hasClass('dropdown')) {
        $(this)
        .addClass('active')
        .closest('.ui.menu')
        .find('.item')
        .not($(this))
        .removeClass('active')
        ;
      }
    }

  }
  ;

  dropdown
  .dropdown({
    on: 'hover'
  })
  ;

  menuItem
  .on('click', handler.activate)
  ;

}
function semanticAccordingReady(){

  // selector cache
  var
    $accordion     = $('.ui.accordion'),
    $menuAccordion = $('.ui.menu.accordion'),
    $checkbox      = $('.ui.checkbox'),
    // alias
    handler
  ;
  $accordion
    .accordion()
  ;
  $menuAccordion
    .accordion({
     exclusive: false
    })
  ;
  $checkbox
    .checkbox()
  ;
}





/*----------------------------------------------------------*/
/*

function login($scope,callback){

  ///////// LOGIN
$scope.logined = false;
  $scope.dbRef = new Firebase('https://blacklist.firebaseIO.com/');
  $scope.auth = new FirebaseSimpleLogin($scope.dbRef, function(err, user){
    if (user) {
      $scope.$apply(function(){
        $scope.logined = true;
        return $scope.user = user;
      });
    }
    if (user) {
      setTimeout(callback(), 0);
      console.log(user, user.accessToken, user.id);
    }
    if (err){
      alert("登入失敗，請檢查輸入帳號及密碼是否正確。");
    }
    return $scope.loginPanel(true);
  });
  $scope.loginPanel = function(dismiss){
    dismiss == null && (dismiss = false);
    $('#login-panel').modal(dismiss ? 'hide' : 'show');
    return false;
  };

  $scope.changePwdPanel = function(dismiss){
    dismiss == null && (dismiss = false);
    $('#changePwd-panel').modal(dismiss ? 'hide' : 'show');
    return false;
  };
  $scope.changePwd = function(){
      return $scope.auth.changePassword($scope.account, $scope.oldPassword, $scope.newPassword,
    function(error, success) {
      if (!error) {
        console.log('Password changed successfully');
        alert("密碼修改成功！");
        $('#changePwd-panel').modal('hide');
      }else{
        alert("密碼修改失敗！");
      }
    });
  };

  $scope.signup = function(){
    console.log("add user: " + $scope.account);
    return $scope.auth.createUser($scope.account, $scope.password, function(e, user){
      if (e) {
        alert(e);
      }
      return $scope.loginPanel(true);
    });
  };
  $scope.login = function(){
    return $scope.auth.login('password', {
      email: $scope.account,
      password: $scope.password,
      rememberMe: true
    });
  };
  return $scope.logout = function(){
    $scope.auth.logout();
    return $scope.user = null;
  };





}
*/
