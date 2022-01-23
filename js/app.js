new WOW().init();
// alert(1)
$(window).scroll(function() {
    var nav = $('.bg-scroll');
    var top = 20;
    if ($(window).scrollTop() >= top) {
        nav.addClass('bg-black');

    } else {
        // nav.css('top', '0px')
        nav.removeClass('bg-black');
    }
});
$(".banner__slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    // autoplayspeed: 2000
});

$(".event-slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    // autoplayspeed: 2000
});

$(".icon").slick({
    dots: false,
    infinite: false,
    speed: 300,
    // autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
})

$(".slider-else").slick({
    dots: false,
    infinite: false,
    speed: 300,
    // autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
})

$(".leaders").slick({
    dots: false,
    infinite: false,
    speed: 300,
    // autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
})

$(".projects__slide").slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
})



$(".scrolltop").hide();
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.scrolltop').fadeIn();
    } else {
        $('.scrolltop').fadeOut();
    }
});
$('.scrolltop').click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 800);
});


//search result
$(".search").click(() => {
    $(".search-wrap").fadeIn('fast')
})

$(".close-click").click(() => {
    $(".search-wrap").hide()
})

$(".search-click").click(() => {
    alert(1)
})