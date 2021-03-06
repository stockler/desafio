(function() {
  'use strict';

  angular.module('desafio', [
    'ui.router',
    'ngAnimate',
    'ngAria',
    'ngMaterial',
    'ngSanitize',
    'shots.widget',
    'shot.widget'
  ])
  .config(function($urlRouterProvider, $locationProvider, $mdThemingProvider) {
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(true);

    $mdThemingProvider.theme('default')
      .primaryPalette('grey')
      .accentPalette('blue-grey');
  });
})();