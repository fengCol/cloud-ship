/**
 * Created by 星 on 2016/10/13.
 */
app.controller('editCompanyCtrl', ['$scope', '$rootScope', '$state', '$modal', 'userService',
    function ($scope, $rootScope, $state, $modal, userService) {
        var vm = this;

        //vm.companyStage = {
        //    初创型: "0",
        //    成长性: "1",
        //    成熟型: "2",
        //    已上市: "3"
        //};

        userService.getCompanyDetails().then(function (res) {
            console.log(res);
            vm.company = res.data.data.company;
            console.log(vm.company);

        });
        //用户信息（为获取uid即用户id）
        userService.getUserDetails().then(function (res) {
            console.log(res);
            vm.data = res.data.data.user;
            // vm.stage = companyStage[vm.data.stage];
            console.log(vm.data);
            console.log(vm.data.id);
            vm.company.uid = vm.data.id;
        })

        vm.goUpdateCompany = function () {
            console.log(vm.company);
            userService.updateCompany(vm.company).then(function (res) {
                if (res.data.code === 0) {
                    $state.go('app.user.company')
                } else {
                    $rootScope.alert(res.data.message);
                }
            })
        };
        ////打開提示框
        //vm.openSureModal = function () {
        //    $modal.open({
        //        templateUrl: 'sureModal.html',
        //        scope: $scope,
        //        show: false
        //    });
        //};
        ////關閉提示框
        //vm.closeModal = function () {
        //    vm.openSureModal.close()
        //}

    }]);