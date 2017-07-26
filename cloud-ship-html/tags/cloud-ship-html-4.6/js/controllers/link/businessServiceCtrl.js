/**
 * Created by insider_z on 2016/10/14.
 */
app.controller('businessServiceCtrl',
    ['$rootScope','$scope','$state','$location','$anchorScroll','thirdpSeverSevice','comUntil',
    function($rootScope,$scope,$state,$location,$anchorScroll,thirdpSeverSevice,comUntil) {
    var vm = this;
    vm.clickId = 80;
        vm.index = $state.params.index||0;
        vm.id = $state.params.id||"" ;
        vm.id=Number(vm.id)
        vm.params = $state.params;
        console.log(vm.params)
        vm.cid = $state.params.cid||"";
        vm.cid=Number(vm.cid)
        if( vm.cid==""){
            vm.data="";
        }
        else{
            vm.data={id:vm.cid};
        }
    function getBussenissList() {
            thirdpSeverSevice.getBussenissList().error(function () {
            }).then(function (res) {
                //获取根节点父类数据；
                    console.log(res);
                    console.log(res.data.data);
                    vm.data = res.data.data;
                   vm.parentList = vm.data.parentList;

                // vm.serverList = vm.data.serverList;
                console.log(vm.parentList);
                console.log(vm.serverList);
                if (!$state.params.cid){
                    vm.checkParentId = true;
                }else{
                    vm.checkParentId=false
                }

            })
        }

        getBussenissList();

        //根据父类的id来获取相应的子类

    thirdpSeverSevice.getServiceList(vm.data).then(function (res) {
        vm.clickId = vm.cid;
        // vm.id=id;
        // console.log(id);
        console.log(res);
        vm.serverList = res.data.data.serverList;
       //  vm.id=vm.parentList.id;
       // vm.cid = vm.serverList.id;
        console.log(vm.serverList);
            // vm.index=vm.id;
            angular.forEach(vm.serverList,function (value) {
                console.log("sssssss")
                console.log(value.companyServerList)
                angular.forEach(value.companyServerList,function (num) {
                    if (num.countNum==""){
                        num.countNum=0;
                    }
                })
            })
        // angular.forEach(vm.serverList,function (value) {
        //     angular.forEach(value.companyServerList,function (num) {
        //         thirdpSeverSevice.getComDetil(num.cid,num.sid).then(function (mes) {
        //
        //             vm.countNum = mes.data.data;
        //             vm.count = vm.countNum.companyServerRelation.countNum;
        //             console.log(vm.count)
        //             num.count =  vm.count
        //
        //         })
        //     })
        //     setTimeout(function () {
        //         angular.forEach(value.companyList,function (company1) {
        //             angular.forEach(value.companyServerList,function (list) {
        //                 company1.count = list.count;
        //             })
        //         })
        //     },800)
        //
        //
        //     console.log("在这里");
        //     console.log(value)
        //     console.log(vm.serverList)
        // })

    })

        //锚点定位
        vm.goAnchor = function (id) {
            vm.params.id = id;
            console.log("cid");
            console.log(id)
            // document.getElementById(""+id+"").style.transition='1s';
            // document.getElementById(""+id+"").style.textTrransform='uppercase';
            // document.getElementById(""+id+"").scrollIntoView(100);
            // $("#"+id).click(function(){
                $.scrollTo("#"+id,800);
            // });

        };
    setTimeout(function () {
        vm.goAnchor($state.params.id);
    },500)

        vm.changeServer = function (cid,index) {
            // $state.params.index=index;
            $state.go('app.businessService',{cid:cid,id:"",index:index},{reload:true})}
        // comUntil.scrollTo(0,0)
    }])

    // if(sessionStorage.buss != undefined) {  //点击面包屑回来的数据
    //     vm.serverId = sessionStorage.buss;
    // }
    // vm.activedServer = 0;
    // //请求服务类别
    // thirdpSeverSevice.serverType(1).then(function(res){
    //     if(res.data.code == 0) {
    //         vm.businessList = res.data.data;
    //         angular.forEach(vm.businessList,function (businesslist,index) {  //点击面包屑回来选中的类别
    //             if(businesslist.id == vm.serverId) {
    //                 vm.activedServer = index;
    //                 vm.getNextService(vm.serverId);
    //                 sessionStorage.clear();
    //             }
    //         })
    //     }
    // });
    // // 请求获取子类别
    // vm.getNextService = function(id){
    //     thirdpSeverSevice.severNextType(id).then(function(res){
    //         if(res.data.code == 0) {
    //             vm.nextList = res.data.data;
    //         }
    //         //公司列表添加成子类属性
    //         angular.forEach(vm.nextList,function (item,index) {
    //             thirdpSeverSevice.comLists(id,item.id).then(function (res) {
    //                 if(res.data.code == 0) {
    //                     item.comList = res.data.data;
    //                     angular.forEach(item.comList,function (com) {       //等级说明添加成公司属性
    //                         com.group = "创业服务";
    //                         com.gradeCon = $rootScope.gradeContent(com.grade);
    //                         if(com.count > 100) {                           //大于100显示100+
    //                             com.showCount = 100;
    //                         }else {
    //                             com.showCount = com.count;
    //                         }
    //                     });
    //                     item.listNum = item.comList.length;
    //                 }
    //             });
    //         });
    //         //进入详情页
    //         vm.goDetails = function(outer,inner) {
    //             localStorage.comDetails = JSON.stringify(vm.nextList[outer].comList[inner]);
    //             $state.go("app.details");
    //             $state.go("app.details",{id:vm.nextList[outer].comList[inner].id});
    //         }
    //     });
    // };
    // //进入页面让第一个服务类别的子类已显示
    // vm.getNextService(2);
    // //切换服务类别请求获取子类别
    // vm.changeServer = function(row) {
    //     vm.activedServer = row;
    //     var servea = vm.businessList[row].id;
    //     vm.getNextService(servea);
    // };
    // //锚点定位
    // vm.goAnchor = function (anchorIndex) {
    //     vm.nextServer = anchorIndex;
    //     $location.hash(anchorIndex);
    //     $anchorScroll();
    // };
