'use strict';

angular.module('cvApp').controller('MainCtrl', ['$scope', '$uibModal', function ($scope, $modal) {
    $scope.openModal = function () {
        var modalInstance = $modal.open({
            animation: true,
            template: '<img ng-src="images/recommendation.jpg">',
            controller: function($uibModalInstance ,$scope){
                $scope.cancel = function () {
                    $uibModalInstance.dismiss('cancel');
                };
            },
            size: 'sm'
        });
    };
}]);
