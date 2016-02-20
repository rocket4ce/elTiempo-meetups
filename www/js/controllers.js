var app = angular.module('starter.controllers', []);

app.controller('DashCtrl', function($scope, $http) {
  //hacemos la llamada a la api con el metodo GET
  $http({
  method: 'GET',
  url: 'http://api.openweathermap.org/data/2.5/weather?q=Coquimbo&units=metric&appid=44db6a862fba0b067b1930da0d769e98'
}).then(function successCallback(response) {
    $scope.elTiempo = response.data;
  }, function errorCallback(response) {
    console.log(response);
  });
});

app.controller('AccountCtrl', function($scope, $http) {
  //hacemos la llamada a la api con el metodo GET
  $http({
  method: 'GET',
  url: 'http://www.mindicador.cl/api'
}).then(function successCallback(response) {
    $scope.indicadores = response.data;
    console.log($scope.indicadores);
  }, function errorCallback(response) {
    console.log(response);
  });
});
