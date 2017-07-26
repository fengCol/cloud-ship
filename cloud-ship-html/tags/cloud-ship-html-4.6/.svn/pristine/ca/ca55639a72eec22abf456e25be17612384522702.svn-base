/**
 * Created by 俊 on 2016/11/3.
 */

app.controller('entrepreneurCtrl', ['$rootScope', '$scope', '$state', '$cookies', 'thirdpSeverSevice',
    function ($rootScope, $scope, $state, $cookies, thirdpSeverSevice) {
        var vm = this;
        vm.grades = [1, 2, 3, 0];
        vm.id = $state.params.id;
        vm.pid = $state.params.pid;
        vm.grade =$state.params.grade||"";
        vm.page=$state.params.page||1;
        vm.size=10
        console.log($state.params);
        //console.log(vm.id);
        //console.log(vm.pid);
        //获取相应的父子两级的数据

        function getparentList() {
            thirdpSeverSevice.getBussenissList().error(function () {
            }).then(function (res) {
                //获取根节点父类数据；
                // console.log(res);
                vm.parentList = res.data.data.parentList;
                //console.log(vm.parentList);

                angular.forEach(vm.parentList, function (data, index, array) {
                    if (data.id == vm.pid) {
                        vm.parentname = data.name;
                    }
                });
            })
        }

        getparentList();

        //根据父类的id来获取相应的子类
        function getchildList() {
            thirdpSeverSevice.getServiceList({id:vm.pid}).then(function (res) {
                console.log(res);
                vm.serverList = res.data.data.serverList;
                // console.log(vm.serverList);
                vm.total = res.data.data.total;
                // console.log( res.data)
                angular.forEach(vm.serverList, function (data, index, array) {
                    if (data.id == vm.id) {
                        vm.childname = data.name;
                    }
                });

            })
        }

        getchildList();


        //获取所有公司的相关数据
        function getMoreList() {
            thirdpSeverSevice.getMoreList(vm.id).error(function () {
            }).then(function (res) {
                // console.log(res);
                vm.companyList = res.data.data.companyList;
                vm.serverListItem = res.data.data.serverList
                console.log(vm.companyList);
                console.log(vm.serverListItem)
            })
        }



        //等级筛选

            thirdpSeverSevice.getGradeList(vm.grade, vm.id).error(function () {
            }).then(function (res) {
                console.log(res);
                vm.companyList = res.data.data.companyList;
                // $state.params.grade = vm.companyList.grade;
                // alert(vm.grade)
                // getMoreList();
                angular.forEach( vm.companyList,function (value) {
                    if(value.companyServerList[0].countNum==""){
                        value.companyServerList[0].countNum=0;
                    }
                })
            })
        // }])
$scope.getGradeList = function getGradeList(grade) {
    vm.grade=grade;
    // alert( vm.grade)
            $state.go('app.link',{id:vm.id,pid:vm.pid,grade:vm.grade}, {reload: true})}
        // vm.group = $state.params.group;
        // vm.serverId = $state.params.serverId;
        // vm.nextserverId = $state.params.nextserverId;
        // vm.nextserverName = $state.params.nextserverName;
        // var servea = parseInt(vm.serverId);
        // var serveb = parseInt(vm.nextserverId);
        // console.log(vm.serverId,vm.nextserverName,vm.nextserverId);
        //对应的导航激活
//     if(vm.group == "创业服务") {
//         vm.showMe = true;
//         $rootScope.bussNav = true;
//         $rootScope.finaceNav = false;
//     }
//     if(vm.group == "项目融资") {
//         $rootScope.bussNav = false;
//         $rootScope.finaceNav = true;
//     }
//     //请求服务类别
//     thirdpSeverSevice.serverType(1).then(function(res){
//         if(res.data.code == 0) {
//             vm.businessList = res.data.data;
//         }
//         for(var i in vm.businessList) {
//             if(vm.businessList[i].id == vm.serverId) {
//                 vm.serverName = vm.businessList[i].name;
//                 console.log(vm.serverName);
//             }
//         }
//     });
//     //获取公司列表
//     thirdpSeverSevice.comLists(servea,serveb).then(function (res) {
//         if(res.data.code == 0) {
//             vm.comLists = res.data.data;
//             angular.forEach(vm.comLists,function (item) {
//                item.gradeCon = $rootScope.gradeContent(item.grade);
//                 item.group = vm.group;
//                 if(item.count > 100) {                           //大于100显示100+
//                     item.showCount = 100;
//                 }else {
//                     item.showCount = item.count;
//                 }
//             });
//             console.log(vm.comLists);
//             //进入详情页
//             vm.goDetails = function(index) {
//                 localStorage.comDetails = JSON.stringify(vm.comLists[index]);
//                 $state.go("app.details",{id:vm.comLists[index].id})
//             }
//         }
//     });
//返回创业服务
        vm.goBackBuss = function () {
            sessionStorage.buss = vm.serverId;
            $state.go('app.businessService');
        };
        vm.goBackFinace = function () {
            if (vm.group == "创业服务") {
                $state.go('app.businessService');
            }
            if (vm.group == "项目融资") {
                $state.go('app.finance');
            }
        }

    }]);
