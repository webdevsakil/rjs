

$(document).ready(function () {

    $(".open-menu-btn").on('click', function () {
        $('.mobile-menu-area').addClass('toggle-mobile-menu')
    })
    $(".close-btn").on('click', function () {
        $('.mobile-menu-area').removeClass('toggle-mobile-menu')
    })

    $('.photo-gallary-slider').slick({
        infinite: true,
        slidesToShow: 3,
        variableWidth: true,
        speed: 300,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-arrow-left-long'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'> <i class='fa-solid fa-arrow-right-long'></i> </button>",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

});
