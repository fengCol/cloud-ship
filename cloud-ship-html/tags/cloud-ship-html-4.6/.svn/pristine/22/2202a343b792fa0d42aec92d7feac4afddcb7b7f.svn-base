app.controller('loginController',
    ['$rootScope','$scope','$state','loginService','$interval','$cookies','$timeout','userService',
    function ($rootScope,$scope,$state,loginService,$interval,$cookies,$timeout,userService) {
        var vm = this;
        vm.params = $state.params;
        vm.loginUp = {};
        vm.setCookie = false;
        vm.loginUp.mobile = "";
        vm.login = parseInt($state.params.login);
        vm.registErrorTip = "";
        vm.params.type = 'register';
        vm.params.mobile = "";
        vm.params.verify = "";
        vm.loginUp.pwd = "";
        $scope.checkMessage = true;

        //记住用户名
        vm.setCookie=false;
        $scope.readCookie = function(){
            vm.loginUp.mobile=$cookies.mobile;
            if(vm.loginUp.mobile == 'null')
            {
                vm.loginUp.mobile = '';
            }
            if(vm.loginUp.mobile != 'null' && vm.loginUp.mobile != undefined)
            {
                vm.setCookie = true;
            }
        };
        $scope.readCookie();
        $rootScope.setCookie = function(){
            $cookies.mobile = parseInt(vm.loginUp.mobile);
            console.log($cookies.mobile,$cookies);
        };
        $scope.removeCookie = function(){
            $cookies.mobile = null;
        };
        $scope.cookie  = function(){
            if(vm.setCookie)
            {
                vm.setCookie=false;
            }
            else{
                vm.setCookie=true;
            }
        };

        //用户协议
        vm.accpet = true;
        $scope.accpetRules = function(){
            if(vm.accpet){
                vm.accpet=false;
            }
            else{
                vm.accpet=true;
            }
        };
        //忘记密码
        $scope.toForgetPwd = function() {
            $('#loginBox').click();

            $timeout(function() {
                $state.go('app.verifyTel');
            }, 500);



        };
        //检查手机号是否可以注册
        vm.registerPhone = function () {
            if(vm.params.mobile!="" ) {
                loginService.mobile(vm.params.mobile).then(function (res) {
                    if (res.data.code != 0) {
                        vm.registErrorTip = res.data.message;
                        $timeout(function() {
                            vm.registErrorTip = "";
                        }, 3000);
                        vm.unuseAble = true;
                    }else{
                        console.log("手机号可以注册");
                        vm.unuseAble = false;
                    }
                });
            }
        };
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
        //注册
        vm.register = function () {
        loginService.register(vm.params).then(function (res) {
                vm.mobile=$cookies.mobile;
                if (res.data.code === 0) {
                    $rootScope.alert("注册成功");
                    vm.loginUp.mobile=vm.params.mobile;
                    vm.loginUp.pwd=vm.params.password;
                    // 登录跳转到个人信息页面
                    loginService.userLogin(vm.loginUp).then(function (res) {
                        console.log(vm.loginUp);
                        console.log(res);
                        if (res.data.code === 0) {
                            console.log("登录成功");
                            if(vm.setCookie)
                            {
                                $rootScope.setCookie();
                            }
                            else
                            {
                                $scope.removeCookie();
                            }
                            $state.go('app.user.homepage',{reload:true});
                            // $state.go('app.home',{reload:true});
                            $cookies.login=true;
                            //通知main刷新
                            $scope.$emit('rushmain');
                        }
                        else {
                            $rootScope.alert(res.data.message)
                        }
                    })
                    console.log("注册成功");
                }
                else if(res.data.code === -2005) {
                    $rootScope.alert(res.data.message);
                } else if(res.data.code === -2007) {
                    $rootScope.alert(res.data.message);
                }
            })
        };
        //登录
        vm.checkTimes=0;
        vm.userLogin = function () {
            vm.checkTimes++;
            console.log(vm.Captcha);
            console.log(vm.checkTimes);
            if (vm.checkTimes<6){
            // console.log(vm.loginUp);

            loginService.userLogin(vm.loginUp).then(function (res) {
                console.log(vm.loginUp);
                console.log(res);
                if (res.data.code === 0) {
                    console.log("登录成功");
                    if(vm.setCookie)
                    {
                        $rootScope.setCookie();
                    }
                    else
                    {
                        $scope.removeCookie();
                    }
                    $state.go('app.home',{reload:true});
                    $cookies.login=true;
                    //通知main刷新
                    $scope.$emit('rushmain');
                }
                else {
                    $rootScope.alert(res.data.message)
                }
            })
            }else{
                loginService.graphicsCode(vm.Captcha).then(function(res){
                if (res.data.code == 0){
                    loginService.userLogin(vm.loginUp).then(function (res) {
                        console.log(vm.loginUp);
                        console.log(res);
                        if (res.data.code === 0) {
                            console.log("登录成功");
                            if(vm.setCookie)
                            {
                                $scope.setCookie();
                            }
                            else
                            {
                                $scope.removeCookie();
                            }
                            $state.go('app.home',{reload:true});
                            $cookies.login=true;
                            //通知main刷新
                            $scope.$emit('rushmain');
                        }
                        else {
                            vm.getGraphics();
                            $rootScope.alert(res.data.message)
                        }
                    })

                }else{
                    vm.getGraphics();
                    $rootScope.alert("图形码错误")
                }
            })

            }
        };
        //获取图形验证码
        vm.getGraphics=function(time){
            $('.captcha').attr('src', function () {
                return 'ajax/a/captcha/generate?' + new Date().getTime()
            });
        }
    }]);

