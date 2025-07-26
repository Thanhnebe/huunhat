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
    { id: 1, image: "images/khaitruong/kyanh/DAT_5559.jpg", alt: "Khai trương ở Kỳ Anh", name: "Khai trương ở Kỳ Anh" },
    { id: 2, image: "images/khaitruong/kyanh/DAT_5569.jpg", alt: "Khai trương ở Kỳ Anh", name: "Khai trương ở Kỳ Anh" },
    { id: 3, image: "images/khaitruong/kyanh/DAT_5578.jpg", alt: "Khai trương ở Kỳ Anh", name: "Khai trương ở Kỳ Anh" },
    { id: 4, image: "images/khaitruong/kyanh/DAT_5588.jpg", alt: "Khai trương ở Kỳ Anh", name: "Khai trương ở Kỳ Anh" },
    { id: 5, image: "images/khaitruong/kyanh/DAT_5611.jpg", alt: "Khai trương ở Kỳ Anh", name: "Khai trương ở Kỳ Anh" },
    { id: 6, image: "images/khaitruong/kyanh/DAT_5628.jpg", alt: "Khai trương ở Kỳ Anh", name: "Khai trương ở Kỳ Anh" },
    { id: 7, image: "images/khaitruong/kyanh/DAT_5680.jpg", alt: "Khai trương ở Kỳ Anh", name: "Khai trương ở Kỳ Anh" },
    { id: 8, image: "images/khaitruong/kyanh/DAT_5686.jpg", alt: "Khai trương ở Kỳ Anh", name: "Khai trương ở Kỳ Anh" },
    { id: 9, image: "images/khaitruong/kyanh/DAT_5697.jpg", alt: "Khai trương ở Kỳ Anh", name: "Khai trương ở Kỳ Anh" },
    { id: 10, image: "images/khaitruong/kyanh/DAT_5711.jpg", alt: "Khai trương ở Kỳ Anh", name: "Khai trương ở Kỳ Anh" },
    { id: 11, image: "images/khaitruong/kyanh/DAT_5729.jpg", alt: "Khai trương ở Kỳ Anh", name: "Khai trương ở Kỳ Anh" },
    { id: 12, image: "images/khaitruong/kyanh/DAT_5740.jpg", alt: "Khai trương ở Kỳ Anh", name: "Khai trương ở Kỳ Anh" },
    { id: 13, image: "images/khaitruong/kyanh/DAT_5784.jpg", alt: "Khai trương ở Kỳ Anh", name: "Khai trương ở Kỳ Anh" },
    { id: 14, image: "images/khaitruong/kyanh/DAT_5848.jpg", alt: "Khai trương ở Kỳ Anh", name: "Khai trương ở Kỳ Anh" },
    { id: 15, image: "images/khaitruong/kyanh/DAT_5860.jpg", alt: "Khai trương ở Kỳ Anh", name: "Khai trương ở Kỳ Anh" },
    { id: 16, image: "images/khaitruong/kyanh/DAT_5864.jpg", alt: "Khai trương ở Kỳ Anh", name: "Khai trương ở Kỳ Anh" },
    { id: 17, image: "images/khaitruong/kyanh/DAT_5874.jpg", alt: "Khai trương ở Kỳ Anh", name: "Khai trương ở Kỳ Anh" },
    { id: 18, image: "images/khaitruong/kyanh/DAT_5892.jpg", alt: "Khai trương ở Kỳ Anh", name: "Khai trương ở Kỳ Anh" },
    { id: 19, image: "images/khaitruong/kyanh/DAT_5896.jpg", alt: "Khai trương ở Kỳ Anh", name: "Khai trương ở Kỳ Anh" },
    { id: 20, image: "images/khaitruong/kyanh/DAT_5933.jpg", alt: "Khai trương ở Kỳ Anh", name: "Khai trương ở Kỳ Anh" },
    { id: 21, image: "images/khaitruong/kyanh/DAT_5939.jpg", alt: "Khai trương ở Kỳ Anh", name: "Khai trương ở Kỳ Anh" },
    { id: 22, image: "images/khaitruong/kyanh/DAT_5950.jpg", alt: "Khai trương ở Kỳ Anh", name: "Khai trương ở Kỳ Anh" },
    { id: 23, image: "images/khaitruong/kyanh/DAT_5960.jpg", alt: "Khai trương ở Kỳ Anh", name: "Khai trương ở Kỳ Anh" },
    { id: 24, image: "images/khaitruong/kyanh/DAT_6106.jpg", alt: "Khai trương ở Kỳ Anh", name: "Khai trương ở Kỳ Anh" },
    { id: 25, image: "images/khaitruong/kyanh/DAT_6217.jpg", alt: "Khai trương ở Kỳ Anh", name: "Khai trương ở Kỳ Anh" },
    { id: 26, image: "images/khaitruong/kyanh/DAT_6266.jpg", alt: "Khai trương ở Kỳ Anh", name: "Khai trương ở Kỳ Anh" },
    { id: 27, image: "images/khaitruong/kyanh/DAT_6273.jpg", alt: "Khai trương ở Kỳ Anh", name: "Khai trương ở Kỳ Anh" },
    { id: 28, image: "images/khaitruong/kyanh/DAT_6286.jpg", alt: "Khai trương ở Kỳ Anh", name: "Khai trương ở Kỳ Anh" },
    { id: 29, image: "images/khaitruong/kyanh/DAT_6314.jpg", alt: "Khai trương ở Kỳ Anh", name: "Khai trương ở Kỳ Anh" },
    { id: 30, image: "images/khaitruong/kyanh/DAT_6331.jpg", alt: "Khai trương ở Kỳ Anh", name: "Khai trương ở Kỳ Anh" },
    { id: 31, image: "images/khaitruong/kyanh/DAT_6377.jpg", alt: "Khai trương ở Kỳ Anh", name: "Khai trương ở Kỳ Anh" }
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

