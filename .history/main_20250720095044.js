// Mảng dữ liệu sản phẩm
const products = [
    {
        id: 1,
        name: "Nước Giặt Sinh Học",
        image: "images/sanpham/coctha/1.jpg",
        category: "Giặt ủi"
    },
    {
        id: 2,
        name: "Nước Rửa Chén",
        image: "images/sanpham/coctha/2.jpg",
        category: "Nhà bếp"
    },
    {
        id: 3,
        name: "Nước Lau Sàn",
        image: "images/sanpham/coctha/3.jpg",
        category: "Vệ sinh nhà cửa"
    },
    {
        id: 4,
        name: "Nước Tẩy Rửa",
        image: "images/sanpham/coctha/4.jpg",
        category: "Tẩy rửa"
    },
    {
        id: 5,
        name: "Khử Mùi",
        image: "images/sanpham/ddvesinh/1.jpg",
        category: "Khử mùi"
    },
    {
        id: 6,
        name: "Chăm Sóc Sức Khỏe",
        image: "images/sanpham/ddvesinh/2.jpg",
        category: "Chăm sóc sức khỏe"
    },
    {
        id: 7,
        name: "Nước Xả Vải",
        image: "images/sanpham/ddvesinh/3.jpg",
        category: "Giặt ủi"
    },
    {
        id: 8,
        name: "Tẩy Trắng",
        image: "images/sanpham/ddvesinh/4.jpg",
        category: "Tẩy rửa"
    },
    {
        id: 9,
        name: "Dầu Gội Đầu",
        image: "images/sanpham/daugoi/1.jpg",
        category: "Chăm sóc cá nhân"
    },
    {
        id: 10,
        name: "Sữa Tắm",
        image: "images/sanpham/suatam/1.jpg",
        category: "Chăm sóc cá nhân"
    },
    {
        id: 11,
        name: "Kem Đánh Răng",
        image: "images/sanpham/kemdanhrang/1.jpg",
        category: "Chăm sóc cá nhân"
    },
    {
        id: 12,
        name: "Nước Rửa Tay",
        image: "images/sanpham/ruatay/1.jpg",
        category: "Chăm sóc cá nhân"
    },
    {
        id: 13,
        name: "Nước Giặt Cao Cấp",
        image: "images/sanpham/nuocgiat/1.jpg",
        category: "Giặt ủi"
    },
    {
        id: 14,
        name: "Sữa Giặt",
        image: "images/sanpham/suagiat/1.jpg",
        category: "Giặt ủi"
    },
    {
        id: 15,
        name: "Xả Vải",
        image: "images/sanpham/xavai/1.jpg",
        category: "Giặt ủi"
    },
    {
        id: 16,
        name: "Xả Vải Khô",
        image: "images/sanpham/xavaikho/1.jpg",
        category: "Giặt ủi"
    },
    {
        id: 17,
        name: "Tẩy Bọt Tuyết Đa Năng",
        image: "images/sanpham/taybot/1.jpg",
        category: "Tẩy rửa"
    },
    {
        id: 18,
        name: "Tẩy Lồng Máy Giặt",
        image: "images/sanpham/taylong/1.jpg",
        category: "Tẩy rửa"
    },
    {
        id: 19,
        name: "Tẩy Toilet",
        image: "images/sanpham/taytoilet/1.jpg",
        category: "Vệ sinh nhà cửa"
    },
    {
        id: 20,
        name: "Tẩy Trắng Mốc",
        image: "images/sanpham/taytrang/1.jpg",
        category: "Tẩy rửa"
    },
    {
        id: 21,
        name: "Thông Cống",
        image: "images/sanpham/thongcong/1.jpg",
        category: "Vệ sinh nhà cửa"
    },
    {
        id: 22,
        name: "Túi Thơm",
        image: "images/sanpham/tuithom/1.jpg",
        category: "Khử mùi"
    },
    {
        id: 23,
        name: "Xịt Muỗi Kiến",
        image: "images/sanpham/xitmuoikien/1.jpg",
        category: "Chăm sóc sức khỏe"
    },
    {
        id: 24,
        name: "Xịt Phòng",
        image: "images/sanpham/xitphong/1.jpg",
        category: "Khử mùi"
    },
    {
        id: 25,
        name: "Xịt Ruồi Muỗi",
        image: "images/sanpham/xitruoimuoi/1.jpg",
        category: "Chăm sóc sức khỏe"
    },
    {
        id: 26,
        name: "Lau Kính",
        image: "images/sanpham/laukinh/1.jpg",
        category: "Vệ sinh nhà cửa"
    },
    {
        id: 27,
        name: "Lau Sàn",
        image: "images/sanpham/lausan/1.jpg",
        category: "Vệ sinh nhà cửa"
    },
    {
        id: 28,
        name: "Dầu Gội Nam",
        image: "images/sanpham/daugoinam/1.jpg",
        category: "Chăm sóc cá nhân"
    },
    {
        id: 29,
        name: "Dầu Gội Phủ Bạc",
        image: "images/sanpham/daugoiphubac/1.jpg",
        category: "Chăm sóc cá nhân"
    },
    {
        id: 30,
        name: "Dầu Xả",
        image: "images/sanpham/dauxa/1.jpg",
        category: "Chăm sóc cá nhân"
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