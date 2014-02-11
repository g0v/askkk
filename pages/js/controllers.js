$(document)
  .ready(function() {


  });
/*----------------------------------------------------------*/


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
