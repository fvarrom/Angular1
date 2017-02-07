
var myApp =  angular.module('myApp',['ngAnimate']);

myApp.controller('MyController', function ($scope) {
   $scope.animationClass    = false;
   $scope.animationNgHide   = false;
   $scope.animationNgIf     = false;

    $scope.items = [
            { name: 'David' },
            { name: 'Adailton' },
            { name: 'Claudio' },
            { name: 'Cleomar' },
            { name: 'Filipe' }
        ];

    $scope.ordenarItems  = function () {
        $scope.items.sort(function (a,b) {
            return a[name] < b[name] ? -1 : 1;
        })
    }
});


myApp.animation('.animationClass',function () {

    var addClassAnimation  = function (element, className, done) {

        if(className !== 'animationClass'){
            return false;
        }

        jQuery(element).slideUp(400, done);

        return function (isCancelled) {
            if(isCancelled){
                element.stop();
            }
        }
    };

    var removeClassAnimation = function (element, className, done) {

        if(className !== 'animationClass'){
            return false;
        }

        jQuery(element).slideDown(400, done);

        return function (isCancelled) {
            if(isCancelled){
                element.stop();
            }
        }
    };



    return {
        addClass    :   addClassAnimation,
        removeClass :   removeClassAnimation
    }
});