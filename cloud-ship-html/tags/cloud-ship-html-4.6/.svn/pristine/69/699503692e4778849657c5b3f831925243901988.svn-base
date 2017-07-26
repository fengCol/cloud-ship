/**
 * Created by Administrator on 2017/4/2.
 */
app.controller('projectCtrl', ['$window','$rootScope','$timeout', '$scope', '$state', '$filter', '$sce', 'hatchService', function($window,$rootScope, $timeout,$scope, $state, $filter, $sce, hatchService) {
  var vm = this;
  vm.type = $state.params.type;
  vm.params = $state.params;
  vm.img = true;
    vm.bol = true
  // $scope.myInterval = 4000;
  vm.slideBol = true;
  window.onresize=function () {
    if(window.innerWidth < 1123){
      vm.slideBol =false
    }else {
      vm.slideBol =true
    }
    console.log(window.innerWidth)
    console.log(window.innerWidth < 1123)
  }
  var slides = $scope.slides = [];
  var currIndex = 0;
  // var watch = vm.$watch('type',function (newVal, oldVal) {
  //     $state.params.id = "";
  // });
  // 获取过往项目名称
  hatchService.getProjectName(vm.type).then(function(res) {
    if (res.data.code == 0) {
      vm.projectName = res.data.data;
      vm.id = $state.params.id || vm.projectName[0].id;
      if (vm.id) {
        getProjectDetails();
      }
    } else {
      $rootScope.alert(res.data.message)
    }
  });


  // 获取过往项目详情
  function getProjectDetails() {
    hatchService.getProjectDetails(vm.id).then(function(res) {
      if (res.data.code == 0) {
        vm.projectDetil = res.data.data;
        vm.androidUrl = vm.projectDetil.androidUrl;
        vm.iosUrl = vm.projectDetil.iosUrl;
        vm.frameImg = vm.projectDetil.frameImg;
        if (vm.frameImg != "") {
          vm.banner = vm.frameImg.split(";");
            if(vm.projectDetil.category == 5){
                // 项目为web项目时，每一张图片一个数组
                vm.bol = false;
                vm.imgs = [];
                for(i=0;i<vm.banner.length;i=i+1){
                    var arr = [];
                    arr = vm.banner.slice(i,i+1);
                    vm.imgs.push(arr)
                }
            } else{
                // 项目为app项目或者h5项目时，每三张图片一个数组
                vm.imgs = [];
                for(i=0;i<vm.banner.length;i=i+3){
                    var arr = [];
                    arr = vm.banner.slice(i,i+3);
                    vm.imgs.push(arr)
                }
            }
            for (var i = 0; i < (vm.banner).length; i++) {
            slides.push({
              image: vm.banner[i],
              id: currIndex++
            });
          }
          console.log(slides)
        }
      } else {
        $rootScope.alert(res.data.message)
      }
    });
    vm.getDetil = function(id) {
      vm.id = id;
      $state.go(".", {
        id: vm.id
      }, {
        reload: true
      })
    }
  }

  /*setTimeout(function() {
    $(function() {

      $.fn.sliderTV.defaults.bullets.canShow = false; // 动画方向：配置幻灯片的动画方向。默认幻灯片是水平样式，你可以将其配置为垂直样式的幻灯片，可用值有true和false

      // 插件初始化
      $('#sliderTV').sliderTV();

      // 幻灯片跳转
      $('#sliderTV').trigger('move:jump', {
        to: 1,
        canAnimate: true
      });

      // 配置是否显示幻灯片的前后导航按钮。
      $('.sliderTV__next').click(function() {
        // 点击下一张
        $('#sliderTV').trigger('move:next');
      });
      $('.sliderTV__prev').click(function() {
        // 点击上一张
        $('#sliderTV').trigger('move:prev');
      });

      $('#help__input').change(function(event) {
        // slide to a specific item, useful to slide the carousel programmatically
        $('#sliderTV').trigger('move:jump', {
          to: parseInt(event.target.value)
        });
      });

      //控制台开始加载和加载结束
      $('#sliderTV').on('animation:start', function() {
        console.clear();
        console.log('sliderTV animation has started');
      });
      $('#sliderTV').on('animation:end', function() {
        // console.clear();
        console.log('sliderTV animation has finished');
      });
    });
  }, 2000);*/




}]);
