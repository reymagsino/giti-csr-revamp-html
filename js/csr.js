$( document ).ready(function() {

    // Projects Header Carousel
    $('.partners-logo-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    // Projects Main Carousel
    $('.partners-carousel').owlCarousel({
        center: true,
        items:5,
        loop:true,
        margin:10,
        // autoplay:true,
        // autoplayTimeout:1000,
        // autoplayHoverPause:true,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    $('.partners-carousel').on('initialized.owl.carousel translate.owl.carousel', function(e){
        idx = e.item.index;
        $('.partner-item.center').removeClass('center');
        $('.partner-item.sides').removeClass('sides');
        $('.partner-item').eq(idx).addClass('center');
        $('.partner-item').eq(idx-1).addClass('sides');
        $('.partner-item').eq(idx+1).addClass('sides');
    });
});