// Mảng ảnh đại lý
const dealerImages1 = [
    {
        id: 1,
        src: "images/quytrinh/z6606560319806_443226f1a3761b66834e061cc7c36ed3.jpg",
        alt: "Quy trình đào tạo đại lý Bio Amida",
        title: "Đào tạo đại lý mới"
    },
    {
        id: 2,
        src: "images/quytrinh/z6606560327231_98c74ddd71bac919ae893df4121e09c7.jpg",
        alt: "Hướng dẫn bán hàng cho đại lý",
        title: "Hướng dẫn bán hàng"
    },
    {
        id: 3,
        src: "images/quytrinh/z6606560333304_e735c5192088dc7fc79f13109bb4e157.jpg",
        alt: "Kho hàng đại lý Bio Amida",
        title: "Kho hàng đại lý"
    },
    {
        id: 4,
        src: "images/quytrinh/z6606560335282_e5e961dd1b5fa4d40a08bc43f44871b7.jpg",
        alt: "Trưng bày sản phẩm tại đại lý",
        title: "Trưng bày sản phẩm"
    },
    {
        id: 5,
        src: "images/quytrinh/z6606560346130_9aa9ff65b41d3311b1c75f62b847b2cd.jpg",
        alt: "Hỗ trợ khách hàng tại đại lý",
        title: "Hỗ trợ khách hàng"
    },
    {
        id: 6,
        src: "images/quytrinh/z6606560348805_03c75b5f6a0b4a4de579e9cb6ea0c6ab.jpg",
        alt: "Giao hàng cho đại lý",
        title: "Giao hàng đại lý"
    },
    {
        id: 7,
        src: "images/quytrinh/z6606560351503_e1677427583f86a330b6fb3e529bae54.jpg",
        alt: "Kiểm tra chất lượng sản phẩm",
        title: "Kiểm tra chất lượng"
    },
    {
        id: 8,
        src: "images/quytrinh/z6606560353131_136b7f9b9819a1ba06a582b081c74c4d.jpg",
        alt: "Đào tạo kỹ năng bán hàng",
        title: "Đào tạo kỹ năng"
    },
    {
        id: 9,
        src: "images/quytrinh/z6606560360808_9b60148e6aac051babcc44a93d1e927a.jpg",
        alt: "Họp đại lý định kỳ",
        title: "Họp đại lý định kỳ"
    },
    {
        id: 10,
        src: "images/quytrinh/z6606560361110_78bc1153128c2a1f09b11d204fa21251.jpg",
        alt: "Chia sẻ kinh nghiệm kinh doanh",
        title: "Chia sẻ kinh nghiệm"
    },
    {
        id: 11,
        src: "images/quytrinh/z6606560366288_c35967ba06a716bc65a2e160526b7cb6.jpg",
        alt: "Khen thưởng đại lý xuất sắc",
        title: "Khen thưởng đại lý"
    }
];

const dealerImages = [
    {
        id: 1,
        src: "images/chungnhan/chungnhan1.jpg",
        alt: "Quy trình đào tạo đại lý Bio Amida",
        title: "Đào tạo đại lý mới"
    },
    {
        id: 2,
        src: "images/chungnhan/chungnhancucchinhtri.jpeg",
        alt: "Quy trình đào tạo đại lý Bio Amida",
        title: "Đào tạo đại lý mới"
    },
];

// Function tạo gallery item
function createGalleryItem(image) {
    return `
        <div class="gallery-item" data-image-id="${image.id}">
            <img src="${image.src}" 
                 alt="${image.alt}" 
                 title="${image.title}"
                 loading="lazy"
                 onclick="openLightbox(${image.id})">
            <div class="gallery-overlay">
                <h3>${image.title}</h3>
                <p>${image.alt}</p>
                <button class="view-btn" onclick="openLightbox(${image.id})">
                    <i class="fas fa-eye"></i> Xem chi tiết
                </button>
            </div>
        </div>
    `;
}

// Function render gallery
function renderGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (galleryGrid) {
        const galleryHTML = dealerImages.map(image => createGalleryItem(image)).join('');
        galleryGrid.innerHTML = galleryHTML;
    }
}

// Lightbox functionality
let currentImageIndex = 0;

function openLightbox(imageId) {
    const modal = document.getElementById('lightboxModal');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');

    currentImageIndex = dealerImages.findIndex(img => img.id === imageId);
    const image = dealerImages[currentImageIndex];

    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightboxCaption.textContent = image.title;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const modal = document.getElementById('lightboxModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % dealerImages.length;
    updateLightboxImage();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + dealerImages.length) % dealerImages.length;
    updateLightboxImage();
}

function updateLightboxImage() {
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const image = dealerImages[currentImageIndex];

    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightboxCaption.textContent = image.title;
}

// Keyboard navigation
function handleKeyPress(e) {
    if (document.getElementById('lightboxModal').style.display === 'flex') {
        switch (e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowRight':
                nextImage();
                break;
            case 'ArrowLeft':
                prevImage();
                break;
        }
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.getElementById("mobileMenu");
    if (menu) {
        menu.classList.toggle("open");
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    renderGallery();

    // Event listeners
    document.querySelector('.close-lightbox').addEventListener('click', closeLightbox);
    document.querySelector('.next-btn').addEventListener('click', nextImage);
    document.querySelector('.prev-btn').addEventListener('click', prevImage);
    document.addEventListener('keydown', handleKeyPress);

    // Close lightbox when clicking outside
    document.getElementById('lightboxModal').addEventListener('click', function (e) {
        if (e.target.id === 'lightboxModal') {
            closeLightbox();
        }
    });
}); 