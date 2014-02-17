var askkkService = angular.module('askkkService', []);

askkkService.factory('askKK', function () {
  return new AskKK({firebase: new Firebase('https://askkkkk.firebaseio.com/')});
});
