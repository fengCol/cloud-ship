/**
 * Created by gaogao on 16/7/12.
 */
app.controller("HomeController",['$scope','$timeout','thirdpSeverSevice',function($scope,$timeout,thirdpSeverSevice){
    var vm =this;
    //启动轮播图2s
    // $('.carousel').carousel({
    //     interval: 2000 // in milliseconds
    // });

    //企业合作总数
    function getAllCompany() {
        thirdpSeverSevice.getAllCompany().error(function () {
        }).then(function (res) {
            //console.log(res);
            vm.totalCSRelation = res.data.totalCSRelation;
            vm.totalCompany = res.data.totalCompany;
        })
    }
    getAllCompany();

    //请求服务类别
    // thirdpSeverSevice.serverType(1).then(function(res){
    //     if(res.data.code == 0) {
    //         vm.businessList = res.data.data;
    //     }
    //     angular.forEach(vm.businessList,function (businessItem) {
    //         thirdpSeverSevice.severNextType(businessItem.id).then(function(res) {
    //             if (res.data.code == 0) {
    //                 businessItem.busNextList = res.data.data;
    //             }
    //         })
    //     });
    // });
    // thirdpSeverSevice.serverType(2).then(function(res){
    //     if(res.data.code == 0) {
    //         vm.finaceList = res.data.data;
    //     }
    // });

    //获取服务子父级
    function getBussenissList() {
        thirdpSeverSevice.getBussenissList().error(function () {
        }).then(function (res) {
            //获取根节点父类数据；
            //console.log(res);
            //console.log(res.data.data);
            vm.data = res.data.data;
            vm.parentList = vm.data.parentList;
            vm.serverList = vm.data.serverList;
            //console.log(vm.parentList);
           //根据父类获取子类的数据

            var dataed = [];
            angular.forEach(vm.parentList,function (parentList,$index){
                thirdpSeverSevice.getBussenissdList(vm.parentList[$index].id).then(function (res) {
                    parentList.data=res.data.data.serverList;
                })
            })
        })
    }

    getBussenissList();

    $timeout(function() {
            console.clear()
        }, 100);

}]);
