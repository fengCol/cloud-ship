/**
 * Created by 星 on 2016/10/13.
 */
angular.module("app",['ngMessages']);
app.controller('companyRegisterCtrl', ['$scope','$state', '$modal', '$rootScope', 'userService',
    function ($scope, $state,$modal, $rootScope, userService) {
        var vm = this;
        vm.company = {};
        //弹出模态框
        $scope.open = function () {
            var modal = $modal.open({
                templateUrl: '/views/template/alertModal.html',
                scope: $scope,
                show: false,
                size: 'sm'
            });
            $scope.close = function () {
                modal.close();
                $state.go("app.user.company");
            }
        };
        //用户信息（为获取uid即用户id）
        userService.getUserDetails().then(function (res) {
            console.log(res);
            vm.data = res.data.data.user;
            // vm.stage = companyStage[vm.data.stage];
            console.log(vm.data);
            console.log(vm.data.id);
             vm.company.uid = vm.data.id;
        });
        //获取公司信息
        userService.getCompanyDetails().then(function (res) {
            console.log(res);
            vm.comDetails = res.data.data.company;
            if(vm.comDetails.grade == 0){
                vm.comDetails.status = "";
            }
            console.log(vm.comDetails);
            vm.company.cid = vm.comDetails.id;
            console.log(vm.company.cid);
        });



        //公司认证
        vm.goRegister = function () {
            vm.show = true;
            vm.company.status = "";
            // vm.company.grade = 1;
            userService.companyRegister(vm.company).then(function (res) {
                console.log(res);
                if (res.data.code === 0) {
                    $scope.open();
                     // $state.go();
                } else {
                    $rootScope.alert(res.data.message);
                }


            });
        };


    }]);

