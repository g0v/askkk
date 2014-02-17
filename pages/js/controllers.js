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
