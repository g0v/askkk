$(document)
  .ready(function() {


  });
/*----------------------------------------------------------*/
var global = {};
global.candidates = [
{"id":1,"name":"楊實秋", "party":"中國國民黨","partyEng":"KMT","state":"pending","askToJoin":293},
{"id":2,"name":"秦慧珠", "party":"中國國民黨","partyEng":"KMT","state":"refused","askToJoin":921},
{"id":3,"name":"丁守中", "party":"中國國民黨","partyEng":"KMT","state":"join","asked":70,"answered":57},
{"id":4,"name":"蔡正元", "party":"中國國民黨","partyEng":"KMT","state":"pending","askToJoin":1432},
{"id":5,"name":"鍾小平", "party":"中國國民黨","partyEng":"KMT","state":"pending","askToJoin":737},
{"id":6,"name":"周柏雅", "party":"民主進步黨","partyEng":"DPP","state":"join","asked":120,"answered":43},
{"id":7,"name":"許添財", "party":"民主進步黨","partyEng":"DPP","state":"pending","askToJoin":430},
{"id":8,"name":"顧立雄", "party":"民主進步黨","partyEng":"DPP","state":"join","asked":10,"answered":1},
{"id":9,"name":"呂秀蓮", "party":"民主進步黨","partyEng":"DPP","state":"refused","askToJoin":3098},
{"id":10,"name":"姚文智", "party":"民主進步黨","partyEng":"DPP","state":"pending","askToJoin":352},
{"id":11,"name":"柯文哲", "party":"無黨籍","partyEng":"NONE","state":"join","asked":93,"answered":21}];


var askControllers = angular.module('askControllers',[]);


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
