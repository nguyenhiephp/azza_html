
$(document).ready(function () {
    $('.bxslider').bxSlider();

    function showSearchBoxOnScroll(e) {
        var currentPos = $(document).scrollTop();
        var currentContentPos = $('.menufix-point').offset().top;
        if (currentPos >= currentContentPos) {
            $('.header').addClass('affix');
            if ($('.mega-nav').hasClass('show')) {
                $('.mega-nav').removeClass('show').addClass('hide');
            }
            jQuery('.mega-nav').addClass('hide');
        } else {
            $('.header').removeClass('affix');
            if ($('.mega-nav').hasClass('hide') && $('.home-page').lenght > 0) {
                $('.mega-nav').removeClass('hide').addClass('show');
            }
        }
    }


    $('body').bind('mousewheel', showSearchBoxOnScroll);
    $('body').bind('scroll', showSearchBoxOnScroll);
    $('body').bind('touchmove', showSearchBoxOnScroll);

    $('.title-menu').click(function () {
        if ($('.mega-nav').hasClass('hide')) {
            $('.mega-nav').removeClass('hide').addClass('show');
        } else if ($('.mega-nav').hasClass('show')) {
            $('.mega-nav').removeClass('show').addClass('hide');
        }
    });

    /* Left menu */
    $('.block-slidebar').html($('.mobile-sidebar').html());
    $('.mobile-sidebar').remove();
    $('.sidebar').click(function () {
        if ($('body').hasClass('show-menu')) {
            $('body').removeClass('show-menu');
        } else {
            $('body').prepend('<div class="overlay"></div>');
            $('body').addClass('show-menu');
        }
    });

    $('.close-menu').click(function () {
        if ($('body').hasClass('show-menu')) {
            $('body').removeClass('show-menu');
            $('.overlay').remove();
        } else {
            $('body').addClass('show-menu');
        }
    });

    $('.block-slidebar ul li a').click(function () {
        if ($(this).hasClass('collapse-on')) {
            $(this).removeClass('collapse-on');
            $(this).next().removeClass('in');
        } else {
            $('.block-slidebar ul li.parent a').each(function () {
                $(this).removeClass('collapse-on');
                $(this).next().removeClass('in');
            });
            $(this).addClass('collapse-on');
            $(this).next().addClass('in');
        }
    });

    $('#vt_menu .title-menu').click(function () {
        if ($(this).find('ul.mega-nav').hasClass('in')) {
            $(this).find('ul.mega-nav').removeClass('in');
        } else {
            $(this).find('ul.mega-nav').addClass('in');
        }
    });

    $('.tab-accordion').click(function () {
        if ($(this).hasClass('accordion-open')) {
            $(this).removeClass('accordion-open').addClass('accordion-close');
            $(this).next().addClass('hide').removeClass('show');
        } else {
            $(this).removeClass('accordion-close').addClass('accordion-open');
            $(this).next().addClass('show').removeClass('hide');
        }
    });
});



