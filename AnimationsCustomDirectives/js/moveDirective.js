myApp.directive('moveDirective',function ($animate) {

    return{
        link: function ($scope, $element, $attrs) {
            var elements = $element.children();
            var count = 0;

            $element.on('click',function () {
                count++;

                if (count % 3 == 1) {
                    $animate.move(angular.element(elements[2]), $element);

                } else if(count % 3 == 2){

                    $animate.move(angular.element(elements[1]),$element);

                }else{

                    $animate.move(angular.element(elements[0]), $element);
                }

                $scope.$apply();

            });

        }
    }
});
