define(['ui/system/api','ui/system/helper'], function(){
    return ['$scope', '$auth','Api', 'Helper',
    function($scope, $auth, Api, Helper ){

        $scope.helper=Helper;
        $scope.step=0;
        $scope.today='';
        $scope.data={};
        $scope.table=[];
        $scope.add=function(){
            $scope.data={}
            $scope.data.tanggal_iso=Date.parse($scope.today);
            $scope.step=1;
        }

        $scope.edit=function(data,step){
            var d=data.tanggal+'T00:00:00';
            $scope.data=angular.copy(data);
            $scope.data.tanggal_iso=Date.parse(d);
            $scope.step=step;
        }

        $scope.submit=function(){
            $scope.data.tanggal=Date.parse($scope.data.tanggal_iso).toString('yyyy-MM-dd');
            Api.Post('save/libur',$scope.data)
            .then(function(res){
                $scope.init();
            });
        }

        // hapus
        $scope.remove=function(){
            Api.Delete('libur',$scope.data.id)
            .then(function(res){
                $scope.init();
            });
        }

        $scope.init=function(){
            Api.Get('libur',{order:'tanggal ASC'})
            .then(function(res){
                $scope.table=res.data;
                $scope.step=0;
            });
        }
         $scope.$watch('data.tanggal_iso', function(val){
             if(val) console.log(val);
         });


/*end controller*/
        }];
});
