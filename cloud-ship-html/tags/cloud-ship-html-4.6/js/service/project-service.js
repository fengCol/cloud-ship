app
//登录注册
    .factory('loginService', function ($http, path) {
        return {
            //测试手机号是否可可用
            mobile: function (mobile) {
                return $http.get(path.mobile(mobile));
            },
            //未登录---忘记密码第一步
            checkMobile: function (mobile) {
                return $http.put(path.checkMobile(mobile));
            },

            //密码
            password: function (params) {
                return $http.post(path.userPassword_url, params);
            },

            //验证码发送
            sendCode: function (params) {
                return $http.post(path.sendCode_url, params);
            },

            //注册
            register: function (params) {
                return $http.post(path.register_url, params);
            },
            //忘记密码---之重新输入修改
            forgetPassword: function (params) {
              return $http.put(path.forgetPhone_url, params)
            },

            //登录
            userLogin: function (params) {
                return $http.post(path.userLogin_url, params)
            },
            //验证图形码
            graphicsCode:function (Captcha){
                return $http.get(path.graphicsCode_url(Captcha))
            },
            //获取图形码
            getGraphics:function(time) {
                // $http({
                //     method: 'GET',
                //     url: path.getgraphicsCode_url(time),
                //     headers: {
                //         'Type':'text/image',
                //         'Content-Type':'image/gif',
                //         'Accept':'image/webp,image/*,*/*;q=0.8'
                //     },
                // })
                return $http.get(path.getgraphicsCode_url(time))
            },
            //注销
            logout: function (params) {
                return $http.post(path.logout_url, params);
            },
            //忘记密码
            forgetPhone: function (params) {
                return $http.put(path.forgetPhone_url, params);
            },
            //找回密码短信
            verifySendCode: function (params) {
                return $http.post(path.sendCode_url, params);
            }
            //找回密码之相应参数传递

        }
    });

//个人信息
app.factory('userService', function ($http, path) {
    return {
        //用户个人信息
        getUserDetails: function () {
            return $http.get(path.personalList_url())
        },
        //修改密码
        modifyPWD: function (params) {
            return $http.put(path.personalChangePWD_url,params);
        },
        //编辑个人信息
        personalChange: function (data) {
            return $http.put(path.personalChange_url(), data)
        },
        //合企入驻
        companyRegister: function (data) {
            return $http.put(path.companyRegister_url(), data)
        },
        //获取所有信息
        getAllMessage: function (params) {
            return $http.get(path.allMessage_url(),params)
        },
        //获取任意信息状态
        getMessageStage: function (params) {
            return $http.get(path.messageStage_url() + params)
        },
        //批量删除
        deleteMessage: function (params) {
            return $http.delete(path.chooseDelete_url() + params)
        },
        //批量标为已读
        messageRead: function (id) {
            return $http.put(path.messageRead_url(id))
        },
        //获取公司信息
        getCompanyDetails: function () {
          return $http.get(path.getCompanyDetails())
        },
        //更新公司信息
        updateCompany: function (data) {
            return $http.post(path.updateCompany_url(), data)
        },
        //提供服务
        forServices: function (page) {
            return $http.get(path.forServices_url(page))
        },
        //服务申请
        orderServices: function (status,size) {
           return $http.get(path.ServiceApply_url(status,size))
        },
        //服务申请(默认数据为10条)
        orderServices2: function (status,page) {
            return $http.get(path.ServiceApply_url2(status,page))
        },
        //验证是否有公司，进而进行合作入驻操作
        getCooperate: function () {
            return $http.get(path.getCooperate_url())
        },


        // orderServices: function (data) {
        //     return $http.get(path.orderServices_url(data))
        // },

        //申请认证
        postServicesAdd: function (params) {
            return $http.put(path.preserve_url(), params);
        },
        //申請认证父类接口
        parentService: function () {
            return $http.get(path.parentModule_url());
        },
        //服务类别子类
        childService: function (parentId) {
            return $http.get(path.childModule_url(parentId));
        },
        //获取联动数据的详细信息
        getdetailsLink: function (id) {
          return $http.get(path.detailsLink_url(id))
        },

        //图片上传
        uploadImg: function () {
            return $http.post(path.upload_url());
        }
    }

});

