/**
 * Created by gaogao on 16/7/12.
 */

//所有的发起请求

app.factory('path', function () {
    return {
        //所有合作企业的数目
        allCompany_url: function () {
          return "ajax/a/occupation/count";
        },
        //测试手机号是否可用
        mobile: function (mobile) {
            return "ajax/a/mobile/?mobile=" + mobile;
        },
        //未登录---忘记密码第一步
        checkMobile:function (mobile) {
           return "ajax/a/password/forget?mobile=" + mobile;
        },
        //验证码发送
        sendCode_url: "ajax/a/code/send",

        //注册
        register_url: "ajax/a/user",

        //密码
        userPassword_url: "ajax/a/user",

        //用户登录
        userLogin_url: "ajax/a/login",
        //图形码验证
        graphicsCode_url:function(Captcha){
           return "ajax/a/captcha/verify?inputValue=" + Captcha;
        },
        //获取图形验证码
        getgraphicsCode_url:function(time){
            return "ajax/a/captcha/generate?"+time;
        },
        //注销
        logout_url: "ajax/a/u/logout",

        //忘记密码
        forgetPhone_url: "ajax/a/password/forget",

        //用户查看个人信息     dixing 16/10/10修改
        personalList_url: function () {
            return "ajax/a/u/user"
        },
        //用户修改个人信息
        personalChange_url: function () {
            return "ajax/a/u/change/user"
        },
        //合企入驻
        companyRegister_url: function () {
            return "ajax/a/u/cpy/regist"
                // ?license=" + data.license +"&barcode=" + data.barcode +"&creditCode=" + data.creditCode
        },
        //用户修改密码
         personalChangePWD_url: "ajax/a/u/pwd/change",
        //获取所有消息
        allMessage_url: function () {
            return "ajax/a/u/message/all?size=1000"
        },
        //获取任意信息状态
        messageStage_url: function () {
            return "ajax/a/u/message/Stage"
        },
        //批量删除
        chooseDelete_url: function () {
            return "ajax/a/u/message?ids="
        },
        //批量标为已读
        messageRead_url: function (id) {
            return "ajax/a/u/message?ids=" + id;
        },
        //获取公司信息
        getCompanyDetails: function () {
          return "ajax/a/u/company/detail";
        },
        //更新公司信息
        updateCompany_url: function () {
            return "ajax/a/u/company/change"
        },
        //提供服务
        forServices_url: function (page) {
            return "ajax/a/u/apply/server/list?page="+page
        },
        //申请认证父类接口
        parentModule_url: function () {
            return "ajax/a/child/server/list"
        },
        //申请服务子类
        childModule_url: function (parentId) {
            return "ajax/a/child/server/list?parentId="+parentId
        },
        //点击查看获取数据
        detailsLink_url: function (id) {
            return "ajax/a/u/apply/server/"+id;
        },
        //服务新增
        preserve_url: function () {
            return "ajax/a/u/user/selfproserve"
        },
        //服务申请
        ServiceApply_url: function (status,size) {
            return "ajax/a/u/service/apply/list?status=" + status + '&size=' + size
        },
        //服务申请（默认数据为10条）
        ServiceApply_url2: function (status,page) {
            return "ajax/a/u/service/apply/list?status=" + status+"&page="+page
        },
        getCooperate_url: function () {
            return "ajax/a/u/have/company"
        },


        // orderServices_url: function (data) {
        //     return "ajax/a/u/user/selforder?ostage="+data
        // },
        //图片上传
        upload_url: function () {
            return "ajax//a/u/img/1"
        },

        //个人信息获取
        selfInfo: function () {
            return "/a/u/user/self";
        },

        //我的信息
        getUserMsg: function () {
            return "/a/u/user/self";
        },

        //查询技术孵化公司，即葡萄藤公司
        ptteng_url: function () {
            return "ajax/a/u/company/ptteng"
        },

        //服务类别
        serverType_url: function () {
            return "ajax/a/server/company/list";
        },
        //服务类别子类
        serverNextType_url: function (parentId) {
            return "ajax/a/server/company/list/?id=" + parentId;
        },
        //获取公司列表
        comLists_url: function (servea,serveb) {
            return "ajax/a/u/moduls/user?servea=" + servea + "&serveb=" + serveb;
        },
        //申请服务次数加1
        addCount_url: function (cid,sid) {
            return "ajax/a/u/server/apply?cid=" + cid+"&sid=" + sid;
        },
        //获取天使投资和风险投资
        finance_url: function (tid) {
            return "ajax/a/angle/venture/invest/list?tid="+ tid;
        },
        financed_url: function (fid) {
            return "ajax/a/angle/venture/invest/list?fid="+ fid;
        },
        //获取更多服务
        moreList_url: function (id) {
            return "ajax/a/server/more/list?id=" + id;
        },
        //获取公司详情
        comDetail_url:function (cid,sid) {
            return "ajax/a/server/detail?cid=" + cid + "&sid=" + sid ;
        },
        //获取公司合作等级的状态
        gradeList_url:function (grade, id) {
            return "ajax/a/server/level/list?grade=" + grade + "&id="+id;
        },

        //产品组件
        productComponent: function () {
            return "ajax/a/u/message/all";
        },
        //项目详情
        projectDetail: function () {
            return   "ajax/a/u/message/all";
        },
        // 获取产品类型
        productList_url:function () {
            return "ajax/a/product/search"
        },
        // 获取产品组件列表
        productComponent_url:function (id) {
            return "ajax/a/component/"+id;
        },
        // 获取过往项目名称
        projectName_url:function (type) {
            return " ajax/a/project/type/"+type;
        },
        // 获取过往项目详情
        projectDetails_url:function (id) {
            return "ajax/a/project/id/"+id;
        }
    }
});