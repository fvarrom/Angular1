myApp.directive('myDirectiveAddRemove',function ($animate) {
    return {
        link: function ($scope, $element, $attrs) {
            var isActive = true;
            
            $element.on('click',function () {
                isActive =  !isActive;

                if(isActive){
                    $animate.addClass($element,'customClick')
                }else{
                    $animate.removeClass($element,'customClick');
                }

                $scope.$apply();
            })
        }
    }
});
