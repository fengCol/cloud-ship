/**
 * Created by gaogao on 16/7/14.
 * Edited by xing on16/10/10.
 */
app.controller('homepageController', ['$scope', '$state','userService', function ($scope, $state,userService) {
    var vm = this;
    var companyStage = ['初创型', '成长型', '成熟型', '已上市'];
    userService.getUserDetails().then(function (res) {
        console.log(res);
            vm.data = res.data.data.user;
            // vm.stage = companyStage[vm.data.stage];
        console.log(vm.data);
            console.log(vm.data.name);
    })




}]);