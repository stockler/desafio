(function() {
  'use strict';

angular
  .module('shots.widget', ['api.dribble.shots'])
  .config(configShots);

configShots.$inject = [
  "$stateProvider"
];

function configShots($stateProvider) {
  $stateProvider
    .state('shots', {
      url: '/',
      views: {
        '': {
          templateUrl: '/app/shots/views/shots.html',
          controller: 'ShotsController',
          controllerAs: 'vm',
          resolve: {
            shots: ["Shots", function(Shots) { 
                return Shots
                  .popular()
                  .then(function (shots) {
                    return shots.data.data;
                }, function (error) {
                  console.log("erro :: ", error);
                  return [];
                });             
            }]            
          }
        }
      }
    })
    ;
}

})();
