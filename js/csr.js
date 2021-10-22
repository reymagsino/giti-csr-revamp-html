$( document ).ready(function() {

    // Projects Header Carousel
    $('.partners-logo-carousel').owlCarousel({
        loop:true,
        margin:10,
        dots: false,
        nav:false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    });

    // Projects Main Carousel
    $('.partners-carousel').owlCarousel({
        center: true,
        items:5,
        loop:true,
        margin:50,
        dots: false,
        nav:true,
        navText : ['<img src="images/icons/general/left-arrow-icon.svg">','<img src="images/icons/general/right-arrow-icon.svg">'],
        mouseDrag:false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:1
            },
            600:{
                items:2
            },
            700:{
                items:2
            },
            800:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });

    // Projects Main Carousel Effect
    $('.partners-carousel').on('initialized.owl.carousel translate.owl.carousel', function(e){
        idx = e.item.index;
        $('.partner-item.center').removeClass('center');
        $('.partner-item.sides').removeClass('sides');
        $('.partner-item').eq(idx).addClass('center');
        $('.partner-item').eq(idx-1).addClass('sides');
        $('.partner-item').eq(idx+1).addClass('sides');
    });

    // Border Bottom Green Swipe Up
    $(".partners-carousel .partner-item").hover(
        function () {
            $(this).find('.border-bottom-green').addClass("swipe-up");
        },
        function () {
            $(this).find('.border-bottom-green').removeClass("swipe-up");
        }
    );
});