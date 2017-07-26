/**
 * Created by 星 on 2016/10/14.
 */
app.controller('forServices', ['$rootScope', '$scope','$state','$modal' ,'userService' ,function ($rootScope, $scope,$state,$modal,userService) {
    var vm = this;
    var page = $state.params.page || 1;//定义当前页数，初始值为1
    console.log($state.params.page);
    console.log(page);
    userService.forServices(page).then(function (res) {
           console.log(res);
            vm.services = res.data.data.companyServerEXList;
            console.log(res.data);
            console.log(vm.services);
            vm.total = res.data.total;

            // vm.goCheck = function (index) {
            //     sessionStorage.addOrCheck = true;   //点击查看，表单不可用
            //     sessionStorage.services =JSON.stringify(vm.services[index]);
            // }
    });
    vm.goAdd = function () {
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
                    $state.go("app.user.company",{},{reload:true})
                }


            }else{
                $state.go("app.user.addServices",{},{reload:true})
            }
        })
    };
}]);