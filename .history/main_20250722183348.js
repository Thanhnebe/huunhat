// Mảng ảnh đại lý
const product = [
    {
        id: 1,
        image: "images/quytrinh/z6606560319806_443226f1a3761b66834e061cc7c36ed3.jpg",
        alt: "Quy trình đào tạo đại lý Bio Amida",
        name: "Đào tạo đại lý mới"
    },
    {
        id: 2,
        image: "images/quytrinh/z6606560327231_98c74ddd71bac919ae893df4121e09c7.jpg",
        alt: "Hướng dẫn bán hàng cho đại lý",
        name: "Hướng dẫn bán hàng"
    },
    {
        id: 3,
        image: "images/quytrinh/z6606560333304_e735c5192088dc7fc79f13109bb4e157.jpg",
        alt: "Kho hàng đại lý Bio Amida",
        name: "Kho hàng đại lý"
    },
    {
        id: 4,
        image: "images/quytrinh/z6606560335282_e5e961dd1b5fa4d40a08bc43f44871b7.jpg",
        alt: "Trưng bày sản phẩm tại đại lý",
        name: "Trưng bày sản phẩm"
    },
    {
        id: 5,
        image: "images/quytrinh/z6606560346130_9aa9ff65b41d3311b1c75f62b847b2cd.jpg",
        alt: "Hỗ trợ khách hàng tại đại lý",
        name: "Hỗ trợ khách hàng"
    },
    {
        id: 6,
        image: "images/quytrinh/z6606560348805_03c75b5f6a0b4a4de579e9cb6ea0c6ab.jpg",
        alt: "Giao hàng cho đại lý",
        name: "Giao hàng đại lý"
    },
    {
        id: 7,
        image: "images/quytrinh/z6606560351503_e1677427583f86a330b6fb3e529bae54.jpg",
        alt: "Kiểm tra chất lượng sản phẩm",
        name: "Kiểm tra chất lượng"
    },
    {
        id: 8,
        image: "images/quytrinh/z6606560353131_136b7f9b9819a1ba06a582b081c74c4d.jpg",
        alt: "Đào tạo kỹ năng bán hàng",
        name: "Đào tạo kỹ năng"
    },
    {
        id: 9,
        image: "images/quytrinh/z6606560360808_9b60148e6aac051babcc44a93d1e927a.jpg",
        alt: "Họp đại lý định kỳ",
        name: "Họp đại lý định kỳ"
    },
    {
        id: 10,
        image: "images/quytrinh/z6606560361110_78bc1153128c2a1f09b11d204fa21251.jpg",
        alt: "Chia sẻ kinh nghiệm kinh doanh",
        name: "Chia sẻ kinh nghiệm"
    },
    {
        id: 11,
        image: "images/quytrinh/z6606560366288_c35967ba06a716bc65a2e160526b7cb6.jpg",
        alt: "Khen thưởng đại lý xuất sắc",
        name: "Khen thưởng đại lý"
    }
];
// Function tạo HTML cho sản phẩm
function createProductSlide(product) {
    return `
        <div class="swiper-slide">
            <div class="product-item" data-product-id="${product.id}" style="cursor: pointer;">
                <img src="${product.image}" alt="${product.name}" data-aos="fade-up" loading="lazy">
                <div class="product-overlay">
                    <span class="product-name">${product.name}</span>
                    <span class="product-category">${product.category}</span>
                </div>
            </div>
        </div>
    `;
}

// Function render tất cả sản phẩm
function renderProducts() {
    const productSwiperWrapper = document.querySelector('.product-swiper .swiper-wrapper');
    if (productSwiperWrapper) {
        const productHTML = products.map(product => createProductSlide(product)).join('');
        productSwiperWrapper.innerHTML = productHTML;
    }
}

// Function render sản phẩm theo category
function renderProductsByCategory(category) {
    const filteredProducts = products.filter(product => product.category === category);
    const productSwiperWrapper = document.querySelector('.product-swiper .swiper-wrapper');
    if (productSwiperWrapper) {
        const productHTML = filteredProducts.map(product => createProductSlide(product)).join('');
        productSwiperWrapper.innerHTML = productHTML;
    }
}

// Khởi tạo product swiper
let productSwiper;

function initProductSwiper() {
    productSwiper = new Swiper('.product-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // Xóa phần pagination này
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        // },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });
}

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

// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("open");
}

// Function xử lý click vào sản phẩm trong slider
function handleProductSliderClick(e) {
    if (e.target.closest('.product-item')) {
        // Chuyển đến trang tất cả sản phẩm
        window.location.href = 'products.html';
    }
}

// Function xử lý click vào summary content
function handleViewAllProducts() {
    const button = event.target;
    const originalText = button.innerHTML;

    // Hiệu ứng loading
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang chuyển...';
    button.disabled = true;

    // Chuyển trang sau 1 giây
    setTimeout(() => {
        window.location.href = 'products.html';
    }, 1000);
}

// Khởi tạo khi DOM load xong
document.addEventListener('DOMContentLoaded', function () {
    // Render sản phẩm
    renderProducts();

    // Khởi tạo product swiper
    initProductSwiper();

    // Banner swiper
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
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        speed: 1000,
    });

    // Fade in animation
    handleFadeInUp();

    // Thêm event listener cho click vào sản phẩm
    document.addEventListener('click', handleProductSliderClick);

    // Thêm event listener cho summary content
    const viewAllProducts = document.getElementById('viewAllProducts');
    if (viewAllProducts) {
        viewAllProducts.addEventListener('click', handleViewAllProducts);
    }
});

// Scroll event for fade-in-up
window.addEventListener('scroll', handleFadeInUp);