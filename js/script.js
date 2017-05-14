$(document).ready(function(){


    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

    if($('div.owl-carousel').length){
        $(".owl-carousel").owlCarousel({
            items: 4,
            margin: 30,
            loop: true,
            dots: false,
            nav: true,
            navClass: ['owl-prev','owl-next'],
            navText: ["",""],
            responsive: {
                0   :   { items:1 },
                768 :   { items:2 },
                980 :   { items:4 }
            }
        });
    }

    if($('#slider-camera').length){
        $('#slider-camera').camera({
            autoAdvance:false,
            height:'36.5%',
            minHeight:'300px',
            pagination:true,
            thumbnails:false,
            playPause:false,
            hover:false,
            loader:'none',
            navigation:false,
            navigationHover:false,
            mobileNavHover:false,
            fx:'simpleFade'
        });

    }

    //init wow js
    new WOW().init();

});