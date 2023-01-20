


// header

const openMenuBtn = document.querySelector('.header-area .open-menu-btn button');
const mobileMenu = document.querySelector('.header-area .mobile-menu-area');
const closeBtn = document.querySelector('.header-area .close-btn button');
const body = document.querySelector('body');

openMenuBtn.addEventListener('click', function () {
    mobileMenu.classList.add('toggle-mobile-menu');
    body.classList.add('bg-gray');
})
closeBtn.addEventListener('click', function () {
    mobileMenu.classList.remove('toggle-mobile-menu');
    body.classList.remove('bg-gray');
})





// preloader

// window.addEventListener('load', function () {
//     document.querySelector('#loader-wrapper').classList.add("loaded")
// });

$(document).ready(function () {

    $('.photo-gallary-slider').slick({
        infinite: true,
        slidesToShow: 3,
        // slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        speed: 300,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-arrow-left-long'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'> <i class='fa-solid fa-arrow-right-long'></i> </button>"
    });
});
