/**
 * Created by kasia-dusza on 29.07.16.
 */

'use strict';

angular.module('cvApp').controller('SkillsCtrl', ['$scope', '$timeout', '$window', function ($scope, $timeout, $window) {
    $scope.max = 100;
    $scope.js = 30;
    $scope.html = 30;
    $scope.css = 30;
    $scope.angular = 30;
    $scope.mongo = 15;
    $scope.node = 10;

    $scope.showPreciseCurrent = function(amount){
        $timeout(function(){
            if (amount <= 0){
                $scope.preciseCurrent = $scope.current;
            } else{
                var math = $window.Math;
                $scope.preciseCurrent = math.min(math.round(amount), $scope.max);
            }
        });
    };

}]);