/**
 * Created by 星 on 2016/10/16.
 */
app.controller('servicesRequestCtrl', ['$scope', '$rootScope','$state', 'userService',
    function ($scope, $rootScope, $state,userService) {
        var vm = this;
        vm.stages = ['全部申请', '未受理', '已拒绝','已认证'];
        vm.activeStage = 0;
        //获取服务申请的所有数据
        // userService.getServiceApply().then(function (res) {
        //     console.log(res);
        //     vm.data = res.data.data;
        // })
        var aaa = [-1, 1, 2];
        vm.page=$state.params.page||1;
        vm.size=10;
        // vm.activeStage = 0;
        // function startOrderService(aaa) {
        //     userService.orderServices2(aaa).then(function (res) {
        //         console.log(res);
        //         vm.total = res.data.total;
        //         vm.datas = res.data.data.csList;
        //         console.log(vm.datas);
        //         angular.forEach(vm.datas, function (item) {
        //             if (item.status == -1 ) {
        //                 item.singleStage = "已拒绝";
        //             }
        //             if (item.status == 1) {
        //                 item.singleStage = "未受理";
        //             }
        //             if (item.status == 2){
        //                 item.singleStage = "已认证"
        //             }
        //         })
        //     })
        // };
        // startOrderService(aaa);


        vm.servicesRequest = function (aaa) {
            userService.orderServices2(aaa,vm.page).then(function (res) {
                console.log(res);
                vm.total = res.data.total;
                vm.datas = res.data.data.csList;
                console.log(vm.datas);
                angular.forEach(vm.datas, function (item) {
                    if (item.status == -1 ) {
                        item.singleStage = "已拒绝";
                    }
                    if (item.status == 1) {
                        item.singleStage = "未受理";
                    }
                    if (item.status == 2){
                        item.singleStage = "已认证"
                    }
                })
            })
        };
        vm.servicesRequest(aaa);


        vm.changeStage = function (index) {
            console.log(index);
            if (index == 0) {
                aaa = [-1, 1, 2];
                vm.servicesRequest(aaa,vm.page);
            } else if (index == 1) {
                aaa = 1;
                vm.servicesRequest(aaa,vm.page);
            } else if (index == 2) {
                aaa = -1;
                vm.servicesRequest(aaa,vm.page);
            } else if(index == 3){
                aaa = 2;
                vm.servicesRequest(aaa,vm.page);
            }
            vm.activeStage = index;
        };
    }]);