(function() {
  'use strict';

angular
  .module('shots.widget')
  .controller('ShotsController', ShotsController);

ShotsController.$inject = [ 'shots' ];

function ShotsController( shots ) {

  var vm = this;

  vm.shots = shots;

}

})();