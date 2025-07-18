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
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'fade', // hoặc 'slide', 'cube', 'coverflow', v.v.
        speed: 800,
    });
});