// Mảng dữ liệu sản phẩm
const products = [
    {
        id: 1,
        name: "Cốc thả bồn cầu",
        image: "images/sanpham/coctha/1.jpg",
        category: "Giặt ủi"
    },
    {
        id: 2,
        name: "Dầu gội",
        image: "images/sanpham/daugoi/2.jpg",
        category: "Dầu gội"
    },
    {
        id: 3,
        name: "Dầu gội nam",
        image: "images/sanpham/daugoinam/2.jpg",
        category: "Dầu gội"
    },
    {
        id: 4,
        name: "Dầu xả",
        image: "images/sanpham/dauxa/1.jpg",
        category: "Dầu gội"
    },
    {
        id: 5,
        name: "Dung dịch vệ sinh",
        image: "images/sanpham/ddvesinh/1.jpg",
        category: "Khử mùi"
    },
    {
        id: 6,
        name: "Kem đánh răng",
        image: "images/sanpham/kemdanhrang/2.jpg",
        category: "Chăm sóc sức khỏe"
    },
    {
        id: 7,
        name: "Nước lau kính",
        image: "images/sanpham/laukinh/1.jpg",
        category: "Tẩy rửa"
    },
    {
        id: 8,
        name: "Nước lau sàn",
        image: "images/sanpham/lausan/1.jpg",
        category: "Tẩy rửa"
    },
    {
        id: 9,
        name: "Nước giặt",
        image: "images/sanpham/nuocgiat/1.jpg",
        category: "Tẩy rửa"
    },
    {
        id: 10,
        name: "Sữa Tắm",
        image: "images/sanpham/suatam/1.jpg",
        category: "Tẩy rửa"
    },
    {
        id: 11,
        name: "Tẩy bot",
        image: "images/sanpham/taybot/1.jpg",
        category: "Chăm sóc cá nhân"
    },
    {
        id: 12,
        name: "Tẩy lông máy giặt",
        image: "images/sanpham/taylong/1.jpg",
        category: "Tẩy rửa"
    },
    {
        id: 13,
        name: "Nước tẩy trắng tẩy mốc",
        image: "images/sanpham/taytrang/1.jpg",
        category: "Tẩy rửa"
    },
    {
        id: 14,
        name: "Thông tắc ống cống",
        image: "images/sanpham/thongcong/1.jpg",
        category: "Tẩy rửa"
    },
    {
        id: 15,
        name: "Túi thơm",
        image: "images/sanpham/tuithom/1.jpg",
        category: "Khử mùi"
    },
    {
        id: 16,
        name: "Nước xả vải khô",
        image: "images/sanpham/xavaikho/1.jpg",
        category: "Tẩy rửa"
    },
    {
        id: 17,
        name: "Bình xịt thông minh xua đuổi kiến muỗi",
        image: "images/sanpham/xitmuoikien/1.jpg",
        category: "Khử mùi"
    },
    {
        id: 18,
        name: "Bình xịt phòng",
        image: "images/sanpham/xitphong/1.jpg",
        category: "Khử mùi"
    },
    {
        id: 19,
        name: "Bình xịt xua đuổi muỗi",
        image: "images/sanpham/xitruoimuoi/1.jpg",
        category: "Khử mùi"
    },
];

// Function tạo HTML cho sản phẩm trong grid
function createProductCard(product) {
    return `
        <div class="product-card" data-product-id="${product.id}" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-overlay">
                    <button class="view-details-btn">Xem Chi Tiết</button>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <span class="product-category">${product.category}</span>
            </div>
        </div>
    `;
}

// Function render tất cả sản phẩm
function renderAllProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid) {
        const productsHTML = products.map(product => createProductCard(product)).join('');
        productsGrid.innerHTML = productsHTML;
    }
}

// Function render sản phẩm theo category
function renderProductsByCategory(category) {
    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid) {
        let filteredProducts;
        if (category === 'all') {
            filteredProducts = products;
        } else {
            filteredProducts = products.filter(product => product.category === category);
        }
        const productsHTML = filteredProducts.map(product => createProductCard(product)).join('');
        productsGrid.innerHTML = productsHTML;
    }
}

// Function xử lý click filter
function handleFilterClick(e) {
    if (e.target.classList.contains('filter-btn')) {
        // Remove active class từ tất cả buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        // Add active class cho button được click
        e.target.classList.add('active');

        // Get category
        const category = e.target.dataset.category;

        // Render sản phẩm theo category
        renderProductsByCategory(category);
    }
}

// Function xử lý click vào sản phẩm
function handleProductClick(e) {
    if (e.target.closest('.product-card')) {
        const productCard = e.target.closest('.product-card');
        const productId = productCard.dataset.productId;

        // Có thể chuyển đến trang chi tiết sản phẩm
        // window.location.href = `product-detail.html?id=${productId}`;

        // Hoặc hiển thị modal chi tiết sản phẩm
        showProductModal(productId);
    }
}

// Function hiển thị modal chi tiết sản phẩm
function showProductModal(productId) {
    const product = products.find(p => p.id == productId);
    if (product) {
        // Tạo modal HTML
        const modalHTML = `
            <div class="product-modal" id="productModal">
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <div class="modal-body">
                        <div class="product-image">
                            <img src="${product.image}" alt="${product.name}">
                        </div>
                        <div class="product-details">
                            <h2>${product.name}</h2>
                            <p class="category">Danh mục: ${product.category}</p>
                            <p class="description">Sản phẩm sinh học chất lượng cao, an toàn cho sức khỏe và thân thiện với môi trường.</p>
                            <button class="contact-btn">Liên Hệ Tư Vấn</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Thêm modal vào body
        document.body.insertAdjacentHTML('beforeend', modalHTML);

        // Hiển thị modal
        document.getElementById('productModal').style.display = 'flex';

        // Xử lý đóng modal
        document.querySelector('.close-modal').onclick = function () {
            document.getElementById('productModal').remove();
        };

        // Đóng modal khi click bên ngoài
        document.getElementById('productModal').onclick = function (e) {
            if (e.target.id === 'productModal') {
                document.getElementById('productModal').remove();
            }
        };

        // Xử lý click nút Liên Hệ Tư Vấn - chuyển đến Zalo OA
        document.querySelector('.contact-btn').onclick = function () {
            const zaloOAUrl = 'https://zalo.me/3416749500273400315';
            window.open(zaloOAUrl, '_blank');
        };
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("open");
}

// Khởi tạo khi DOM load xong
document.addEventListener('DOMContentLoaded', function () {
    // Render tất cả sản phẩm
    renderAllProducts();

    // Event listeners
    document.addEventListener('click', handleFilterClick);
    document.addEventListener('click', handleProductClick);
}); 