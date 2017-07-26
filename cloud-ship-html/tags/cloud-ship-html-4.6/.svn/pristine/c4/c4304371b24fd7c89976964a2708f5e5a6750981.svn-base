/**
 * Created by gaogao on 16/7/14.
 */
app.controller('userMessageController', ['$rootScope', '$scope', 'userService', function ($rootScope, $scope, userService) {
    var vm = this;
    userService.getUserDetails().then(function (res) {
        // console.log(res);
        vm.data = res.data.data;
        // console.log(vm.data);
    })
    
    
    var allMessageGet = function () {
        userService.getAllMessage().then(function (res) {
            // console.log(res);
                $scope.messages = res.data.data.messageList;
            // $rootScope.informMessage=[];
            // console.log($scope.messages);
                vm.total = res.data.totalMessage;
                ;
                angular.forEach($scope.messages, function (value,index) {  //为所有message添加check=false属性
                value.check = false;
                // if(value.mstage===1){
                //     $rootScope.informMessage.push(value.mstage)
                // }

            });
            // return $rootScope.informMessage;
            // console.log( $rootScope.informMessage);
                //多选与全选
                $scope.selected = [];
                var updateSelected = function (action, id) {
                    if (action == 'add' & $scope.selected.indexOf(id) == -1) $scope.selected.push(id);
                    if (action == 'remove' && $scope.selected.indexOf(id) != -1) $scope.selected.splice($scope.selected.indexOf(id), 1);
                    // $rootScope.informMessage--;
                };
                $scope.updateSelection = function ($event, id) {
                    var checkbox = $event.target;
                    var action = (checkbox.checked ? 'add' : 'remove');
                    updateSelected(action, id);


                };
                $scope.selectAll = function ($event) {
                    var checkbox = $event.target;
                    var action = (checkbox.checked ? 'add' : 'remove');
                    for (var i = 0; i < $scope.messages.length; i++) {
                        var entity = $scope.messages[i];
                        updateSelected(action, entity.id);
                    }
                    // $rootScope.informMessage=0;
                };
                $scope.getSelectedClass = function (entity) {
                    return $scope.isSelected(entity.id) ? 'selected' : '';
                };
                $scope.isSelected = function (id) {
                    return $scope.selected.indexOf(id) >= 0;
                };
                //something extra I couldn't resist adding :)
                $scope.isSelectedAll = function () {
                    return $scope.selected.length === $scope.messages.length;
                };


        });
    };

    allMessageGet();

    //点击变为已读样式
    vm.showMessage = function (id,currentIndex, value) {
        var lastId = '';
        if ( value.mstage!=2){
            $rootScope.informMessage--;
        }
        value.mstage = 2;
        angular.forEach($scope.messages, function (item) {
            // console.log($scope.messages);
            if(id == item.id) {
                item.check = true;
                lastId = item.id
            } else if(lastId != item.id){
                item.check = false;
            }
        });

        userService.messageRead(value.id);
        // console.log(value);
    };

    vm.hadRead = function () {
        userService.messageRead($scope.selected).then(function () {
                allMessageGet();
        })
        $rootScope.informMessage=0;
    };
    vm.deleteMessages = function () {
        userService.deleteMessage($scope.selected).then(function (res) {
            if (res.data.code === 0) {
                allMessageGet();
            } else {
                $rootScope.alert(res.data.code);
            }
        })
    };

}]);
setTimeout(function () {
    $('.input').on('click',function (even) {
        even.stopPropagation();
    })
},2000)
