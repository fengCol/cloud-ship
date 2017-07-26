// app.factory('commonUtil',function($rootScope,$state){
//         return {
//             pageDefault:{page:1,size:10,next:true},
//
//             process4Page:function(params){
//               if(params==undefined){
//                   params={};
//               }else{
//
//               }
//                 if(params.page==undefined){
//                     params.page=$state.params.page||this.pageDefault.page;
//                 }
//                 if(params.size==undefined){
//                     params.size=$state.params.size||this.pageDefault.size;
//                 }
//                 if(params.next==undefined){
//                     params.next=$state.params.next||this.pageDefault.true;
//                 }
//                 return {"params":params};
//             },
//             processPageResult:function(res){
//
//
//                     $state.params.next=res.data.data.next;
//                     return res;
//
//
//             },
//             setPage:function(res){
//                 this.page={current:res.data.data.page,size:res.data.data.size,next:res.data.data.next}
//             },
//             resetPage:function(){
//                 this.page={current:1,size:5,next:true}
//             },
//             page:{current:1,size:5,next:true},
//             concactArrayParam:function(name,params) {
//                 var tempUrls = "?";
//                 angular.forEach(params, function (data, index,array) {
//                     tempUrls = tempUrls + name+"=" + data + "&";
//                 });
//                 var url = tempUrls.substring(0, tempUrls.length - 1);
//                 return url;
//             },
//             showErrMsg:function(res){
//                 if(res.data.code==-5020){
//                     $rootScope.alert(res.data.message, function () {
//                         console.log(res.data.code+" get error  message is "+res.data.message);
//                         $state.go("login",{}, { reload: true });
//                     });
//                 }else{
//                     $rootScope.alert(res.data.message, function () {
//                         console.log(res.data.code+" get error  message is "+res.data.message);
//                     });
//                 }
//             },
//             showReturnMsg:function(res,path){
//
//                 switch(res.data.code){
//                     case 0:
//                         $rootScope.alert(res.data.message, function () {
//                             console.log(res.data.code+" get error  message is "+res.data.message);
//                             if(path==undefined){
//
//                             }else{
//                                 $state.go(path,{}, { reload: true });
//                             }
//                         });
//                         break;
//                     case -5020:
//                           $rootScope.alert(res.data.message, function () {
//                               console.log(res.data.code+" get error  message is "+res.data.message);
//                               $state.go("login",{}, { reload: true });
//                           });
//                         break;
//                     default :
//                         $rootScope.alert(res.data.message, function () {
//                             console.log(res.data.code+" get error  message is "+res.data.message);
//                         });
//
//                 }
//
//
//
//             },
//             isUpdate:function(id){
//                 if(id==undefined){
//                     return false;
//                 }else{
//                     return true;
//                 }
//             },
//
//             // 处理模块列表数据，将map添加进list结果
//             buildTree :function (modules) {
//                 var tree = [];
//                 return this.buildTreeNode(0, null, tree, modules);
//             },
//             buildTreeNode:function (pid, node, tree, modules) {
//                var now=this;
//                 angular.forEach(modules, function (data,index,array) {
//                     var module = data;
//                     if (module.parentID == pid) {
//                         tree = now.buildTreeNode(module.id, module, tree, modules);
//                         if (pid == 0) {
//                             tree.push(module);
//                         } else {
//                             if (node.nodes == undefined) {
//                                 node.nodes = [];
//                             }
//                             node.nodes.push(module);
//                         }
//                     }
//                 });
//                 tree = tree.sort(now.treeSort);
//                 angular.forEach(tree, function(item, index) {
//                     if (item.nodes) {
//                         item.nodes = item.nodes.sort(now.treeSort);
//                     }
//                 });
//                 return tree;
//             },
//             treeSort: function(a, b) {
//                 if (a.level < b.level)
//                     return -1;
//                 else if (a.level > b.level)
//                     return 1;
//                 else
//                     return 0;
//             },
//
//
//             arrayContains:function(array, obj) {
//             for (var i = 0; i < array.length; i++) {
//                 if (array[i] === obj) {
//                     return true;
//                 }
//             }
//             return false;
//         },
//
//             //比较传进来的两个值是否相等
//             compareString:function(string1,string2){
//                 if(string1 == string2){
//                     return true;
//                 }
//                 else {
//                     return false;
//                 }
//             }
//
//
//
//     }
//     })
//
//     .factory("datePickerUtils", ["$filter", function ($filter) {
//         return {
//             isDate: function (obj) {
//                 return Object.prototype.toString.call(obj) === "[object Date]";
//             },
//
//             buildDates: function (date, options) {
//                 var dates = [],
//                     lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0, 3);
//
//                 options = options || {};
//                 date = new Date(date);
//
//                 while (date.getDay() !== options.weekStartsOn) {
//                     date.setDate(date.getDate() - 1);
//                 }
//
//                 for (var i = 0; i < 42; i++) { // 42 == 6 rows of dates
//                     if (options.noExtraRows && date.getDay() === options.weekStartsOn && date > lastDate) break;
//
//                     dates.push(new Date(date));
//                     date.setDate(date.getDate() + 1);
//                 }
//
//                 return dates;
//             },
//
//             buildDayNames: function (weekStartsOn) {
//                 var dayNames = ['日', '一', '二', '三', '四', '五', '六'];
//
//                 if (weekStartsOn) {
//                     dayNames = dayNames.slice(0);
//                     for (var i = 0; i < weekStartsOn; i++) {
//                         dayNames.push(dayNames.shift());
//                     }
//                 }
//                 return dayNames;
//             },
//
//             monthCourse: function (start, end) {
//                 var months = [];
//                 start = new Date(start);
//                 end = new Date(end);
//                 var differ = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1;
//                 for (var i = 0; i < differ; i++) {
//                     var newMonth = new Date(start.getFullYear(), start.getMonth() + i, 1);
//                     months.push($filter('date')(newMonth, 'yyyy-MM'));
//                 }
//                 return months;
//             },
//
//             getMonthDate: function(year, month) {
//                 return new Date(year, month + 1, 0).getDate();
//             },
//
//             getDateByTime: function(date, time) {
//                 var year = new Date(date).getFullYear();
//                 var month = new Date(date).getMonth();
//                 var day = new Date(date).getDate();
//                 var hours = new Date(time).getHours();
//                 var minutes = new Date(time).getMinutes();
//
//                 if (!date || !time) {
//                     return "";
//                 } else {
//                     return new Date(year, month, day, hours, minutes).getTime();
//                 }
//
//             }
//         };
//     }]);


    app.factory('manageData',["$rootScope","$state","$http", function ($rootScope, $state, $http) {
        return {
            // 处理组件列表数据
            /*componentToJson:function (arr) {
             var json = {
             "root":{}
             };
             var parentId = -1;

             angular.forEach(arr, function (item) {
             if (item.parentId == parentId) {
             json.root.push({
             data: {
             cid: item.cid,
             name: item.name,
             edition: item.edition,
             detail: item.detail,
             parentId: item.parentId
             }, children: []
             });
             }
             });
             // for(var i = 0;i<arr.length;i++){
             /!*var rootItem = arr.filter(function (item) {
             return item.parentId == -1
             })[0];
             json.root = {
             data:{cid: rootItem.cid, name: rootItem.name, edition: rootItem.edition, detail: rootItem.detail,parentId:rootItem.parentId},
             children:[]
             };*!/
             mapJson(json.root);

             function  mapJson(json) {
             var parentId = "";

             if(json.data){
             parentId = json.data.cid;
             }

             angular.forEach(arr,function (item) {
             if(item.parentId == parentId ){
             json.children.push({
             data:{
             cid: item.cid,
             name: item.name,
             edition: item.edition,
             detail: item.detail,
             parentId:item.parentId
             },children:[]
             });
             }
             });
             /!* json.children = json.children.sort(function (a, b) {
             return a.data.sort - b.data.sort;
             });*!/
             if (json.children && json.children.length > 0) {
             angular.forEach(json.children, function (item) {
             mapJson(item);
             })
             }
             }
             // }
             return json;
             }*/
            componentToJson: function (data) {
                var pos = {};
                var tree = [];
                var i = 0;
                while (data.length != 0) {
                    if (data[i].parentId == -1) {
                        tree.push({
                            id: data[i].id,
                            name: data[i].name,
                            edition: data[i].edition,
                            detail: data[i].detail,
                            parentId: data[i].parentId,
                            children: []
                        });
                        pos[data[i].id] = [tree.length - 1];
                        data.splice(i, 1);
                        i--;
                    } else {
                        var posArr = pos[data[i].parentId];
                        if (posArr != undefined) {

                            var obj = tree[posArr[0]];
                            for (var j = 1; j < posArr.length; j++) {
                                obj = obj.children[posArr[j]];
                            }

                            obj.children.push({
                                id: data[i].id,
                                name: data[i].name,
                                edition: data[i].edition,
                                detail: data[i].detail,
                                parentId: data[i].parentId,
                                children: []
                            });
                            pos[data[i].id] = posArr.concat([obj.children.length - 1]);
                            data.splice(i, 1);
                            i--;
                        }
                    }
                    i++;
                    if (i > data.length - 1) {
                        i = 0;
                    }
                }
                return tree;
            }
        }
    }]);


//模态框
app.factory('modalUtil', ["$uibModal","$rootScope","$state","$scope",function($uibModal,$rootScope,$state,$scope) {
    return {
        //登录注册模态框
        loginGO: function(message, okFn) {
            $uibModal.open( {
                animation: true,
                templateUrl: 'views/template/login.html',
                controller: ['$scope','$uibModalInstance', function($scope, $uibModalInstance) {
                    $scope.content = message;
                    $scope.loginModal = 1;
                    $scope.ok = function () {
                        if (okFn) {
                            okFn();
                        }
                        $uibModalInstance.close('closed');
                    };
                    $scope.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                }],
                size: 'xs'
            })

        }

    }
}]);
app.factory('comUntil',function () {
    return {
        scrollTo: function (x, y) {
            window.scrollTo(x, y);
        },
    }
})




