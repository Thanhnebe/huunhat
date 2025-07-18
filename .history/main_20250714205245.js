document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.banner-swiper', {
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        effect: 'slide',
        speed: 800,
    });
});