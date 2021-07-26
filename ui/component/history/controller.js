define(['ui/system/api','ui/system/helper'], function(){
    return ['$scope', '$auth','Api', 'Helper',
    function($scope, $auth, Api, Helper ){

        $scope.helper=Helper;
        $scope.profil={};
        $scope.data={bulan_lalu:false};
        $scope.table={};
        $scope.datalist={};
        $scope.datalist.bulan=Helper.getBulan();

        $scope.calc_bulan_lalu=function(){

        }
        $scope.init=function(){
            var data{};
            if($scope.data.bulan_lalu)
            if($scope.profil.id) data.profil_id={like:$scope.profil.id};
            if()

        }
/*end controller*/
        }];
});
