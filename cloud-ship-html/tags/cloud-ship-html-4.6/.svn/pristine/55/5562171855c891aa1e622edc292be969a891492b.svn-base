/**
 * edited by star on 16/10/11.
 */
app.controller('changePwdResultController', ['$scope', '$state','loginService','$cookies', function ($scope, $state,loginService,$cookies) {
    var vm = this;
    vm.time = 5;
    //立即跳转登录，然后注销账号，跳转到登录页
    vm.goLogin = function () {
        loginService.logout().then(function(res){
            if(res.data.code === 0){
                $cookies.login=null;
                $state.go('app.login', {loginMod: 1},{reload:true});
            }
        })
    };
    //等待5秒后跳转登录，然后注销账号，跳转到登录页
    setInterval(function () {
        if (vm.time > 0) {
            vm.time--;
            $scope.$apply();
            if (vm.time == 0) {
                loginService.logout().then(function(res){
                    if(res.data.code === 0){
                        $cookies.login=null;
                        $state.go('app.login', {loginMod: 1},{reload:true});
                    }
                })
            }
        }
    }, 1000)

}]);