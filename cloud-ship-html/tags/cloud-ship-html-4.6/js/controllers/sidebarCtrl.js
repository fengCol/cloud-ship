angular.module('cloud')
    .controller('SidebarCtrl', ['$scope', '$state', '$rootScope',  SidebarCtrl]);
function SidebarCtrl($scope, $state, $rootScope) {
    var vm = this;
    console.log(vm);
    var sideConstant = {
        'hatch': {
            title: false,
            level: 2,
            list: [
                {
                    type: '模式介绍',
                    iconBlack: 'pattern-black',
                    iconBlue: 'pattern-blue',
                    idTag:'sidebar-one',
                    url:'app.hatch.pattern',
                    list: [
                        {name: '模式介绍', 'url': 'app.hatch.pattern'}
                    ]

                }, {
                    type: '产品特色',
                    iconBlack: 'feature-black',
                    iconBlue: 'feature-blue',
                    idTag:'sidebar-two',
                    url:'app.hatch.feature',
                    list: [
                        {name: '产品特色', 'url': 'app.hatch.feature',params: '({id:""})'}
                    ]

                },
                {
                    type: '过往项目',
                    iconBlack: 'project-black',
                    iconBlue: 'project-blue',
                    idTag:'sidebar-three',
                    url:'app.hatch.project',
                    list: [
                        {name: '生活服务', 'url': 'app.hatch.project',params: '({type: 0,id:""})'},
                        {name: '金融服务', 'url': 'app.hatch.project',params: '({type: 5,id:""})'},
                        {name: '社交网络', 'url': 'app.hatch.project',params: '({type: 10,id:""})'},
                        {name: '教育行业', 'url': 'app.hatch.project',params: '({type: 15,id:""})'},
                        {name: '医疗健康', 'url': 'app.hatch.project',params: '({type: 20,id:""})'},
                        {name: '企业支持', 'url': 'app.hatch.project',params: '({type: 25,id:""})'}

                    ]

                }
            ]
        }
    };

    vm.sideState = $state.current.parents;
    vm.sideMenu = sideConstant.hatch;
    // if (vm.sideState && vm.sideState == 'novice') {
    //     vm.sideMenu = sideConstant.material;
    // } else if (vm.sideState && vm.sideState != 'school') {
    //     vm.sideMenu = sideConstant[vm.sideState];
    // } else if (vm.sideState && vm.sideState == 'school') {
    //     if ($rootScope.userData && $rootScope.userData.id == $state.params.uid) {
    //         vm.sideMenu = sideConstant.my;
    //     } else {
    //         vm.sideMenu = sideConstant.other;
    //     }
    // }

    vm.getUrl = function (li) {
        //如果参数为undefined置为空，不然下面拼字符串会出错
        if (li.params == undefined) {
            li.params = ""
        }
        //新打开窗口，侧边栏不高亮
        if (li.target == undefined) {
            vm.currentUrl = li.url + li.params;
           $(window).scrollTop(0);
        }


    };

    vm.activePanel = 0;
    angular.forEach(vm.sideMenu.list, function (items, index) {
        angular.forEach(items.list, function (item) {
            // 特殊已选子菜单,需要通过参数来进行对比判断
            if (item.params) {
                var itemParams = item.params.match(/\{[^\)]+\}/g);
                var itemParamString = itemParams[0].replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2": ');
                if ($state.current.name == 'app.hatch.project') {
                    var itemParamJSON = JSON.parse(itemParamString);
                    if ($state.params.type == itemParamJSON.type) {
                        vm.activePanel = index;
                        item.selected = true;
                        return false;
                    } else {
                    }
                } else {
                }
                // 普通已选子菜单
            } else {
                if (item.url == $state.current.name) {
                    //url和state要保持一致才能用这种方法判断
                    vm.activePanel = index;
                    item.selected = true;
                    return false;
                }
            }

        })
    })

}
