/**
 * Created by gaogao on 16/11/12.
 */
app.controller("verifyFin",function($scope,$timeout,$state){

    $scope.time=5;

    function timeOut(){
        $timeout(function(){
            if($scope.time>1){
                $scope.time--;
                timeOut()
            }
            else{
                $state.go("app.login",{loginMod:1})
            }
        },1000)

    }
    timeOut()


});