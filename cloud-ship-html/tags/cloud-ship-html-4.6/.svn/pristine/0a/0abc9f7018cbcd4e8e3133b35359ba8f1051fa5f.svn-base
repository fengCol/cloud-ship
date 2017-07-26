/**
 * Created by insider on 16/7/12.
 */
app.controller('MainController',['$scope','$rootScope','$state','loginService','$cookies','userService',
    function($scope,$rootScope,$state,loginService,$cookies,userService){
    var vm =this;
    // console.log(this);

        //  点击菜单某一项
        vm.clickNav=function(){
            $('#open-nav').collapse('hide');
        }



    //判断cookies中 login是否为true来判断是否已经登录了
    vm.isLogin= $cookies.login && $cookies.login!='null' && $cookies.login!=null;
    //注销
    vm.logout = function(){
        loginService.logout().then(function(res){
            if(res.data.code === 0){
                $cookies.login=null;
                // console.log("退出成功");
                $state.go("app.home", {}, {reload:true});
            }
        })
    };
    //登录获取用户名
    $scope.$on('rushmain',function() {
        vm.isLogin = $cookies.login && $cookies.login != 'null' && $cookies.login != null;
        userService.getUserDetails().then(function (res) {
            console.log(res);
            if (res.data.code === 1) {
                // console.log(res.data);
                vm.User = res.data.data.user;
                // console.log(vm.User);
                if (vm.User.name == "") {
                    vm.userName = vm.User.mobile
                } else {
                    vm.userName = vm.User.name;
                }
            } else {
                alert(res.data.message);
            }
        });
        userService.getCompanyDetails().then(function (res) {
            // console.log(res);
            vm.comDetails = res.data.data.company;
            // console.log(vm.comDetails);
        });
    });
    //刷新页面获取用户名
    if(vm.isLogin) {
        // 获取公司详情里面的合作等级，根据合作等级来进行判断
        userService.getCompanyDetails().then(function (res) {
            // console.log(res);
            vm.comDetails = res.data.data.company;
            // console.log(vm.comDetails);
        });

        userService.getUserDetails().then(function (res) {
            //console.log(res);
            if (res.data.code === 1) {
                // console.log(res.data);
                vm.User = res.data.data.user;
                // console.log(vm.User);
                if(vm.User.name == "") {
                    vm.userName = vm.User.mobile
                }else {
                    vm.userName = vm.User.name;
                }
            } else {
                alert(res.data.message);
            }
        });
    }
    //获取通知个数
    userService.getAllMessage().then(function (res) {
        if(res.data.code==1){
            vm.messageNum = res.data.data.messageList;
            $rootScope.informMessage=0;
            angular.forEach(vm.messageNum,function (value) {
                if (value.mstage===1){
                    $rootScope.informMessage++;
                }
            })
            //console.log("shouye")
            //console.log($rootScope.informMessage)
            vm.messageList=$rootScope.informMessage;
        }
        else{
            $rootScope.alert(res.data.message);
        }
    })
}]);
