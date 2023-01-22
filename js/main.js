
const video = document.getElementById('video');
const videoPlayer = document.querySelector('#vedioWrapper img');

videoPlayer.addEventListener('click', function () {
    video.play();
})

video.onplaying = function () {
    videoPlayer.style.display = 'none';
};

video.addEventListener('pause', function () {
    videoPlayer.style.display = 'block';
})


$(document).ready(function () {

    $(".open-menu-btn").on('click', function () {
        $('.mobile-menu-area').addClass('toggle-mobile-menu')
    })
    $(".close-btn").on('click', function () {
        $('.mobile-menu-area').removeClass('toggle-mobile-menu')
    })
    $("#video").on('click', function () {
        alert("Hello")
    })

    $('.photo-gallary-slider').slick({
        infinite: true,
        slidesToShow: 3,
        variableWidth: true,
        speed: 300,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-arrow-left-long'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'> <i class='fa-solid fa-arrow-right-long'></i> </button>",
    });

});
