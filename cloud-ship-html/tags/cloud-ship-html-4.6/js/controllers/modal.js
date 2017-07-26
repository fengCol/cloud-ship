///**
// * Created by insider_z on 2016/10/14.
// */
//
//app.controller('modalDemo',function($scope,$modal,$log){ //
//    $scope.items = ['html5','jq','FE-演示平台'];
//    $scope.open = function(size){  //打开模态
//        var modalInstance = $modal.open({
//            templateUrl : 'myModelContent.html',  //指向上面创建的视图
//            controller : 'ModalInstanceCtrl',// 初始化模态范围
//            size : size, //大小配置
//            resolve : {
//                items : function(){
//                    return $scope.items;
//                }
//            }
//        })
//        modalInstance.result.then(function(selectedItem){
//            $scope.selected = selectedItem;
//        },function(){
//            $log.info('Modal dismissed at: ' + new Date())
//        })
//    }
//})
//.controller('ModalInstanceCtrl',function($scope,$modalInstance,items){ //依赖于modalInstance
//    $scope.items = items;
//    $scope.selected = {
//        item : $scope.items[0]
//    };
//    $scope.ok = function(){
//        $modalInstance.close($scope.selected.item); //关闭并返回当前选项
//    };
//    $scope.cancel = function(){
//        $modalInstance.dismiss('cancel'); // 退出
//    }
//})

app.controller('companyRegisterCtrl', function ($scope, $modal, userService) {
    var vm = this;
    vm.company = {};
    vm.goRegister = function () {
        vm.show = true;
        userService.companyRegister(vm.company).then(function (res) {
            console.log(res);
            if (res.data.code === 0) {
                //弹出模态框
                vm.openSureModal()
            }
        });
    };

    //打開提示框
    vm.openSureModal = function () {
        $modal.open({
            templateUrl: 'sureModal.html',
            scope: $scope,
            show: false
        });
    };
    //關閉提示框
    vm.closeModal = function () {
        vm.openSureModal.close()
    }


});

