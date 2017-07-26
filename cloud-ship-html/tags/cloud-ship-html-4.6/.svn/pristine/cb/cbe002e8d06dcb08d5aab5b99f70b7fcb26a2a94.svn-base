if (typeof $ === 'undefined') {
    throw new Error('请先加载jQuery');
}
var app = angular.module('cloud', [
    'ngAnimate',
    //'ngStorage',
    'mgcrea.ngStrap',
    'ngCookies',
    'oc.lazyLoad',
    'angular-loading-bar',
    'ui.router',
    'ui.bootstrap',
    'ngMessages',
    // 'ngSanitize'
    //'ui.utils'
]);

app.config(httpConfig)
    .config(lazyLoadConfig)
    .config(loadingBar)
    .config(registerComponents)
    .run(['$rootScope', '$modal', '$state', '$stateParams', '$window', '$cookies',
        function ($rootScope, $modal, $state, $stateParams, $window, $cookies) {


            $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                //默认分页参数
                if (toParams.page != undefined) {
                    toParams.page = toParams.page || 1;
                }
                if (toParams.size != undefined) {
                    toParams.size = toParams.size || 10;
                }
            });
            $rootScope.$on('$viewContentLoading', function (event) {

            });
            //判断下是否登录啊
            $rootScope.$on('$viewContentLoaded', function (event) {
                //切换页面 mao点在最上面
                //$(window).scrollTop(0);
                //
                //if(!(!!$cookies.fsphometoken) && ($state.current.needLogin===true || $state.includes('app.account'))){
                //    setTimeout(function(){
                //        $state.go('app.page.login')
                //    },100)
                //}
            });


            // 按组合键时新页面打开功能
            $rootScope.navigate = function ($event, to, params) {
                if ($event.metaKey) {
                    var url = $state.href(to, params, {absolute: true});
                    window.open(url, '_blank');

                } else {
                    $state.go(to, params);
                }
            };


            $rootScope.alert = function (content, okFn) {
                var modal = $modal.open({
                    //html: true,
                    show: false,
                    size:'sm',
                    templateUrl: '/views/template/cloud-ship-config.html',
                    controller: function ($scope) {
                        $scope.content = content;
                        $scope.ok = function () {
                            typeof okFn == 'function' && okFn();
                        };
                        $scope.close = function () {
                            modal.close()
                        }
                    }

                });
            };

            $rootScope.modelAlert = function (content) {
                var modal = $modal.open({
                    templateUrl: '/views/template/rootAlert.html',
                    show: false,
                    size:"sm",
                    controller:function ($scope) {
                        $scope.content = content;
                        $scope.closeTips = function () {
                            modal.close();
                        }
                        $scope.getTrue = function () {
                            modal.close();
                            $state.go("app.user.company",{},{reload:true})
                        }
                    }
                })
            }

            $rootScope.gradeContent = function (grade) {
                if(grade == 1) return "忠实可靠，服务优质，以最实惠的价格，获取最专业的服务";
                if(grade == 2) return "贰贰贰贰，贰贰贰贰，贰贰贰贰贰贰贰，贰贰贰贰贰贰贰贰";
                if(grade == 3) return  "叁叁叁叁，叁叁叁叁，叁叁叁叁叁叁叁，叁叁叁叁叁叁叁叁";

            };



            // 全局配置
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
            $rootScope.$storage = $window.localStorage;
        }])


;

// Set lazy load module
function lazyLoadConfig($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        modules: [
            {
                name: 'angularFileUpload',
                files: [
                    'vendor/angular-file-upload/angular-file-upload.min.js',
                    'js/directives/ptteng-uploadThumb/ptteng-uploadThumb-0.0.1.js'
                ]
            }, {
                name: 'datepicker',
                files: [
                    'js/directives/datepicker/datepicker.css',
                    'js/directives/datepicker/datepicker.js'
                ]
            }, {
                name: 'dndLists',
                files: [
                    'vendor/angular-drag-and-drop-lists/angular-drag-and-drop-lists.js'
                ]
            },
            {
                name: 'promiseButton',
                files: [
                    '/vendor/promise-button/directive.css',
                    '/vendor/promise-button/directive.js'
                ]
            },
            {
                name: 'numbericInput',
                files: [
                    '/vendor/numberic-input/directive.js'
                ]
            },
            {
                name: 'rzModule',
                files: [
                    '/vendor/angularjs-slider/rzslider.min.js',
                    '/vendor/angularjs-slider/rzslider.min.css'
                ]
            },
            {
                name: 'jqcarouse',
                files: [
                    'js/directive/jqbootstrap-carouse/jqbootstrap-carouse.css',
                    'js/directive/jqbootstrap-carouse/jqbootstrap-carouse.js'
                ]
            },
            {
                name: 'jqcarousetwo',
                files: [
                    'js/directive/jqbootstrap-carouse2/jqbootstrap-carousetwo.css',
                    'js/directive/jqbootstrap-carouse2/jqbootstrap-carousetwo.js'
                ]
            },
            /*{
                name: 'project-carouse',
                files: [
                    'vendor/mislider/js/mislider.js',
                    'js/directive/project-carouse/project-carouse.js',
                    'vendor/mislider/css/mislider.css',
                    'vendor/mislider/css/mislider-skin-cameo.css'
                ]
            },*/
            /*{
                name: 'frameimg',
                files: [
                    'js/directive/frameimg/frameimg.css',
                    'js/directive/frameimg/frameimg.js'
                ]
            }*/
        ]
    });
}

// Loader
function loadingBar(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeBar = true;
    cfpLoadingBarProvider.includeSpinner = false;
    cfpLoadingBarProvider.latencyThreshold = 300;
}


function httpConfig($httpProvider) {
    // Set x-www-form-urlencoded Content-Type
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    $httpProvider.defaults.headers.patch['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';


    // Set up global transformRequest function
    $httpProvider.defaults.transformRequest = function (data) {
        if (data === undefined) {
            return data;
        }
        return $.param(data);
    };


}

function registerComponents($controllerProvider, $compileProvider, $filterProvider, $provide) {
    'use strict';
    // 将Angular的组件，指令等等的注册接口挂到app对象上，可以在应用程序启动之后任然可以添加功能
    app.controller = $controllerProvider.register;
    app.directive = $compileProvider.directive;
    app.filter = $filterProvider.register;
    app.factory = $provide.factory;
    app.service = $provide.service;
    app.constant = $provide.constant;
    app.value = $provide.value;
}

//轮播图配置
function carouselConfig(time) {
    $('.carousel').carousel({
        interval: time // in milliseconds
    });
}