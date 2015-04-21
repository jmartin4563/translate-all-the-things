'use strict';

angular.module('ngI18nDemo', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'AboutCtrl'
      });

    $stateProvider
      .state('i18n', {
        url: '/i18n',
        templateUrl: 'app/i18n/i18n.html',
        controller: 'I18nCtrl'
      });

    $stateProvider
      .state('libraries', {
        url: '/libraries',
        templateUrl: 'app/libraries/libraries.html',
        controller: 'LibrariesCtrl'
      });

    $stateProvider
      .state('demo', {
        url: '/demo',
        templateUrl: 'app/demo/demo.html',
        controller: 'DemoCtrl'
      });

    $stateProvider
      .state('resources', {
        url: '/resources',
        templateUrl: 'app/resources/resources.html',
        controller: 'ResourcesCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
