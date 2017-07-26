/**
 * Created by w on 2016/12/20.
 */
/**
 * Created by gaogao on 16/7/14.
 */
app.controller('companyDetialController', function ($scope, $rootScope, $state, $modal, userService) {
    var vm = this;
    userService.getCompanyDetails().then(function (res) {
            console.log(res);
        vm.comDetails = res.data.data.company;
        console.log(vm.comDetails);
    });
    vm.cooperate = function () {
            userService.getCooperate().then(function (res) {
                        console.log(res);
                if(res.data.code == -4){
                    vm.companyItem=res.data;
                    var modal = $modal.open({
                        templateUrl: '/views/template/alert.html',
                        scope: $scope,
                        show: false,
                        size: 'sm'
                    });
                    vm.closeTips = function () {
                        modal.close();
                        vm.showCompany = true;
                        console.log(res.data);
                        // vm.comDetails.count = res.data.count;
                        // $state.go("app.user.company",{},{reload:true})
                    }
                    vm.getTrue = function () {
                        modal.close();
                        $state.go("app.user.companyEdit",{},{reload:true})
                    }

                }else{
                    $state.go("app.user.companyCooperate",{},{reload:true})
                }
            })
    }
});
