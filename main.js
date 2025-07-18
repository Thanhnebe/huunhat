document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.banner-swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        speed: 1000,
    });
});

// Animation for fade-in-up
function handleFadeInUp() {
    const fadeEls = document.querySelectorAll('.fade-in-up');
    fadeEls.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
            el.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', handleFadeInUp);
window.addEventListener('DOMContentLoaded', handleFadeInUp);


function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('open');
}