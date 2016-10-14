var app = angular.module('app', []);

app.controller('AppCtrl', function($scope, local) {
  $scope.myLocal = local;
  local.set('someText', 'okaay');
})