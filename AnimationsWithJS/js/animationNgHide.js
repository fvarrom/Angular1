
myApp.animation('.AnimationNgHideJS',function () {
   function animationOpacity(element, done, opacity) {
       jQuery(element).animate({
           opacity: opacity,
           height: ['toggle','swing']
       },300, done);
   }


   var beforeAddClass  = function (element, className, done) {
       animationOpacity(element,done,0);

       return function (isCancelled) {
           if(isCancelled){
               element.stop()
           }
       }
   };

   var removeClass = function (element, className, done) {
     animationOpacity(element,done,1);

     return function (isCancelled) {
         if(isCancelled){
             element.stop()
         }
     }
   };


   return {
        beforeAddClass : beforeAddClass,
        removeClass: removeClass
   }

});

