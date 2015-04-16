/**
 * Created by colin on 4/15/15.
 */
(function(){

    angular.module('app').directive('cwFade', cwFade);

    cwFade.$inject = [];

    function cwFade(){
        return {
                link:link
            };


        function link(scope, element){

            $(window).scroll(function(){
                   if(isVisible(element)){
                        element.removeClass('partial');
                    }
                    else{
                        element.addClass('partial');
                    }
            });

            function isVisible(element)
            {
                var windowBottom = $(window).scrollTop() + $(window).height();
                var elementBottom = $(element).offset().top + $(element).height();

                return (((elementBottom - ($(element).height() *.5)) <= windowBottom) && ($(element).offset().top >= $(window).scrollTop()));
            }

        }
    }

})();