app.config(projectRouteConfig);
function projectRouteConfig($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $locationProvider) {
    var _lazyLoad = function (loaded) {
        return function ($ocLazyLoad) {
            return $ocLazyLoad.load(loaded, {serie: true});
        }
    };
    $ocLazyLoadProvider.config({
        debug: false,
        events: true
    });

    //更改url格式配置为html5，去掉#号
    $locationProvider.html5Mode(true);


    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('app', {
            url: '',
            templateUrl: 'views/main.html',
            controller: 'MainController',
            controllerAs: 'vm',
            abstract: true,
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/controllers/main.js',
                    'js/directive/pagination/pagination.js',
                    'js/directive/uploadImg/simpleUpload.js',
                    'js/controllers/sidebarCtrl.js',
                    'js/controllers/contentCtrl.js'
                    //'css/main.css',
                    //'js/directives/promise-button/promise.js',
                    //'js/directives/promise-button/promise.css'
                ])
            }
        })

        //首页
        .state('app.home', {
            url: '/home',
            title: '首页',
            templateUrl: 'views/home.html',
            controller: 'HomeController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/controllers/home.js',
                    'css/home.css'
                ])
            }
        })
        //注册登录
        .state('app.login', {
            url: '/login/:loginMod',
            title: '注册登录',
            templateUrl: 'views/login/login.html',
            controller: 'loginController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'css/login/login.css',
                    'js/controllers/login.js'
                ])
            }
        })
        //找回密码三步骤
        .state('app.verifyTel', {
            url: '/verifyTel',
            title: '短信验证',
            templateUrl: 'views/login/verifyTel.html',
            controller: 'verifyTelController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'css/login/verifyTel.css',
                    'js/controllers/verifyTel.js'
                ])
            }
        })
        .state('app.verifyImg', {
            url: '/verifyImg',
            title: '新密码输入',
            templateUrl: 'views/login/verifyImg.html',
            params:{'mobile':null, "verify":null},
            controller: 'verifyImgController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'css/login/verifyTel.css',
                    'js/controllers/verifyImg.js'
                ])
            }
        })
        .state('app.verifyFin', {
            url: '/verifyFin',
            title: '完成',
            templateUrl: 'views/login/verifyFin.html',
            controller:"verifyFin",
            resolve: {
                loadMyFile: _lazyLoad([
                    'css/login/verifyTel.css',
                    'js/controllers/verifyFin.js'

                ])
            }
        })

        //会员侧边栏
        .state('app.user', {
            url: '/user/:uid',
            title: '用户中心',
            templateUrl: 'views/user/user-nav.html',
            controller: 'homepageCtrl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'css/user/user-nav.css',
                    'css/user/user-successModal.css', //模态框
                    'js/controllers/user/navPage.js'
                ])
            }
        })

        //会员右边栏
        // 公司详情页面
        .state('app.user.company', {
            url: '/company',
            title: '公司详情',
            templateUrl: 'views/user/user-company.html',
            controller: 'companyDetialController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'css/user/user-company.css',
                    'css/thirdpService/submit.css',
                    'js/controllers/user/companyDetial.js'
                ])
            }
        })

        // 编辑公司页面
        .state('app.user.companyEdit', {
            url: '/company/edit',
            title: '编辑公司',
            templateUrl: 'views/user/user-companyEdit.html',
             controller: 'editCompanyCtrl',
             controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'css/user/user-company.css',
                    // 'css/user/user-successModal.css' // 模态框
                    'css/public.css',
                    'js/controllers/user/editCompany.js',
                ])
            }
        })

        // 消息列表
        .state('app.user.message', {
            url: '/message',
            title: '消息列表',
            templateUrl: 'views/user/user-message.html',
            controller: 'userMessageController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'css/user/user-message.css',
                    'js/controllers/user/userMessage.js'
                ])
            }
        })

        //修改密码
        .state('app.user.changePwd', {
            url: '/changePwd',
            title: '修改密码',
            templateUrl: 'views/user/user-changePwd.html',
            controller: 'passWordController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'css/user/user-changePwd.css',
                    'js/controllers/user/changePwd.js'
                ])
            }
        })

        // 合作入驻
        .state('app.user.companyCooperate', {
            url: '/company/cooperate',
            title: '合作入驻',
            templateUrl: 'views/user/user-companyCooperate.html',
            controller: 'companyRegisterCtrl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'css/user/user-company.css',
                    'js/controllers/user/companyCooperate.js'
                    // 'css/user/user-successModal.css'  //模态框
                ])
            }

        })

        // 提供服务
        .state('app.user.forServices', {
            url: '/forServices?page&size',
            title: '提供服务',
            templateUrl: 'views/user/user-forServices.html',
            controller: 'forServices',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'css/user/user-services.css',
                    'js/controllers/user/forServices.js', 'css/public.css',
                    'css/thirdpService/submit.css'
                ])
            }
        })

        // 申请服务
        .state('app.user.servicesRequest', {
            url: '/services/request?status*page',
            title: '服务申请',
            templateUrl: 'views/user/user-serviceRequest.html',
            controller: 'servicesRequestCtrl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'css/user/user-services.css',
                    'js/controllers/user/servicesRequest.js'
                ])
            }
        })


        // 新增服务
        .state('app.user.addServices', {
            url: '/services/add/?csid',
            title: '服务申请',
            templateUrl: 'views/user/user-addServices.html',
            controller: 'servicesAdd',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'css/user/user-services.css',
                    'js/controllers/user/services-add.js'
                    // 'css/user/user-successModal.css' //模态框

                ])
            }
        })
        //修改密码结果
        .state('app.user.changePwdResult', {
            url: '/changePwdResult',
            title: '修改密码结果',
            templateUrl: 'views/user/user-changePwdResult.html',
            controller: 'changePwdResultController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'css/user/user-changePwdResult.css',
                    'js/controllers/user/changePwdResult.js'

                ])
            }
        })

        //个人主页
        .state('app.user.homepage', {
            url: '/homepage',
            title: '个人主页',
            templateUrl: 'views/user/user-homepage.html',
            controller: 'homepageController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'css/user/user-homepage.css',
                    'js/controllers/user/homepage.js'
                ])
            }
        })

        //个人主页详情
        .state('app.user.homepageDetail', {
            url: '/homepageDetail',
            title: '个人主页详情',
            controller: 'homepageDetailController',
            templateUrl: 'views/user/user-homepage-detail.html',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'css/user/user-homepage-detail.css',
                    'js/controllers/user/homepageDetail.js'
                ])
            }
        })


        // 创业服务-详情页
        .state('app.details', {
            url: '/details?cid&sid&sname',
            title: '公司详情',
            templateUrl: 'views/thirdpServer/detailspage.html',
            controller: 'detailCtrl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'css/thirdpService/detailspage.css',
                    'css/thirdpService/submit.css',
                    'css/hatch.css',
                    'js/controllers/companyDetails.js'
                ])
            }
        })
        // 创业服务
        .state('app.businessService', {
            url: '/businessService?id&cid$index',
            title: '创业服务',
            templateUrl: 'views/thirdpServer/linkPage/businessService.html',
            controller: 'businessServiceCtrl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'css/thirdpService/linkPage/businessService.css',
                    'js/controllers/link/businessServiceCtrl.js'
                ])
            }
        })
        //创业服务-更多
        .state('app.link', {
            url: '/link?id&grade&pid',
            templateUrl: 'views/thirdpServer/linkPage/entrepreneurServices.html',
            controller: 'entrepreneurCtrl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'css/thirdpService/linkPage/entrepreneurServices.css',
                    'js/controllers/link/entrepreneurServices.js'
                ])
            }
        })
        // 人才推荐
        .state('app.headhunter', {
            url: '/headhunter',
            title: '人才推荐',
            templateUrl: 'views/headhunter.html',
            controller: 'headhunterController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'css/headhunter.css',
                    'js/controllers/headhunter.js'
                ])
            }
        })
        // 项目融资
        .state('app.finance', {
            url: '/finance',
            title: '项目融资',
            templateUrl: 'views/thirdpServer/linkPage/finance.html',
            controller: 'FinanceController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'css/thirdpService/linkPage/finance.css',
                    'js/controllers/finance.js'
                ])
            }
        })
        //技术孵化
        .state('app.hatch', {
            url: '/hatch',
            title: '技术孵化',
            views: {
                "sidebar": {
                    templateUrl: 'views/sidebar.html',
                    controller: 'SidebarCtrl as vm'
                },
                "content": {
                    templateUrl: 'views/content.html',
                    controller: 'ContentCtrl as vm'
                }
            },
            redirectTo: 'app.hatch.pattern'
            /*templateUrl: 'views/hatch.html',
            controller: 'hatchController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'css/hatch.css',
                    'js/controllers/hatch.js',
                    'jqcarouse'
                ])
            }*/
        })
         // 模式介绍
        .state('app.hatch.pattern',{
            url:'/pattern',
            parents:'hatch',
            templateUrl:'views/hatch/pattern.html',
            controller: 'patternController',
            controllerAs: 'vm',
            resolve:{
                loadMyFile: _lazyLoad([
                    'css/hatch/pattern.css',
                    'js/controllers/hatch/patternCtrl.js',
                    'jqcarouse', 'css/thirdpService/submit.css',
                ])
            }
        })
         // 产品特色
        .state('app.hatch.feature',{
            url:'/feature/:id',
            parents:'hatch',
            templateUrl:'views/hatch/feature.html',
            controller: 'featureCtrl',
            controllerAs: 'vm',
            resolve:{
                loadMyFile: _lazyLoad([
                    'css/hatch/feature.css',
                    'js/controllers/hatch/featureCtrl.js'
                ])
            }
        })
        // 过往项目
        .state('app.hatch.project',{
            url:'/item/:type/:id',
            parents:'hatch',
            templateUrl:'views/hatch/project.html',
            controller: 'projectCtrl',
            controllerAs: 'vm',
            resolve:{
                loadMyFile: _lazyLoad([
                    'css/hatch/project.css',
                    'js/controllers/hatch/projectCtrl.js',
                    'jqcarousetwo'

                    // 'css/horizontal.css',
                   /* 'vendor/mislider/css/mislider.css',
                    'vendor/mislider/css/mislider-skin-cameo.css',*/
                    // 'vendor/vm-carousel/jquery.vm-carousel.css'
                    // 'vendor/silder/jquery.bxslider.css',
                    // 'vendor/silder/jquery.bxslider.js'
                    // 'project-carouse'
                    // 'frameimg'
                ])
            }
        })
        //关于我们
        .state('app.about', {
            url: '/about',
            title: '关于我们',
            templateUrl: 'views/about.html',
            controller: 'AboutController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'css/about.css',
                    'js/controllers/about.js'
                ])
            }
        })
        //更多案例
        .state('app.case', {
            url: '/case',
            title: '更多案例',
            templateUrl: 'views/case/case.html',
            controller: '',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                   'css/case/case.css'
                ])
            }
        })

}
