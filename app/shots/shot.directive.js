angular
  .module('shot.widget', [])
  .directive('shot', shot);

shot.$inject = ['$compile', '$templateRequest', '$window'];

function shot($compile, $templateRequest, $window) {
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

      scope.hideDetails = function() {
        scope.show = false;
      };

      angular.element($window).bind('resize', function() {
        scope.$apply(function() {
            scope.hideDetails();
        });
    });
    }
  };
}