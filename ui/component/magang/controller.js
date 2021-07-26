define(['ui/system/api','ui/system/helper'], function(){
    return ['$scope', '$auth','Api', 'Helper',
    function($scope, $auth, Api, Helper ){

        $scope.helper=Helper;
        $scope.office=[];
        $scope.divisi=[];
        $scope.step=0;

        $scope.add=function(){
            $scope.data={}
            $scope.step=1;
        }
        $scope.edit=function(data,step){
            $scope.data=angular.copy(data);
            if(data.authprofil_email) $scope.data.email=data.authprofil_email;
            $scope.step=step;
        }
        $scope.submit=function(){
            var a='profil/submit';
            if($scope.step==2) a='profil/save';
            if($scope.step==3){
                $scope.data.id=$scope.data.authprofil_id;
                a='profil/account';
            }
            Api.Post(a,$scope.data)
            .then(function(res){
                $scope.init();
            });
        }

        // hapus
        $scope.remove=function(){
            Api.Post('profil/delete',$scope.data)
            .then(function(res){
                $scope.init();
            });
        }

        $scope.init=function(){
            // dioverwrite parent lihat /rout/admin/controller.js
            return;
        }
        $scope.$watch('data.email',function(val){
            if(!val) return;
            /*
            regex
            replace selain angka abjad
            underscore, titik, hashtag, dash dengan karakter kosong
            kemudian jadikan huruf kecil semua
            */
            $scope.data.email=val.replace(/[^a-zA-Z0-9\#_.-]/g,'').toLowerCase();
        });
        $scope.$watch('data.password',function(val){
            if(!val) return;
            /*
            regex
            replace selain angka abjad
            underscore, titik, hashtag, dash dengan karakter kosong
            */
            $scope.data.password=val.replace(/[^a-zA-Z0-9\#_.-]/g,'');
        });
        $scope.$watch('data.phone',function(val){
            $scope.data.phone=Helper.toPhone(val);
        })

/*end controller*/
        }];
});
