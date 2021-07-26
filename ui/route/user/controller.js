define(['ui/system/api','ui/system/helper'], function(){
    return ['$scope', '$auth','Api', 'Helper',
    function($scope, $auth, Api, Helper ){
        $scope.helper=Helper;
        $scope.profil={};
        $scope.today={
            clock_in:{
                done:false
            }
        };
        $scope.getCatKode=function(val){
            val=val||0;
            var catkode=[ 'Lembur','Hadir','Absensi'];
            if(val>catkode.length) val=2;
            return catkode[val];
        }
        $scope.presensi=[];
        $scope.absensi=[];
        // $scope.bulan=[];


        // component
        $scope.akun={
            back:function(){
                $scope.toTab(0);
            }
        }
        $scope.history={
            back:function(){
                $scope.toTab(0);
            }
        }

        $scope.toTab=function(val){
            $scope.tab=val;
            // ganti akun
            if(val==3) $scope.akun.init();
            // history
            if(val==4) $scope.history.init();
        }


        $scope.init=function(){
            Api.Get('profil',{
                authprofil_id:{
                    equal:$auth.userdata.id
                },
                limit:1
            })
            .then(function(res){
                $scope.profil=res.data[0];
                return Api.Get('today',{
                    format:'N Y-m-d H:i:s Y m d'
                });
            })
            .then(function(res){
                var a=res.data.split(' ');
                $scope.today={
                    dow:a[0],
                    hari:Helper.dow(a[0]),
                    tanggal:a[1],
                    jam:a[2]
                }
                if(!$scope.today.done) $scope.today.done=a[0]==6||a[0]==7;
                $scope.history.data={};
                // console.log(a);
                $scope.history.data.tahun=a[3];
                $scope.history.data.bulan=a[4];
                $scope.history.data.profil_id=$scope.profil.id;;

                return Api.Get('libur',{
                    tanggal:{
                        like:$scope.today.tanggal
                    },
                    limit:1
                });

            })
            .then(function(res){
                if(res.data[0]) {
                    $scope.today.libur=res.data[0];
                    if(!$scope.today.done)
                        $scope.today.done = res.data[0] ? true : false ;
                }
                return Api.Get('presensi',{
                    profil_id:{
                        like:$scope.profil.id
                    },
                    ts:{
                        like:$scope.today.tanggal+'*'
                    },
                    and:1,
                    limit:1
                });

            })
            .then(function(res){
                $scope.today.clock_in={
                    done:false
                };
                if(res.data[0]){
                    $scope.today.clock_in=res.data[0];
                    $scope.today.clock_in.done=true;
                    // $scope.today.clock_in.jam=res.data[0].ts.split(' ')[1];
                    if(!$scope.today.done) $scope.today.done=true;
                }
                return Api.Get('kode',{absentia:{equal:1}});
            })
            .then(function(res){
                $scope.presensi=res.data;
                return Api.Get('kode',{absentia:{equal:2}});
            })
            .then(function(res){
                $scope.absensi=res.data;
                $scope.toTab(0);
            });
        }




        /*
        hidden kode_id
        3 lembur libur reguler
        4 lembur libur nasional
        */
        $scope.submit=function(val){
            var data={
                kode_id:val.id,
                profil_id:$scope.profil.id,
                dow:$scope.today.dow,
            };

            // libur reguler (sabtu minggu ) kode_id 3
            if($scope.today.dow=='6'||$scope.today.dow=='7') data.kode_id=3;
            // hari libur nasional kode_id 4
            if($scope.today.libur) data.kode_id=4;

            Api.Post('presensi/save',data)
            .then(function(res){
                $scope.init();
            });
        }

        $scope.logout=function(){
            $auth.logout();
            window.location.href=alt.baseUrl+alt.loginRoute;
        }


        $scope.init();
/*end controller*/
        }];
});
