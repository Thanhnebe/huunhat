
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
    const galleryGrid2 = document.getElementById('galleryGrid2');
    if (galleryGrid) {
        const galleryHTML = dealerImages.map(image => createGalleryItem(image)).join('');
        galleryGrid.innerHTML = galleryHTML;
    }
    if (galleryGrid2) {
        const galleryHTML2 = dealerImages.map(image => createGalleryItem(image)).join('');
        galleryGrid2.innerHTML = galleryHTML2;
    }
}

// Function render gallery
function renderGallery() {
    const galleryGrid = document.getElementById('galleryGrid2');
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