//第三方服务
app.factory('thirdpSeverSevice', function ($http, path) {
    return {
        //首页 合作总数
        getAllCompany:function () {
            return $http.get(path.allCompany_url())
        },
        //服务类别
        getBussenissList: function () {
            return $http.get(path.serverType_url());
        },
        //服务类别子类
        getBussenissdList: function (parentId) {
            return $http.get(path.serverNextType_url(parentId));
        },
        // serverType: function (groups) {
        //     return $http.get(path.serverType_url(groups))
        // },
        //服务子类别
        getServiceList: function (data) {
            return $http.get(path.serverType_url(),{params:data})
        },
        //获取公司列表
        comLists: function (servea,serveb) {
            return $http.get(path.comLists_url(servea,serveb))
        },
        //获取天使和风险投资公司数据
        getfinanceCompany: function (tid) {
          return  $http.get(path.finance_url(tid))
        },
        getfinancedCompany: function (fid) {
            return  $http.get(path.financed_url(fid))
        },
        //获取更多的公司的数据
        getMoreList:function (id) {
          return $http.get(path.moreList_url(id))
        },

        //根据等级获取相应的数据
        getGradeList: function (grade,id) {
          return $http.get(path.gradeList_url(grade,id))
        },
        //获取相应的公司详情
        getComDetil:function (cid,sid) {
          return $http.get(path.comDetail_url(cid,sid))
        },
        //申请服务次数加1
        addCount: function (cid,sid) {
            return $http.post(path.addCount_url(cid,sid))
        },
        //技术孵化公司-即葡萄藤
        getPtteng: function () {
            return $http.get(path.ptteng_url())
        }
    }
});

//新增服务

// 技术孵化
app.factory('hatchService',['$http','path',function ($http,path) {
    return{
        // 获取产品类型
        getProductList:function () {
            return $http.get(path.productList_url())
            // return $http.get("js/json/hatch/ProductList.json")
        },
        // 获取组件列表
        getComponentList:function (params) {
            // return $http.get("js/json/hatch/ComponentList.json");
            return $http.get(path.productComponent_url(params))
        },
        // 获取过往项目名称
        getProjectName:function (params) {
            // return $http.get("js/json/hatch/projectName.json")
            return $http.get(path.projectName_url(params))
        },
        // 获取过往项目详情
        getProjectDetails:function (params) {
            return $http.get(path.projectDetails_url(params))
        }
    }
}]);
//全局变量
app.factory('managerService', ['$http', '$state', 'path', function ($http, $state, path) {

    return {
        //全局变量
        saveSelfDetail: function (manager) {
            localStorage["self"] = JSON.stringify(manager);
        },
        addSelfDetail: function (json) {
            var oldJson = localStorage["self"];
            if (oldJson == undefined) {
                localStorage["self"] = JSON.stringify(json);
            } else {
                var newJson = angular.extend(JSON.parse(oldJson), json);
                localStorage["self"] = JSON.stringify(newJson);

            }
        },
        getSelfDetail: function () {

            if (!localStorage["self"] || localStorage["self"] == 'undefined') {
                return undefined;
            } else {

                return JSON.parse(localStorage["self"]);
            }

        },
        clearSelfDetail: function () {
            localStorage.removeItem("self");
        },

        //草稿
        saveDaily: function (manager) {
            localStorage["daily"] = JSON.stringify(manager);
        },

        getDaily: function () {

            if (localStorage["daily"] == undefined) {
                return undefined;
            } else {

                return JSON.parse(localStorage["daily"]);
            }

        },
        clearDaily: function () {
            localStorage.removeItem("daily");
        }
    }
}]);









