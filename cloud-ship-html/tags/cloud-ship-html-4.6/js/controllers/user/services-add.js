/**
 * Edited by Administrator on 2016/10/16.
 */
app.controller('servicesAdd',
    ['$rootScope', '$scope', '$state', 'userService',
        function ($rootScope, $scope, $state, userService) {
            var vm = this;
            console.log($state.params);
            vm.id = $state.params.csid;
            vm.params = {};
            vm.data = {};
            vm.string = {};


            //搜索框的申请服务的二级联动
            //父级获取
            userService.parentService().then(function (res) {
                    console.log(res);
                    console.log(res.data.data);
                    vm.data = res.data.data;
                    vm.parentList = vm.data.childList;
                    console.log(vm.parentList);
                }
            );

            vm.changeSelect = function () {
                // vm.params.parentId =  vm.parentList[index].id;
                console.log(vm.params.parentId);
                vm.parentId = vm.params.parentId;
                // if(vm.data.modulsb_id){
                //     delete vm.data.modulsb_id;
                // }
                userService.childService(vm.parentId).then(function (res) {
                    console.log(vm.params);
                    console.log(vm.params.parentId)
                    console.log(res)
                    vm.dataChild = res.data.data.childList;
                    console.log(res.data.data);
                    console.log(vm.dataChild);
                })
            }

            // 获取联动数据的详细信息
            function detailsLink() {
                userService.getdetailsLink(vm.id).then(function (res) {
                    console.log(res);
                    vm.details = res.data.data.ex;
                    console.log(vm.details);
                    // if(res.data.code == 0){
                    //     console.log(res);
                    // } else{
                    //     $rootScope.alert(res.data.message);
                    // }
                })
            }
            detailsLink();

//获取用户id即uid；

            userService.getUserDetails().then(function (res) {
                console.log(res);
                vm.datas = res.data.data.user;
                // vm.stage = companyStage[vm.data.stage];
                console.log(vm.datas);
                console.log(vm.datas.id);

            })

//获取公司id即cid；
            userService.getCompanyDetails().then(function (res) {
                console.log(res);
                vm.comDetails = res.data.data.company;
                console.log(vm.comDetails.id);
            });

            //申请认证
            vm.addService = function () {
                if(!vm.search) {
                    vm.string.sid = vm.params.parentId;
                }else{
                    vm.string.sid = vm.search.id;
                }
                vm.string.favo = vm.data.companyText;
                vm.string.uid = vm.datas.id;
                vm.string.cid = vm.comDetails.id;
                console.log(vm.params.parentId);

                userService.postServicesAdd(vm.string).then(function (res) {
                    if (res.data.code === 0) {
                        $state.go('app.user.forServices')
                    } else {
                        $rootScope.alert(res.data.message);
                    }
                })
            }
        }]);