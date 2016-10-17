module.exports = function ($scope) {
  $scope.greeting = function(name: string) {
    return 'Hello, ' + name + '!';
   }
}
