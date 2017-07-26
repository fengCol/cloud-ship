app.controller('homepageCtrl', ['$rootScope', '$scope', 'userService',
    function ($rootScope, $scope, userService) {
        var vm = this;

        // userService.getAllMessage().then(function (res){
        //     if (res.data.code==1){
        //         $rootScope.hello=0;
        //         msgList= res.data.data.messageList;
        //         angular.forEach(msgList,function(data,index,array){
        //             if (data.mstage==1){
        //                 $rootScope.hello++;
        //             }
        //             return vm.hello;
        //         })
        //     }
        //     if ($rootScope.hello <=99){
        //         $rootScope.hello = $rootScope.hello
        //     }else{
        //         $rootScope.hello= "99+"
        //     }
        // })
        if($rootScope.informMessage==undefined){
            setTimeout(function () {
                console.log("+++++++++++++++++++++++++++++++++++++++++")
                console.log( $rootScope.informMessage)
                vm.messageNum=$rootScope.informMessage;
            },500)
        }
        else{
            console.log("__________________________________")
            console.log( $rootScope.informMessage)
            vm.messageNum=$rootScope.informMessage;
        }
        // console.log("+++++++++++++++++++++++++++++++++++++++++")
        // console.log( $rootScope.informMessage)
        // vm.messageNum=$rootScope.informMessage;
    }
    ])