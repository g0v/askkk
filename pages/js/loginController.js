askControllers.controller('loginCtrl',['$scope','$routeParams',

 function($scope,$routeParams){

   login($scope, function(){
     console.log("Welcome back!"+$scope.user.email);
     window.location.replace("index.html");

   });




 }]);
