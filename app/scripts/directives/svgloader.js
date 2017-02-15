'use strict';

angular.module('bigloaderApp')
  .directive('svgloader', function () {
    return {
      templateUrl: 'partials/svgloader.html',
      restrict: 'E',
      scope: {
        percent: '=',
        complete: '=',
        messages: '='
      },
      link: function postLink(scope, element, attrs) {
        scope.offset = 565.48;
        var m = scope.messages;
        var r = 90;
        var c = Math.PI * (r * 2);
        scope.$watch('percent', function (n, o) {
          if (n) {
            if (n < m[0].below) {
              scope.message = m[0].message;
            } else if (n >= m[1].from && n < m[1].to) {
              scope.message = m[1].message;
            } else if (n >= m[2].from && n < m[2].to) {
              scope.message = m[2].message;
            } else if (n >= m[3].from && n < m[3].to) {
              scope.message = m[3].message;
            } else if (n >= m[4].from && n < m[4].to) {
              scope.message = m[4].message;
            } else {
              scope.message = m[5].message;
            }
            scope.offset = ((100 - n) / 100) * c;
          }
        });
      }
    };
  });
