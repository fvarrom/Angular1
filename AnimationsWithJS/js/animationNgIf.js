
myApp.animation('.AnimationNgIfJS',function () {
   function animationOpacity(element, done, opacity) {
       jQuery(element).animate({
           opacity: opacity
       },300, done);
   }


   var enterAnimation  = function (element, done) {
       if(!Modernizr.csstransitions){
           jQuery(element).css({ opacity: 0 });
           animationOpacity(element,done,1);

           return function (isCancelled) {
               if(isCancelled){
                   element.stop()
               }
           }
       }else{
           done();
       }
   };

   var leaveAnimation = function (element , done) {

       if(!Modernizr.csstransitions){
            animationOpacity(element,done,0);

             return function (isCancelled) {
                 if(isCancelled){
                     element.stop()
                 }
             }
       }else{
           done();
       }
   };


   return {
        enter   : enterAnimation,
        leave   : leaveAnimation
   }

});

