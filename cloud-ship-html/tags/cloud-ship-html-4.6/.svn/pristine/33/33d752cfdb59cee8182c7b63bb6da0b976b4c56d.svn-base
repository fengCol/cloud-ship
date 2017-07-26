app.directive('upload', ['userService', function (userService) {
    return {
        restrict: 'AE',
        scope: {
            ngModel: '=',
            multi: '@'
        },
        require: 'ngModel',
        template: '' +
        '<div ng-click="">' +
        '<img ng-if="" ng-src="{{img}}"/>' +
        '</div>' +
        '<input class="hidden" type="file" id="fileInput" onchange="angular.element(this).scope().uploadFile(this.files);">' +
        '',
        link: function (scope, element, attrs, ctrl) {
            scope.img = scope.ngModel;

            // 是否处于上传中状态
            scope.uploadStatus = false;

            // 点击div触发input:file
            scope.triggerSelect = function () {
                element.children('input[type=file]').trigger('click');
            };

            // 获取上传类型
            var type = attrs.type || 0;

            // 上传
            scope.uploadFile = function (files) {
                var fd = new FormData();
                fd.append("file", files[0]);

                scope.uploadStatus = true;

                userService.uploadFile(type, fd).then(function (res) {
                    scope.img = res.data.url;
                    scope.uploadStatus = false;
                    ctrl.$setViewValue(scope.img);
                });
            };


        },
        controller: function ($scope, $element, $attrs) {

        }
    }
}]);