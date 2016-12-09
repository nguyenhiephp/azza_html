(function ($) {
    $(function () {
        var jcarousel = $('.jcarousel');

        jcarousel
                .on('jcarousel:reload jcarousel:create', function () {
                    var carousel = $(this),
                            width = carousel.innerWidth();
                    if (width >= 1170) {
                        width = width / 5;
                    } else if (width >= 970 && width < 1170) {
                        width = width / 4;
                    } else if (width >= 750 && width < 970) {
                        width = width / 3;
                    } 
                    
                    carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
                })
                .jcarousel({
                    wrap: 'circular'
                });

        $('.jcarousel-control-prev')
                .jcarouselControl({
                    target: '-=1'
                });

        $('.jcarousel-control-next')
                .jcarouselControl({
                    target: '+=1'
                });
    });
    
})(jQuery);
