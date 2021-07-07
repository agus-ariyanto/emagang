define(['ui/system/api','ui/system/helper'], function(){
    return ['$scope', '$auth','Api', 'Helper',
    function($scope, $auth, Api, Helper ){

        $scope.menu={
            tab:0,
            title:{},
            top:[],
            data:[
                    {icon:'users',title:'Magang',tab:0,active:true},
                    {icon:'flag',title:'Libur',tab:1},
                    {icon:'chart-bar',title:'Report',tab:2},
                    {icon:'user-tie',title:'Akun',tab:3}
                ]
        }

        $scope.menu.toTab=function(tab){

            $scope.menu.tab=tab;
            for(var i=0;i<$scope.menu.data.length;i++) $scope.menu.data[i].active=false;
            $scope.menu.data[tab].active=true;
            $scope.menu.title=$scope.menu.data[tab];
            /*
            init selain magang lihat di component/*
            mis libur lihat di /component/libur/controller.js
            */
            if(tab==0) $scope.magang.init();
            if(tab==1) $scope.libur.init();
            if(tab==2) $scope.report.init();
            if(tab==3) $scope.profil.init();
        }

        /*
        komponen komponen
        hanya tab 0 ( default yang dioverwrite),
        untuk prevent error inisialisasi
        */
        $scope.magang={
            data:{},
            step:0,
            table:[],
            back:function(){
                $scope.menu.toTab(0);
            },
            init:function(){
                Api.Get('profil',{
                    authprofil_id:{gt:0},
                    order:'nama ASC'
                })
                .then(function(res){
                    $scope.magang.table=res.data;
                    $scope.magang.step=0;
                });
            }
        }
        $scope.libur={}
        $scope.report={}
        $scope.akun={}

        // security login
        $scope.init=function(){
            if(!$auth.userdata.grup_id||$auth.userdata.grup_id>1)
                window.location.href=alt.baseUrl+alt.loginRoute;
            Api.Get('today')
            .then(function(res){
                $scope.libur.today=res.data.replace(' ','T');
                return  Api.Get('office');
            })
            .then(function(res){
                $scope.magang.office=res.data;
                return Api.Get('divisi');
            })
            .then(function(res){
                $scope.magang.divisi=res.data;
            });
            $scope.menu.toTab(0);
        }

        $scope.init();

/*end controller*/
        }];
});
