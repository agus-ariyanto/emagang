define(['ui/system/api','ui/system/helper'], function(){
    return ['$scope', '$auth','Api', 'Helper',
    function($scope, $auth, Api, Helper ){

        $scope.helper=Helper;
        $scope.profil={};
        $scope.data={};
        $scope.table={};
        $scope.init=function(){

        }
/*end controller*/
        }];
});
