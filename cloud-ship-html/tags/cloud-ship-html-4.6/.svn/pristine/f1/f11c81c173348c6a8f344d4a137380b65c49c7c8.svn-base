app.controller('verifyTelController', ['$rootScope', '$scope', '$state', 'loginService','$interval',
    function ($rootScope, $scope, $state, loginService, $interval) {
        var vm = this;
        vm.params = $state.params;
        vm.params.type = 'password';
        $scope.checkMessage = true;

        //检查手机号是否可以注册
        // vm.registerPhone = function () {
        //     loginService.mobile(vm.params.mobile).then(function (res) {
        //         if (res.data.code === 0) {
        //             console.log("手机号可以注册")
        //         } else {
        //             alert(res.data.message)
        //         }
        //     });
        // };

        //发送短信验证码
        $scope.send ={
            canClick: false,
            second: 60,
            timer: null,
            sendCode : function(){
                loginService.sendCode(vm.params,vm.params.mobile).then(function (res) {
                    if (res.data.code == 0) {
                        console.log("验证码已发送");
                        $scope.checkMessage = false;
                        timer = $interval(function(){
                            $scope.send.second --;
                            $scope.send.canClick = true;
                            $scope.send.color={color:'#f00',fontSize:'15px'};
                            if($scope.send.second === 0){
                                $interval.cancel(timer);
                                $scope.send.canClick = false;
                                $scope.send.color = {color:'#333'};
                                $scope.checkMessage = true;
                                $scope.send.second  = 60;
                            }
                        },1000);
                    }else {
                        $rootScope.alert(res.data.message)
                    }
                });


            }
        };



        // 发送短信验证码
        // vm.sendCode = function () {
        //     loginService.sendCode(vm.params).then(function (res) {
        //         if (res.data.code === 0) {
        //             console.log("验证码已发送")
        //         } else {
        //             alert(res.data.message)
        //         }
        //     })
        // };

        // 忘记密码
        // vm.forgetPhone = function () {
        //     loginService.forgetPhone(vm.params.mobile).then(function (res) {
        //         if (res.data.code === 0) {
        //             console.log("")
        //         } else {
        //             alert(res.data.message)
        //         }
        //     });
        // };

        // 发送短信找回验证码
        // vm.verifySendCode = function () {
        //     loginService.verifySendCode(vm.params.type).then(function (res) {
        //         if (res.data.code === 0) {
        //             console.log("验证码已发送")
        //         } else {
        //             alert(res.data.message)
        //         }
        //     })
        // };

        // 发送图片验证码
        // vm.verifySendImg = function () {
        //     loginService.register(vm.params.verify).then(function (res) {
        //         if (res.data.code === 0) {
        //             console.log("验证码已发送")
        //         } else {
        //             alert(res.data.message)
        //         }
        //     })
        // };
        // sessionStorage.moblie = vm.params.mobile;
        // sessionStorage.verify = vm.params.verify;
        // console.log(sessionStorage.moblie);

        vm.phone = function () {
            loginService.mobile(vm.params.mobile).then(function (res) {
                if (res.data.code== -2007){
                    $state.go("app.verifyImg", {mobile: vm.params.mobile, verify: vm.params.verify})
                }else {
                    $rootScope.alert("无此用户")
                }

            })
        }

        // 新密码
        // vm.newCode = function () {
        //     loginService.forgetPassword(vm.params).then(function (res) {
        //         if (res.data.code === 0) {
        //             $state.go("app.verifyFin")
        //             console.log("验证码已发送")
        //         } else {
        //             alert(res.data.message)
        //         }
        //     })
        // };


    }]);