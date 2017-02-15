'use strict';

angular.module('bigloaderApp')
  .controller('MainCtrl', function ($scope, $timeout) {

    $scope.go = function () {
      $scope.x = 0;
      $scope.delay = 150;
      $scope.complete = '';

      var timer = function (delay) {
        $timeout(function () {
          if ($scope.x == 100) {
            $timeout(function () {
              $scope.complete = 'load-complete';
            }, 500);
            return;
          } else {
            $scope.x++;
            $scope.delay = $scope.delay - 1;
            timer($scope.delay);
          }
        }, $scope.delay);
      }

      timer($scope.delay);
    }
    $scope.messages = [{
      message:"Booting up",
      below:10
    },{
      message:"Validating Page",
      from:10,
      to:40
    },{
      message:"<i class='fa fa-thumbs-o-up'></i>",
      from:40,
      to:60
    },{
      message:"Preparing payment portal",
      from:60,
      to:80
    },{
      message:"Payment Portal Ready",
      from:80,
      to:99
    },{
      message:"Done",
      at:100
    }];
    // $scope.$watch('x', function (x, o) {
    //   if (x) {
    //     if (x < 20) {
    //       $scope.message = "Booting up";
    //     } else if (x >= 20 && x < 40) {
    //       $scope.message = "Validating Page";
    //     } else if (x >= 40 && x < 50) {
    //       $scope.message = "<i class='fa fa-thumbs-o-up'></i>";
    //     } else if (x >= 50 && x < 70) {
    //       $scope.message = "Preparing payment portal";
    //     } else if (x >= 70 && x < 90) {
    //       $scope.message = "Payment Portal Ready";
    //     } else {
    //       $scope.message = "Done";
    //     }
    //   }
    // });
  });