// Function gửi thông tin đăng ký tư vấn
async function sendToZalo(event) {
    event.preventDefault();

    const form = document.getElementById('zaloForm');
    const formData = new FormData(form);

    // Lấy thông tin từ form
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const phone = formData.get('phone').trim();
    const area = formData.get('area');

    // Validate dữ liệu
    if (!name || !phone || !area) {
        showErrorMessage('Vui lòng điền đầy đủ thông tin bắt buộc (Họ tên, Số điện thoại, Khu vực)');
        return false;
    }

    // Validate số điện thoại
    const phoneRegex = /^[0-9]{10,11}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
        showErrorMessage('Số điện thoại không hợp lệ. Vui lòng nhập số điện thoại 10-11 chữ số.');
        return false;
    }

    // Hiển thị loading
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang gửi...';
    submitBtn.disabled = true;

    // Dữ liệu gửi đến server
    const data = {
        name: name,
        email: email || '',
        phone: phone,
        area: area
    };

    // Gửi dữ liệu đến serverless function
    const apiUrl = window.location.hostname === 'localhost'
        ? 'http://localhost:3000/api/zalo-register'
        : '/api/zalo-register';

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
            // Thành công
            let message = 'Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.';

            if (result.zalo_sent) {
                message += ' ✅ Tin nhắn đã được gửi đến Zalo.';
            } else if (result.zalo_error) {
                message += ' ⚠️ Đã lưu thông tin, sẽ liên hệ sớm.';
            }

            showSuccessMessage(message);
            form.reset();
        } else {
            // Lỗi từ server
            showErrorMessage(result.error || 'Có lỗi xảy ra, vui lòng thử lại.');
        }
    } catch (error) {
        console.error('Lỗi kết nối:', error);
        // Fallback: Mở Zalo OA nếu không kết nối được server
        const message = `🔔 ĐĂNG KÝ TƯ VẤN MỚI - BIO AMIDA

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Họ và tên: ${name}
📱 Số điện thoại: ${phone}
📍 Khu vực: ${area}
📧 Email: ${email || 'Không có'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💬 Nhu cầu: Tư vấn về sản phẩm Bio Amida và cơ hội kinh doanh

⏰ Thời gian: ${new Date().toLocaleString('vi-VN', {
            timeZone: 'Asia/Ho_Chi_Minh',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        })}

🌐 Nguồn: Website Bio Amida
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;

        const encodedMessage = encodeURIComponent(message);
        const zaloOAUrl = 'https://zalo.me/3416749500273400315';
        const fullUrl = `${zaloOAUrl}?text=${encodedMessage}`;

        showSuccessMessage('Đăng ký thành công! Đang mở Zalo để gửi thông tin...');
        setTimeout(() => {
            window.open(fullUrl, '_blank');
        }, 1000);

        form.reset();
    }

    // Khôi phục nút submit
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;

    return false;
}

// Function hiển thị thông báo thành công
function showSuccessMessage(message = 'Đăng ký thành công!') {
    showNotification(message, 'success');
}

// Function hiển thị thông báo lỗi
function showErrorMessage(message = 'Có lỗi xảy ra!') {
    showNotification(message, 'error');
}

// Function hiển thị thông báo chung
function showNotification(message, type = 'success') {
    // Tạo thông báo
    const notification = document.createElement('div');
    notification.className = `${type}-notification`;

    const icon = type === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle';
    const bgColor = type === 'success' ? '#4CAF50' : '#f44336';

    notification.innerHTML = `
        <div class="notification-content">
            <i class="${icon}"></i>
            <span>${message}</span>
        </div>
    `;

    // Thêm style cho notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        font-family: Arial, sans-serif;
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 10px;
        animation: slideIn 0.3s ease-out;
        max-width: 400px;
        word-wrap: break-word;
    `;

    // Thêm animation CSS nếu chưa có
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Thêm vào body
    document.body.appendChild(notification);

    // Tự động ẩn sau 5 giây
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Scroll event for fade-in-up
window.addEventListener('scroll', handleFadeInUp);