/**
 * Created by w on 2017/2/4.
 */
app.controller('verifyImgController', ['$rootScope', '$scope', '$state', 'loginService',
    function ($rootScope, $scope, $state, loginService) {
        var vm = this;

        vm.params = $state.params;
        vm.data={};
        console.log(vm.params);

        vm.newCode = function () {
            loginService.forgetPassword(vm.params).then(function (res) {
                if (res.data.code === 0) {
                    $state.go("app.verifyFin")
                    console.log("验证码已发送")
                } else {
                    $rootScope.alert(res.data.message)
                }
            })
        };
}])