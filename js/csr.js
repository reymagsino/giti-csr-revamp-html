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
        navText : ['<img src="/Portals/_default/skins/giticorptheme/images/icons/general/white-right-arrow.svg">','<img src="/Portals/_default/skins/giticorptheme/images/icons/general/white-right-arrow.svg">'],
        mouseDrag:true,
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

    // Overview Swipe Up - SDG
    $(".sdg-item-wrapper .sdg-item").hover(
        function () {
            // Apply BG Color of SDG Item to Overview
            var sdgBgColor = $(this);
            var bg = sdgBgColor.css('background-color');
            $(this).find('.overview').attr('style', 'background-color: ' + bg + ' !important');

            // Add Class
            $(this).find('.overview').addClass("swipe-up");
        },
        function () {
            $(this).find('.overview').removeClass("swipe-up");
        }
    );

    // Read more toggle
    if ($(window).width() < 767) {
        // Set aria-expanded attribute of accordions to false on mobile
        $(".accordion-button").attr("aria-expanded","false");
        $(".accordion-button").addClass("collapsed");

        $(".sdg-accordion .accordion-item").find(".accordion-collapse").removeClass("show");

        // Read more toggle
        // Hide all paragraph except the 1st
        $(".text-wrapper p.sub").not(":first-of-type").hide();

        $(".sm").on("click", function() {
            var txt = $(this).parent().parent().find('.text-wrapper p').not(":first").is(':visible') ? 'Read More' : 'Read Less';
            $(this).text(txt);
            // $(this).parent().prev('.text-wrapper p').not(":first").slideToggle(100);
            $(this).parent().parent().find('.text-wrapper p').not(":first").slideToggle(250);
        });
    }

    // Un-collapse accordions on mobile
        //Resize window
        function resize() {
            if ($(window).width() < 767) {
                $(".sdg-accordion .accordion-item").find(".accordion-collapse").removeClass("show");

                // Hide all paragraph except the 1st
                $(".text-wrapper p.sub").not(":first-of-type").hide();

                $(".sm").on("click", function() {
                    var txt = $(this).parent().parent().find('.text-wrapper p').not(":first").is(':visible') ? 'Read More' : 'Read Less';
                    $(this).text(txt);
                    // $(this).parent().prev('.text-wrapper p').not(":first").slideToggle(100);
                    $(this).parent().parent().find('.text-wrapper p').not(":first").slideToggle(250);
                });
            } else {
                $(".sdg-accordion .accordion-item").find(".accordion-collapse").addClass("show");
            }
        }

    //watch window resize
    $(window).on('resize', function() {
        // resize();
    });
});