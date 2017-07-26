/**
 * Created by Administrator on 2016/9/29.
 */
app.controller('detailCtrl',
    ['$rootScope', '$scope', '$anchorScroll', '$state', '$modal',
        'loginService', '$interval', '$cookies', '$timeout', 'userService', 'thirdpSeverSevice',
        function ($rootScope, $scope, $anchorScroll, $state, $modal,
                  loginService, $interval, $cookies, $timeout, userService, thirdpSeverSevice) {
            var vm = this;
            //console.log($state.params);
            vm.params = $state.params;
            vm.cid = vm.params.cid;
            vm.sid = vm.params.sid;
            vm.sname = vm.params.sname;
            //console.log(vm.cid);
            vm.size = ' ';
            vm.detailcompanyButton = '立即申请'
            // vm.comDetails = JSON.parse(localStorage.comDetails);
            var bbb = [-1, 1, 2];
            //获得详细公司的数据
            function getComDetil() {
                thirdpSeverSevice.getComDetil(vm.cid, vm.sid).error(function () {
                }).then(function (res) {
                    if (res.data.code==1){
                    //console.log(res);
                    vm.comDetails = res.data.data.company;
                    //console.log(vm.comDetails);
                    vm.companyRel = res.data.data.companyServerRelation;
                    vm.companyRel.countNum2 = vm.companyRel.countNum || '0';
                    //console.log(vm.companyRel);
                    }
                })
            }

            function startOrderService2(bbb) {
                userService.orderServices(bbb, vm.size).then(function (res) {
                    //该用户申请过的公司们
                    //console.log(res);
                    vm.total = res.data.total;
                    //console.log(vm.total);
                    vm.size = vm.total;
                    userService.orderServices(bbb, vm.size).then(function (res) {
                        //该用户申请过的公司们
                        //console.log(res)
                        vm.datas = res.data.data.csList;
                        //console.log(vm.datas);
                        //console.log(vm.datas.length);
                        if(vm.datas.length==0){
                            vm.showCompany = false;
                            vm.detailcompanyButton = '立即申请';
                        }
                        else{
                        for (var i = 0; i < vm.datas.length; i++) {
                            var newData = vm.datas[i].sname.split("-");
                            var someData = newData[newData.length-1]
                            if ( (vm.datas[i].cname==vm.comDetails.cname)&&(someData == vm.sname) && (vm.datas[i].status == 1)) {
                                vm.showCompany = true;
                                vm.detailcompanyButton = '申请中';
                                break;
                            } else {
                                vm.showCompany = false;
                                vm.detailcompanyButton = '立即申请';
                            }
                        }}
                    })
                })
            }


            getComDetil();
            startOrderService2(bbb);
            // if(vm.comDetails.count == "") {
            //     vm.comDetails.count = 0;
            // }
            // $anchorScroll();
            // console.log(vm.comDetails);
            // if(vm.comDetails.group == "创业服务") {
            //     $rootScope.bussNav = true;
            //     $rootScope.finaceNav = false;
            // }
            // if(vm.comDetails.group == "项目融资") {
            //     $rootScope.bussNav = false;
            //     $rootScope.finaceNav = true;
            // }
            //启动轮播图2s
            carouselConfig(2000);
            console.log($cookies.login);
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
                vm.loginUp.mobile = "";
                vm.login = parseInt($state.params.login);
                vm.params.type = 'register';
                vm.registErrorTip = "";
                vm.params.mobile = "";
                vm.loginUp.pwd = "";

                //记住用户名
                vm.setCookie = false;
                $scope.checkMessage = true;
                $scope.readCookie = function () {
                    vm.loginUp.mobile = $cookies.mobile;
                    if (vm.loginUp.mobile == 'null') {
                        vm.loginUp.mobile = '';
                    }
                    if (vm.loginUp.mobile != 'null' && vm.loginUp.mobile != undefined) {
                        vm.setCookie = true;
                    }
                };
                $scope.readCookie();
                $scope.setCookie = function () {
                    $cookies.mobile = parseInt(vm.loginUp.mobile);
                    console.log($cookies.mobile, $cookies);
                };
                $scope.removeCookie = function () {
                    $cookies.mobile = null;
                };
                $scope.cookie = function () {
                    if (vm.setCookie) {
                        vm.setCookie = false;
                    }
                    else {
                        vm.setCookie = true;
                    }
                };
                //用户协议
                vm.accpet = true;
                $scope.accpetRules = function () {
                    if (vm.accpet) {
                        vm.accpet = false;
                    }
                    else {
                        vm.accpet = true;
                    }
                };
                //忘记密码
                $scope.toForgetPwd = function () {
                    modal.close();
                    $('#loginBox').click();

                    $timeout(function () {
                        $state.go('app.verifyTel');
                    }, 500);
                };
                //检查手机号是否可以注册
                vm.registerPhone = function () {
                    if (vm.params.mobile != "") {
                        loginService.mobile(vm.params.mobile).then(function (res) {
                            if (res.data.code != 0) {
                                vm.registErrorTip = res.data.message;
                                $timeout(function () {
                                    vm.registErrorTip = "";
                                }, 3000);
                                vm.unuseAble = true;
                            } else {
                                console.log("手机号可以注册");
                                vm.unuseAble = false;
                            }
                        });
                    }
                };
                //发送短信验证码
                $scope.send = {
                    canClick: false,
                    second: 60,
                    timer: null,
                    sendCode: function () {
                        loginService.sendCode(vm.params, vm.params.mobile).then(function (res) {
                            if (res.data.code == 0) {
                                console.log("验证码已发送");
                                $scope.checkMessage = false;
                                timer = $interval(function () {
                                    $scope.send.canClick = true;
                                    $scope.send.color = {color: '#f00', fontSize: '15px'};
                                    $scope.send.second--;
                                    if ($scope.send.second === 0) {
                                        $interval.cancel(timer);
                                        $scope.send.canClick = false;
                                        $scope.send.color = {color: '#333'};
                                        $scope.checkMessage = true;
                                        $scope.send.second = 60;
                                    }
                                }, 1000);
                            } else {
                                $rootScope.alert(res.data.message)
                            }
                        });


                    }
                };
                //注册
                vm.register = function () {
                    loginService.register(vm.params).then(function (res) {
                        vm.mobile = $cookies.mobile;
                        if (res.data.code === 0) {
                            $state.go('app.home', {reload: true});
                            console.log("注册成功");
                        }
                        else if (res.data.code === -2005) {
                            $rootScope.alert("验证码错误");
                        }
                    })
                };
                //登录
                vm.userLogin = function () {
                    //console.log(vm.loginUp);
                    loginService.userLogin(vm.loginUp).then(function (res) {
                        //console.log(vm.loginUp);
                        //console.log(res);
                        if (res.data.code === 0) {
                            console.log("登录成功");
                            if (vm.setCookie) {
                                $scope.setCookie();
                            }
                            else {
                                $scope.removeCookie();
                            }
                            $state.go('app.details', {reload: true});
                            $cookies.login = true;
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

            //点击调用登录注册模态框函数
            vm.serviceApply = function () {
                vm.isLogin = $cookies.login && $cookies.login != 'null' && $cookies.login != null;
                if (vm.isLogin) {
                    thirdpSeverSevice.addCount(vm.cid, vm.sid).then(function (res) {
                        if (res.data.code == 0) {
                            var modal = $modal.open({
                                templateUrl: '/views/template/serviceApply.html',
                                scope: $scope,
                                show: false,
                                size: 'sm'
                            });
                            vm.closeTips = function () {
                                modal.close();
                                vm.showCompany = true;
                                console.log(res.data);
                                // vm.comDetails.count = res.data.count;
                                vm.detailcompanyButton = '申请中';
                            }
                        }
                    });
                } else {
                    console.log(vm.isLogin);
                    $scope.open();
                }
            };

            //用户协议模态框
            vm.userDeal = function () {
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
            }

            vm.cooperate = function () {
                //判断是否登录
                // $rootScope.setCookie();
               if ($cookies.login!=="true"){
                console.log($cookies)
                   vm.companyItem=$cookies;
                vm.companyItem.message='未登录不能申请！'
                var modal = $modal.open({
                    templateUrl: '/views/template/alert.html',
                    scope: $scope,
                    show: false,
                    size: 'sm'
                });
                vm.closeTips = function () {
                    modal.close();
                    // vm.showCompany = true;
                    //console.log(res.data);
                    // vm.comDetails.count = res.data.count;
                    // $state.go("app.user.company",{},{reload:true})
                }
                vm.getTrue = function () {
                    modal.close();
                    $state.go("app.login",{loginMod:1},{reload:true})
                }
                   }
                   else{
                userService.getCooperate().then(function (res) {
                    userService.getCompanyDetails().then(function (mes) {
                        console.log(res);
                        console.log(mes.data.data.company)
                        console.log("zheli")


                        //判断是否为自己公司
                        if(mes.data.data.company.id==vm.cid){
                            vm.companyItem=res.data;
                            vm.companyItem.message='不能申请自己公司服务'
                            var modal = $modal.open({
                                templateUrl: '/views/template/alert.html',
                                scope: $scope,
                                show: false,
                                size: 'sm'
                            });
                            vm.closeTips = function () {
                                modal.close();
                                // vm.showCompany = true;
                                console.log(res.data);
                                // vm.comDetails.count = res.data.count;
                                // $state.go("app.user.company",{},{reload:true})
                            }
                            vm.getTrue = function () {
                                modal.close();
                                $state.go("app.user.company",{},{reload:true})
                            }
                        }
                        //判断是否有公司
                        else if (res.data.code == -4) {
                            //模态框
                            vm.companyItem=res.data;
                            var modal = $modal.open({
                                templateUrl: '/views/template/alert.html',
                                scope: $scope,
                                show: false,
                                size: 'sm'
                            });
                            vm.closeTips = function () {
                                modal.close();
                                // vm.showCompany = true;
                                console.log(res.data);
                                // vm.comDetails.count = res.data.count;
                                // $state.go("app.user.company",{},{reload:true})
                            }
                            vm.getTrue = function () {
                                modal.close();
                                $state.go("app.user.company",{},{reload:true})
                            }
                        //判断公司是否认证
                        } else if(mes.data.data.company.status!=2){
                            vm.companyItem=mes.data;
                            vm.companyItem.message="公司未认证"
                            //模态框
                            var modal = $modal.open({
                                templateUrl: '/views/template/alert.html',
                                scope: $scope,
                                show: false,
                                size: 'sm'
                            });
                            vm.closeTips = function () {
                                modal.close();
                                // vm.showCompany = true;
                                console.log(res.data);
                                // vm.comDetails.count = res.data.count;

                            }
                            vm.getTrue = function () {
                                modal.close();
                                $state.go("app.user.company",{},{reload:true})
                            }
                            // alert(res.data.message);
                            // $state.go("app.user.company", {}, {reload: true})

                        }else{
                            vm.serviceApply()
                        }
                    })


                })
            }     }
        }
    ]);
