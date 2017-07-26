/*
 * Created by Administrator on 2017/3/29.
 */
app.controller('featureCtrl',['$rootScope','$scope','$state', 'hatchService','manageData',function ($rootScope,$scope,$state,hatchService,manageData) {

    var vm = this;

    vm.params = $state.params;


    // 获取产品列表
    hatchService.getProductList().then(function (res) {
        if (res.data.code == 0) {
            vm.productList = res.data.data;
            vm.id = $state.params.id || vm.productList[0].id;
            console.log(vm.id);
            if(vm.id){
                getComponentList ()
            }
        } else {
            $rootScope.alert(res.data.message)
        }
    });

    function getComponentList () {
        hatchService.getComponentList(vm.id).then(function (res) {
            if (res.data.code == 0) {
                vm.componentList = res.data.data;
                console.log(vm.componentList);
                // 同级组件数据处理成树状结构
                vm.componentListJson = manageData.componentToJson(vm.componentList);
                console.log(vm.componentListJson);
                // 把没有子组件的组件删除
                for(var i = 0;i<vm.componentListJson.length;i++){
                    if(vm.componentListJson[i].children.length == 0){
                        vm.componentListJson.splice(i,1)
                    }
                }
            } else {
                $rootScope.alert(res.data.message)
            }
        });
        vm.getList = function (id) {
            vm.id = id;
            $state.go(".",{id:vm.id},{reload:true})

        };
    }



    // 获取产品组件列表

    // 组件类型导航条吸顶效果
    $(document).delay(500).ready(function(){
        // 定义组件类型导航条到页面顶部的距离
        var navHeight= $("#navHeight").offset().top;
        var navFix=$("#nav-wrap");
        // 设置滚动监听事件
        $(window).scroll(function(){
            // 当滚动距离大于组件类型导航条到页面顶部的距离
            if($(this).scrollTop()>navHeight){
                // 为组件类型导航条设置fixed定位
                navFix.addClass("nav-fix");
            }
            else{
                // 为组件类型导航条移除fixed定位
                navFix.removeClass("nav-fix");
            }
        })
    });
}]);