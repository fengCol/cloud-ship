/**
 * Created by 俊 on 2016/11/5.
 */

app.controller('FinanceController',
    ['$rootScope','$scope','$location','$anchorScroll','$state','thirdpSeverSevice',
    function($rootScope,$scope,$location,$anchorScroll,$state,thirdpSeverSevice){
        var vm = this;
        var arrayOne;
        vm.activedServer = 0;
        //服务类别
        thirdpSeverSevice.getBussenissList().then(function(res){
            // console.log(res);
            // console.log(res.data.data);
            vm.data = res.data.data;
            vm.parentList = vm.data.parentList;
            // console.log(vm.parentList);
            vm.sliceParentList=[];
            //  vm.sliceParentList = vm.parentList.slice(5);
            // console.log(vm.sliceParentList);
            //console.log(vm.parentList)
            angular.forEach(vm.parentList,function (value) {
                if (value.name=="风险投资"){
                    vm.sliceParentList.push(value);
                    $rootScope.fid = value.id;
                }
                if(value.name=="天使投资"){
                    vm.sliceParentList.push(value);
                    $rootScope.tid = value.id;
                }
            })
       //console.log(vm.sliceParentList)

        // var tid  = vm.sliceParentList[0].id;
        // var fid =  vm.sliceParentList[1].id;
        //console.log(tid);
        //console.log(fid)
        //获取公司列表
          //天使
        thirdpSeverSevice.getfinanceCompany( $rootScope.tid).then(function (res,$index) {
            // console.log(res);
            vm.data2 = res.data.data
            vm.cList = res.data.data.cList;
            console.log(vm.cList)
            // console.log(res.data.data);
            // console.log(vm.cList);
            // console.log(vm.data2.totaltianshi);
            angular.forEach( vm.cList,function (value) {
                if(value.angelServerList[0].countNum==""){
                    value.angelServerList[0].countNum=0
                }
            })
        });
        //风险
        thirdpSeverSevice.getfinancedCompany($rootScope.fid).then(function (res) {
            // console.log(res);
            vm.data3 = res.data.data
            vm.cfList = res.data.data.cfList;
            // console.log(vm.cfList);
            angular.forEach( vm.cfList,function (value) {
                if(value.investServerList[0].countNum==""){
                    value.investServerList[0].countNum=0
                }
            })
        });
        });
        //锚点定位
        vm.goAnchor = function (id) {
            document.getElementById(""+id+"").scrollIntoView();
        };

            //公司列表
            // angular.forEach(vm.businessList,function (item) {
            //     thirdpSeverSevice.comLists(item.id,0).then(function (res) {
            //         if(res.data.code == 0) {
            //             item.comList = res.data.data;
            //             angular.forEach(item.comList,function (com) {
            //                 com.group = "项目融资";
            //                 com.gradeCon = $rootScope.gradeContent(com.grade);
            //                 if(com.count > 100) {                           //大于100显示100+
            //                     com.showCount = 100;
            //                 }else {
            //                     com.showCount = com.count;
            //                 }
            //             });
            //             item.listNum = item.comList.length;
            //         }
            //     })
            // });
            // console.log(vm.businessList);
            //进入详情页
            // vm.goDetails = function(outer,inner) {
            //     localStorage.comDetails = JSON.stringify(vm.businessList[outer].comList[inner]);
            //     $state.go("app.details",{id:vm.businessList[outer].comList[inner].id});
            // }
    }]);
