app.factory('uploadFileService', function ($http) {
    return {
        uploadFile: function (formData) {
            return $http.post('ajax/a/u/img/3', formData, {
                withCredentials: true,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            })
        }
    }
});
app.directive('simpleUpload', function (uploadFileService) {
        return {
            restrict: 'AE',
            scope: true,
            template: '<div class="uploader-box">' +
            '<div class="uploader-box-img" ng-if="img" ng-style="{\'background-image\':\'url(\' + img + \')\'}"></div>' +
            '<span ng-if="uploadStatus">上传中...</span>' +
            '<p ng-click="triggerSelect()">点击上传图片</p>' +
            '</div>' +
            '<input class="hidden" type="file" id="headerInput" onchange="angular.element(this).scope().uploadFile(this.files);">',
            link: function (scope, element, attrs) {

                //scope.img = scope.$parent.vm.userData.thumb || '';
                // 是否处于上传中状态
                scope.uploadStatus = false;

                // 点击div触发input:file
                scope.triggerSelect = function () {
                    element.children('input[type=file]').trigger('click');
                };

                // 上传
                scope.uploadFile = function (files) {
                    var fd = new FormData();
                    fd.append("file", files[0]);

                    scope.uploadStatus = true;

                    uploadFileService.uploadFile(fd).then(function (res) {
                        scope.img = res.data.data.url;
                        scope.$parent.vm.person.head = scope.img;
                        scope.uploadStatus = false;
                    });
                };
            }
        }
    })
    //公司logo
    .directive('simpleUploadBox', function (uploadFileService) {
        return {
            restrict: 'AE',
            scope: true,
            template: '<div class="uploader-box">' +
            '<img ng-if="img" ng-src="{{img}}" />' +
            '<span ng-if="uploadStatus">上传中...</span>' +
            '<p ng-click="triggerSelect()">点击上传图片</p>' +
            '</div>' +
            '<input class="hidden" type="file" id="logoInput" onchange="angular.element(this).scope().uploadFile(this.files);">',
            link: function (scope, element, attrs) {

                scope.img = '';
                // 是否处于上传中状态
                scope.uploadStatus = false;

                // 点击div触发input:file
                scope.triggerSelect = function () {
                    element.children('input[type=file]').trigger('click');
                };

                console.log(scope.$parent);
                // 上传
                scope.uploadFile = function (files) {
                    var fd = new FormData();
                    fd.append("file", files[0]);

                    scope.uploadStatus = true;

                    uploadFileService.uploadFile(fd).then(function (res) {
                        console.log(res);
                        scope.img = res.data.data.url;
                        scope.$parent.vm.company.logo = scope.img;
                        scope.uploadStatus = false;
                    });
                };
            }
        }
    })
    //公司证书
    .directive('simpleUploadCom', function (uploadFileService) {
        return {
            restrict: 'AE',
            scope: true,
            template: '<div class="uploader-box" ng-class="bgRed:uploadStatus">' +
            '<div class="uploader-box-img" ng-if="img" ng-style="{\'background-image\':\'url(\' + img + \')\'}"></div>' +
            '<span ng-if="uploadStatus">上传中...</span>' +
            '<p ng-click="triggerSelect()" style="color: black;font-size: 14px">点击上传图片</p>' +
            '</div>' +
            '<input class="hidden" type="file" id="headerInput" onchange="angular.element(this).scope().uploadFile(this.files);">',
            link: function (scope, element, attrs) {

                //scope.img = scope.$parent.vm.userData.thumb || '';
                // 是否处于上传中状态
                scope.uploadStatus = false;

                // 点击div触发input:file
                scope.triggerSelect = function () {
                    element.children('input[type=file]').trigger('click');
                };

                // 上传
                scope.uploadFile = function (files) {
                    var fd = new FormData();
                    fd.append("file", files[0]);

                    scope.uploadStatus = true;

                    uploadFileService.uploadFile(fd).then(function (res) {
                        scope.img = res.data.data.url;
                        scope.$parent.vm.company.license = scope.img;
                        scope.uploadStatus = false;
                    });
                };
            }
        }
    })
    //公司宣传
    .directive('simpleUploadDiv', function (uploadFileService) {
        return {
            restrict: 'AE',
            scope: true,
            template: '<div class="uploader-div">' +
            '<img ng-if="img" ng-src="{{img}}" />' +
            '<span ng-if="uploadStatus">上传中...</span>' +
            '<p ng-click="triggerSelect()">点击上传图片</p>' +
            '</div>' +
            '<input class="hidden" type="file" id="propagandaInput" onchange="angular.element(this).scope().uploadFile(this.files);">',
            link: function (scope, element, attrs) {

                scope.img = '';
                // 是否处于上传中状态
                scope.uploadStatus = false;

                // 点击div触发input:file
                scope.triggerSelect = function () {
                    element.children('input[type=file]').trigger('click');
                };

                console.log(scope.$parent);
                // 上传
                scope.uploadFile = function (files) {
                    var fd = new FormData();
                    fd.append("file", files[0]);

                    scope.uploadStatus = true;

                    uploadFileService.uploadFile(fd).then(function (res) {
                        scope.img = res.data.data.url;
                        scope.$parent.vm.company.advertising = scope.img;
                        scope.uploadStatus = false;
                    });
                };
            }
        }
    });
