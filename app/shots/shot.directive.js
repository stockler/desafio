angular
  .module('shot.widget', [])
  .directive('shot', shot);

shot.$inject = ['$compile', '$templateRequest'];

function shot($compile, $templateRequest) {
  return {
    restrict: 'AE',
    replace: true,
    transclude: false,
    scope: {
      shot: '='
    },
    templateUrl: '/app/shots/views/shot.html',
    link: function (scope, element, attrs) {

      scope.show = false;

      scope.showHideDetails = function() {
        scope.show = !scope.show;
      };
    }
  };
}