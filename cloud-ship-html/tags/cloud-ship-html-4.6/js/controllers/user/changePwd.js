/**
 * Created by 星 on 2016/10/11.
 */
app.controller('passWordController', ['userService', '$rootScope', '$state', function (userService, $rootScope, $state) {
    var vm = this;
    vm.data={};
    console.log(vm.data);
    vm.pwdSave = function () {
        userService.modifyPWD(vm.data).then(function (res) {
            console.log(res);
            if (res.data.code === 0) {
                $state.go('app.user.changePwdResult');
            } else if(res.data.code === undefined){
                $rootScope.alert("当前密码输入错误！");
            }
        });
    };
}]);