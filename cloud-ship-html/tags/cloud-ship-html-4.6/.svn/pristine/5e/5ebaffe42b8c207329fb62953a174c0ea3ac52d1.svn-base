/**
 * Created by Administrator on 2017/4/21.
 */
app.directive('project-carouse',function () {
    return{
        restrict:'EC',
        // template : '<p>Hello Angular</p>',
        templateUrl:'js/directive/project-carouse/project-carouse.html',
        replace:true,
        scope: {},
        link: function (scope, element, attrs) {
            jQuery(function ($) {
                var slider = $('.mis-stage').miSlider({
                    //  The height of the stage in px. Options: false or positive integer. false = height is calculated using maximum slide heights. Default: false
                    stageHeight: 380,
                    //  Number of slides visible at one time. Options: false or positive integer. false = Fit as many as possible.  Default: 1
                    slidesOnStage: false,
                    //  The location of the current slide on the stage. Options: 'left', 'right', 'center'. Defualt: 'left'
                    slidePosition: 'center',
                    //  The slide to start on. Options: 'beg', 'mid', 'end' or slide number starting at 1 - '1','2','3', etc. Defualt: 'beg'
                    slideStart: 'beg',
                    //  The relative percentage scaling factor of the current slide - other slides are scaled down. Options: positive number 100 or higher. 100 = No scaling. Defualt: 100
                    slideScaling: 150,
                    //  The vertical offset of the slide center as a percentage of slide height. Options:  positive or negative number. Neg value = up. Pos value = down. 0 = No offset. Default: 0
                    offsetV: -5,
                    //  Center slide contents vertically - Boolean. Default: false
                    centerV: true,
                    //  Opacity of the prev and next button navigation when not transitioning. Options: Number between 0 and 1. 0 (transparent) - 1 (opaque). Default: .5
                    navButtonsOpacity: 1
                });
            });
        }
    }
});