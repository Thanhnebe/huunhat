// Mảng dữ liệu sản phẩm
const products = [
    {
        id: 1,
        name: "Nước Giặt Sinh Học",
        image: "./file làm lading page/sản phẩm giỏ hàng/sản phẩm giỏ hàng/CỐC THẢ BỒN CẦU/1.jpg",
        category: "Giặt ủi"
    },
    {
        id: 2,
        name: "Nước Rửa Chén",
        image: "./file làm lading page/sản phẩm giỏ hàng/sản phẩm giỏ hàng/CỐC THẢ BỒN CẦU/2.jpg",
        category: "Nhà bếp"
    },
    {
        id: 3,
        name: "Nước Lau Sàn",
        image: "./file làm lading page/sản phẩm giỏ hàng/sản phẩm giỏ hàng/CỐC THẢ BỒN CẦU/3.jpg",
        category: "Vệ sinh nhà cửa"
    },
    {
        id: 4,
        name: "Nước Tẩy Rửa",
        image: "./file làm lading page/sản phẩm giỏ hàng/sản phẩm giỏ hàng/CỐC THẢ BỒN CẦU/4.jpg",
        category: "Tẩy rửa"
    },
    {
        id: 5,
        name: "Khử Mùi",
        image: "./file làm lading page/sản phẩm giỏ hàng/sản phẩm giỏ hàng/DD VỆ SINH/1.jpg",
        category: "Khử mùi"
    },
    {
        id: 6,
        name: "Chăm Sóc Sức Khỏe",
        image: "./file làm lading page/sản phẩm giỏ hàng/sản phẩm giỏ hàng/DD VỆ SINH/2.jpg",
        category: "Chăm sóc sức khỏe"
    },
    {
        id: 7,
        name: "Nước Xả Vải",
        image: "./file làm lading page/sản phẩm giỏ hàng/sản phẩm giỏ hàng/DD VỆ SINH/3.jpg",
        category: "Giặt ủi"
    },
    {
        id: 8,
        name: "Tẩy Trắng",
        image: "./file làm lading page/sản phẩm giỏ hàng/sản phẩm giỏ hàng/DD VỆ SINH/4.jpg",
        category: "Tẩy rửa"
    },
    {
        id: 9,
        name: "Dầu Gội Đầu",
        image: "./file làm lading page/sản phẩm giỏ hàng/sản phẩm giỏ hàng/DẦU GỘI/1.jpg",
        category: "Chăm sóc cá nhân"
    },
    {
        id: 10,
        name: "Sữa Tắm",
        image: "./file làm lading page/sản phẩm giỏ hàng/sản phẩm giỏ hàng/SỮA TẮM/1.jpg",
        category: "Chăm sóc cá nhân"
    },
    {
        id: 11,
        name: "Kem Đánh Răng",
        image: "./file làm lading page/sản phẩm giỏ hàng/sản phẩm giỏ hàng/KEM ĐÁNH RĂNG/1.jpg",
        category: "Chăm sóc cá nhân"
    },
    {
        id: 12,
        name: "Nước Rửa Tay",
        image: "./file làm lading page/sản phẩm giỏ hàng/sản phẩm giỏ hàng/RỬA TAY/1.jpg",
        category: "Chăm sóc cá nhân"
    },
    {
        id: 13,
        name: "Nước Giặt Cao Cấp",
        image: "./file làm lading page/sản phẩm giỏ hàng/sản phẩm giỏ hàng/Nước giặt cao cấp/1.jpg",
        category: "Giặt ủi"
    },
    {
        id: 14,
        name: "Sữa Giặt",
        image: "./file làm lading page/sản phẩm giỏ hàng/sản phẩm giỏ hàng/SỮA GIẶT/1.jpg",
        category: "Giặt ủi"
    },
    {
        id: 15,
        name: "Xả Vải",
        image: "./file làm lading page/sản phẩm giỏ hàng/sản phẩm giỏ hàng/XẢ VẢI/1.jpg",
        category: "Giặt ủi"
    },
    {
        id: 16,
        name: "Xả Vải Khô",
        image: "./file làm lading page/sản phẩm giỏ hàng/sản phẩm giỏ hàng/XẢ VẢI KHÔ/1.jpg",
        category: "Giặt ủi"
    },
    {
        id: 17,
        name: "Tẩy Bọt Tuyết Đa Năng",
        image: "./file làm lading page/sản phẩm giỏ hàng/sản phẩm giỏ hàng/TẨY BỌT TUYẾT ĐA NĂNG/1.jpg",
        category: "Tẩy rửa"
    },
    {
        id: 18,
        name: "Tẩy Lồng Máy Giặt",
        image: "./file làm lading page/sản phẩm giỏ hàng/sản phẩm giỏ hàng/TẨY LỒNG MÁY GIẶT/1.jpg",
        category: "Tẩy rửa"
    },
    {
        id: 19,
        name: "Tẩy Toilet",
        image: "./file làm lading page/sản phẩm giỏ hàng/sản phẩm giỏ hàng/TẨY TOILET/1.jpg",
        category: "Vệ sinh nhà cửa"
    },
    {
        id: 20,
        name: "Tẩy Trắng Mốc",
        image: "./file làm lading page/sản phẩm giỏ hàng/sản phẩm giỏ hàng/TẨY TRẮNG MỐC/1.jpg",
        category: "Tẩy rửa"
    },
    {
        id: 21,
        name: "Thông Cống",
        image: "./file làm lading page/sản phẩm giỏ hàng/sản phẩm giỏ hàng/THÔNG CỐNG/1.jpg",
        category: "Vệ sinh nhà cửa"
    },
    {
        id: 22,
        name: "Túi Thơm",
        image: "./file làm lading page/sản phẩm giỏ hàng/sản phẩm giỏ hàng/TÚI THƠM/1.jpg",
        category: "Khử mùi"
    },
    {
        id: 23,
        name: "Xịt Muỗi Kiến",
        image: "./file làm lading page/sản phẩm giỏ hàng/sản phẩm giỏ hàng/XỊT MUỖI KIẾN/1.jpg",
        category: "Chăm sóc sức khỏe"
    },
    {
        id: 24,
        name: "Xịt Phòng",
        image: "./file làm lading page/sản phẩm giỏ hàng/sản phẩm giỏ hàng/XỊT PHÒNG/1.jpg",
        category: "Khử mùi"
    },
    {
        id: 25,
        name: "Xịt Ruồi Muỗi",
        image: "./file làm lading page/sản phẩm giỏ hàng/sản phẩm giỏ hàng/XỊT RUỒI MUỖI/1.jpg",
        category: "Chăm sóc sức khỏe"
    },
    {
        id: 26,
        name: "Lau Kính",
        image: "./file làm lading page/sản phẩm giỏ hàng/sản phẩm giỏ hàng/LAU KÍNH/1.jpg",
        category: "Vệ sinh nhà cửa"
    },
    {
        id: 27,
        name: "Lau Sàn",
        image: "./file làm lading page/sản phẩm giỏ hàng/sản phẩm giỏ hàng/LAU SÀN/1.jpg",
        category: "Vệ sinh nhà cửa"
    },
    {
        id: 28,
        name: "Dầu Gội Nam",
        image: "./file làm lading page/sản phẩm giỏ hàng/sản phẩm giỏ hàng/DẦU GỘI NAM/1.jpg",
        category: "Chăm sóc cá nhân"
    },
    {
        id: 29,
        name: "Dầu Gội Phủ Bạc",
        image: "./file làm lading page/sản phẩm giỏ hàng/sản phẩm giỏ hàng/DẦU GỘI PHỦ BẠC/1.jpg",
        category: "Chăm sóc cá nhân"
    },
    {
        id: 30,
        name: "Dầu Xả",
        image: "./file làm lading page/sản phẩm giỏ hàng/sản phẩm giỏ hàng/DẦU XẢ/1.jpg",
        category: "Chăm sóc cá nhân"
    }
];

// Function tạo HTML cho sản phẩm
function createProductSlide(product) {
    return `
        <div class="swiper-slide">
            <div class="product-item" data-product-id="${product.id}" style="cursor: pointer;">
                <img src="${product.image}" alt="${product.name}">
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