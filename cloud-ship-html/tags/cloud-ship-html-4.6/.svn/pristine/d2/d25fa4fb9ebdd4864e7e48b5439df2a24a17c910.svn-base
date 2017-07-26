/**
 * Created by gaogao on 16/7/14.
 */
angular.module("app",['ngMessages']);
app.controller('homepageDetailController', function ($scope,$window, $rootScope, $state, $modal, userService) {
    var vm = this;

    userService.getUserDetails().then(function (res) {
        // console.log(res);
        vm.person = res.data.data.user;
        // vm.stage = companyStage[vm.data.stage];
        // console.log(vm.person.name);
    });

    // userService.getUserDetails().then(function (res) {
    //     if (res.data.code === 0) {
    //         vm.person = res.data.data;
    //         vm.person.mobile=vm.person.mobile-0;
    //     }
    // });

    vm.personSave = function () {
        userService.personalChange(vm.person).then(function (res) {
            console.log(res);
            if (res.data.code ==1||res.data.code==0) {
                $state.go('app.user.homepage');
                $window.location.reload(true);
            } else {
                $rootScope.alert(res.data.message);
            }
        })
    }
});
