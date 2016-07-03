(function() {
  'use strict';

  angular
  .module('api.dribble.shots', [])
  .factory('Shots', function($http) {
    var Shots = {};

    Shots.popular = function() {
    	return $http.jsonp('http://api.dribbble.com/v1/shots?access_token=137ef56c6219971a9e471892ca3ba330467298294886bf2519bc4d602c3b4a98&callback=JSON_CALLBACK');
    };

    return Shots;
  });

})();