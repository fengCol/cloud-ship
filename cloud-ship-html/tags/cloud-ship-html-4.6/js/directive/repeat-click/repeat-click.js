/**
 * Created by gaogao on 16/11/12.
 */
app.directive("repeatClick",function($timeout){
    return {
        restrict: 'EA',
        scope:{},
        link:function(scope,ele,attr){
            ele.on("click",function(){
                ele.prop("disabled",true)
                $timeout(function(){
                    ele.prop("disabled",false)
                },1000)
            })
        }
    }
});