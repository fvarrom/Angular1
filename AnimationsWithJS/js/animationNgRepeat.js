
myApp.animation('.animationNgRepeat',function () {

    var moveAnimation = function (element, done) {
        jQuery(element).css({ opacity: 0 });
        jQuery(element).animate({opacity: 1}, 3000, done);

        return function (isCancelled) {
            if(isCancelled){
                return element.stop();
            }
        }
    };


   return {
        move   : moveAnimation
   }

});

