define(['ui/system/api','ui/system/helper'], function(){
    return ['$scope', '$auth','Api', 'Helper',
    function($scope, $auth, Api, Helper ){

        $scope.helper=Helper;
        $scope.data={};

        // untuk autologin
        $scope.init=function(){
            if($auth.islogin()) goTo();
        }
        $scope.submit=function(){
            Api.Post('login',$scope.data)
            .then(function(res){
                if(res.data.token){
                    $auth.login(res.data.token);
                    $auth.setUserData(res.data.userdata);
                    $scope.goTo();
                }
            });
        }

        $scope.goTo=function(){
            if($auth.userdata.grup_id==1) return window.location.href=alt.baseUrl+'admin';
            return window.location.href=alt.baseUrl+'user';
        }

        $scope.back=function(){
            window.location.href=alt.baseUrl;
        }

/*end controller*/
        }];
});
