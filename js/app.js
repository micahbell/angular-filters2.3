var app = angular.module('angularFilters', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateURL: 'index.html',
      controller: 'Filters'
    })
    .otherwise({redirectTo: '/'})
});
