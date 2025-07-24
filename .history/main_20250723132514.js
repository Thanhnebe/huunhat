// Mảng ảnh đại lý
const products1 = [
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

const products = [
    { id: 1, src: "images/khaitruong/kyanh/DAT_5559.jpg", alt: "Khai trương ở Kỳ Anh", title: "Khai trương ở Kỳ Anh" },
    { id: 2, src: "images/khaitruong/kyanh/DAT_5569.jpg", alt: "Khai trương ở Kỳ Anh", title: "Khai trương ở Kỳ Anh" },
    { id: 3, src: "images/khaitruong/kyanh/DAT_5578.jpg", alt: "Khai trương ở Kỳ Anh", title: "Khai trương ở Kỳ Anh" },
    { id: 4, src: "images/khaitruong/kyanh/DAT_5588.jpg", alt: "Khai trương ở Kỳ Anh", title: "Khai trương ở Kỳ Anh" },
    { id: 5, src: "images/khaitruong/kyanh/DAT_5611.jpg", alt: "Khai trương ở Kỳ Anh", title: "Khai trương ở Kỳ Anh" },
    { id: 6, src: "images/khaitruong/kyanh/DAT_5628.jpg", alt: "Khai trương ở Kỳ Anh", title: "Khai trương ở Kỳ Anh" },
    { id: 7, src: "images/khaitruong/kyanh/DAT_5680.jpg", alt: "Khai trương ở Kỳ Anh", title: "Khai trương ở Kỳ Anh" },
    { id: 8, src: "images/khaitruong/kyanh/DAT_5686.jpg", alt: "Khai trương ở Kỳ Anh", title: "Khai trương ở Kỳ Anh" },
    { id: 9, src: "images/khaitruong/kyanh/DAT_5697.jpg", alt: "Khai trương ở Kỳ Anh", title: "Khai trương ở Kỳ Anh" },
    { id: 10, src: "images/khaitruong/kyanh/DAT_5711.jpg", alt: "Khai trương ở Kỳ Anh", title: "Khai trương ở Kỳ Anh" },
    { id: 11, src: "images/khaitruong/kyanh/DAT_5729.jpg", alt: "Khai trương ở Kỳ Anh", title: "Khai trương ở Kỳ Anh" },
    { id: 12, src: "images/khaitruong/kyanh/DAT_5740.jpg", alt: "Khai trương ở Kỳ Anh", title: "Khai trương ở Kỳ Anh" },
    { id: 13, src: "images/khaitruong/kyanh/DAT_5784.jpg", alt: "Khai trương ở Kỳ Anh", title: "Khai trương ở Kỳ Anh" },
    { id: 14, src: "images/khaitruong/kyanh/DAT_5848.jpg", alt: "Khai trương ở Kỳ Anh", title: "Khai trương ở Kỳ Anh" },
    { id: 15, src: "images/khaitruong/kyanh/DAT_5860.jpg", alt: "Khai trương ở Kỳ Anh", title: "Khai trương ở Kỳ Anh" },
    { id: 16, src: "images/khaitruong/kyanh/DAT_5864.jpg", alt: "Khai trương ở Kỳ Anh", title: "Khai trương ở Kỳ Anh" },
    { id: 17, src: "images/khaitruong/kyanh/DAT_5874.jpg", alt: "Khai trương ở Kỳ Anh", title: "Khai trương ở Kỳ Anh" },
    { id: 18, src: "images/khaitruong/kyanh/DAT_5892.jpg", alt: "Khai trương ở Kỳ Anh", title: "Khai trương ở Kỳ Anh" },
    { id: 19, src: "images/khaitruong/kyanh/DAT_5896.jpg", alt: "Khai trương ở Kỳ Anh", title: "Khai trương ở Kỳ Anh" },
    { id: 20, src: "images/khaitruong/kyanh/DAT_5933.jpg", alt: "Khai trương ở Kỳ Anh", title: "Khai trương ở Kỳ Anh" },
    { id: 21, src: "images/khaitruong/kyanh/DAT_5939.jpg", alt: "Khai trương ở Kỳ Anh", title: "Khai trương ở Kỳ Anh" },
    { id: 22, src: "images/khaitruong/kyanh/DAT_5950.jpg", alt: "Khai trương ở Kỳ Anh", title: "Khai trương ở Kỳ Anh" },
    { id: 23, src: "images/khaitruong/kyanh/DAT_5960.jpg", alt: "Khai trương ở Kỳ Anh", title: "Khai trương ở Kỳ Anh" },
    { id: 24, src: "images/khaitruong/kyanh/DAT_6106.jpg", alt: "Khai trương ở Kỳ Anh", title: "Khai trương ở Kỳ Anh" },
    { id: 25, src: "images/khaitruong/kyanh/DAT_6217.jpg", alt: "Khai trương ở Kỳ Anh", title: "Khai trương ở Kỳ Anh" },
    { id: 26, src: "images/khaitruong/kyanh/DAT_6266.jpg", alt: "Khai trương ở Kỳ Anh", title: "Khai trương ở Kỳ Anh" },
    { id: 27, src: "images/khaitruong/kyanh/DAT_6273.jpg", alt: "Khai trương ở Kỳ Anh", title: "Khai trương ở Kỳ Anh" },
    { id: 28, src: "images/khaitruong/kyanh/DAT_6286.jpg", alt: "Khai trương ở Kỳ Anh", title: "Khai trương ở Kỳ Anh" },
    { id: 29, src: "images/khaitruong/kyanh/DAT_6314.jpg", alt: "Khai trương ở Kỳ Anh", title: "Khai trương ở Kỳ Anh" },
    { id: 30, src: "images/khaitruong/kyanh/DAT_6331.jpg", alt: "Khai trương ở Kỳ Anh", title: "Khai trương ở Kỳ Anh" },
    { id: 31, src: "images/khaitruong/kyanh/DAT_6377.jpg", alt: "Khai trương ở Kỳ Anh", title: "Khai trương ở Kỳ Anh" }
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
    const productItem = e.target.closest('.product-item');
    if (productItem) {
        const img = productItem.querySelector('img');
        if (img) {
            const modal = document.getElementById('productImageModal');
            const modalImg = document.getElementById('modalProductImg');
            if (modal && modalImg) {
                modalImg.src = img.src;
                modal.classList.add('active');
                modal.style.display = 'flex';
            }
        }
        e.preventDefault();
        e.stopPropagation();
        return;
    }
}

// Đóng modal khi click vào nút đóng hoặc nền modal
function setupProductImageModalEvents() {
    const modal = document.getElementById('productImageModal');
    const closeBtn = document.getElementById('closeProductImageModal');
    if (modal && closeBtn) {
        closeBtn.onclick = function () {
            modal.classList.remove('active');
            modal.style.display = 'none';
        };
        modal.onclick = function (event) {
            if (event.target === modal) {
                modal.classList.remove('active');
                modal.style.display = 'none';
            }
        };
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
    setupProductImageModalEvents();
});

// Scroll event for fade-in-up
window.addEventListener('scroll', handleFadeInUp);