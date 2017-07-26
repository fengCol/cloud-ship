/**
 * Created by Administrator on 2017/4/17.
 */

'use strict';

angular.module('cloud')
    .filter('to_trusted', function ($sce) {
        return function (text) {
            return $sce.trustAsHtml(text);
        }
    });