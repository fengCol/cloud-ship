/**
 * Created by Administrator on 2017/4/6.
 */
app.controller('patternController', ['$rootScope', '$scope', '$state','$modal', 'loginService','$interval','$cookies','$timeout','userService','thirdpSeverSevice',
    function ($rootScope,$scope,$state,$modal,loginService,$interval,$cookies,$timeout,userService, thirdpSeverSevice) {
        var vm = this;

        vm.params = {};
        vm.data = {};
        vm.string = {};
        //启动轮播图2s
        //carouselConfig(2000);
        //弹出模态框
        $scope.open = function () {
            $scope.loginModal = 1;
            var modal = $modal.open({
                templateUrl: '/views/template/login.html',
                scope: $scope,
                show: false,
                size: 'sm'
            });
            $scope.cancel = function () {
                modal.close()
            };
            vm.params = $state.params;
            vm.loginUp = {};
            vm.setCookie = false;
            vm.loginUp.mobile ="";
            vm.login = parseInt($state.params.login);
            vm.params.type = 'register';
            vm.registErrorTip = "";
            vm.params.mobile = "";
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
            $scope.setCookie = function(){
                $cookies.mobile = parseInt(vm.loginUp.mobile);
                // console.log($cookies.mobile,$cookies);
            };
            $scope.removeCookie = function(){
                $cookies.mobile = null;
            };
            $scope.cookie=function(){
                if(vm.setCookie)
                {
                    vm.setCookie=false;
                }
                else{
                    vm.setCookie=true;
                }
            };
            //用户协议
            vm.accpet=true;
            $scope.accpetRules=function(){
                if(vm.accpet){
                    vm.accpet=false;
                }
                else{
                    vm.accpet=true;
                }
            };
            //忘记密码
            $scope.toForgetPwd = function() {
                modal.close();
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
                            //console.log("验证码已发送");
                            $scope.checkMessage = false;
                            timer = $interval(function(){
                                $scope.send.canClick = true;
                                $scope.send.color={color:'#f00',fontSize:'15px'};
                                $scope.send.second --;
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
                                    $scope.setCookie();
                                }
                                else
                                {
                                    $scope.removeCookie();
                                }
                                modal.close();
                                $state.go('app.hatch.pattern',{reload:true});

                                // $state.go('app.home',{reload:true});
                                $cookies.login=true;
                                //通知main刷新
                                $scope.$emit('rushmain');
                            }
                            else {
                                $rootScope.alert(res.data.message);
                            }
                        })
                    }
                    else if(res.data.code === -2005) {
                        $rootScope.alert("验证码错误");
                    }
                })
            };//
            //登录
            vm.userLogin = function () {
                //console.log(vm.loginUp);
                loginService.userLogin(vm.loginUp).then(function (res) {
                    //console.log(vm.loginUp);
                    //console.log(res);
                    if (res.data.code === 0) {
                        //console.log("登录成功");
                        if(vm.setCookie)
                        {
                            $scope.setCookie();
                        }
                        else
                        {
                            $scope.removeCookie();
                        }
                        $state.go('app.hatch.pattern',{reload:true});
                        $cookies.login=true;
                        //通知main刷新
                        $scope.$emit('rushmain');
                        modal.close();
                    }
                    else {
                        $rootScope.alert(res.data.message)
                    }
                })
            };
        };

        thirdpSeverSevice.getPtteng().then(function (res) {
            if (res.data.code == 0){
                vm.newCid = res.data.id;

            }
        });
        // 获取服务sid
        thirdpSeverSevice.getBussenissList().then(function (list) {
            if (list.data.code == 1){
                vm.parentList = list.data.data.parentList;
                angular.forEach(vm.parentList,function (value) {
                    if (value.name == '技术孵化'){
                        vm.newSid = value.id
                        // console.log(vm.newSid)
                        $state.params.sid = vm.newSid;
                    }
                })
                console.log(vm.newSid)
            }
        });
//获取公司id即cid；
        userService.getCompanyDetails().then(function (res) {
            //console.log(res);
            vm.comDetails = res.data.data.company;
            //console.log(vm.comDetails.id);
        });
        //点击调用登录注册模态框函数
        vm.loginGO = function () {
            vm.isLogin= $cookies.login && $cookies.login!='null' && $cookies.login!=null;
            if(vm.isLogin) {
                userService.getCooperate().then(function (res) {
                    if(res.data.code == 0){
                        userService.getCompanyDetails().then(function (num) {
                            vm.string.cid = num.data.data.company.id;
                            vm.string.sid = 35;
                            thirdpSeverSevice.addCount( vm.newCid,vm.newSid).then(function (mes) {
                                if (mes.data.code === 0) {
                                    $rootScope.alert("申请成功")
                                } else{
                                    $rootScope.alert(mes.data.message)
                                }
                            })
                        })
                    } else {
                        $rootScope.modelAlert(res.data.message);
                        // vm.companyItem=res.data;
                        // var modal = $modal.open({
                        //     templateUrl: '/views/template/RootAlert.html',
                        //     scope: $scope,
                        //     show: false,
                        //     size: 'sm'
                        // });
                        // vm.closeTips = function () {
                        //     modal.close();
                        //     vm.showCompany = true;
                        //     console.log(res.data);
                        //     // vm.comDetails.count = res.data.count;
                        //     // $state.go("app.user.company",{},{reload:true})
                        // }
                        // vm.getTrue = function () {
                        //     modal.close();
                        //     $state.go("app.user.company",{},{reload:true})
                        // }
                    }
                })
                /*vm.string.sid = 35;
                vm.string.cid = "葡萄藤信息技术有限公司";
                console.log(vm.params.parentId);*/


            }else{
                console.log(vm.isLogin);
                $scope.open();
            }
        };
        //用户协议模态框
        vm.userDeal = function() {
            var modal = $modal.open({
                templateUrl: '/views/template/userDeal.html',
                scope: $scope,
                show: false,
                size: 'lg'
            });
            vm.closeDeal = function () {
                modal.close();
            };
            vm.accpetDeal = function () {
                vm.accpet = true;
                modal.close();
            };
            vm.regectDeal = function () {
                vm.accpet = false;
                modal.close();
            }
        };
        vm.checkMore = function () {
            window.open('http://www.caochuanyun.com/html/case.html');
        }
        // $timeout(function() {
        //     console.clear()
        // }, 100);
    }]);