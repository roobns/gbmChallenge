'use strict';
var app = angular.module('app', ['ui.bootstrap', 'ui.router', 'chart.js', 'firebase']);

app.config(function ($stateProvider, $urlRouterProvider) {
$urlRouterProvider.otherwise('/');
$stateProvider

  .state('login', {
    url: '/',
    templateUrl: 'app/components/login/login.template.html',
    controller: 'LoginCtrl',
    controllerAs: 'loginvm'
  })
  .state('main', {
    url: '/main',
    templateUrl: 'app/components/main/main.template.html',
    controller: 'MainCtrl',
    controllerAs: 'main'
  });


});
