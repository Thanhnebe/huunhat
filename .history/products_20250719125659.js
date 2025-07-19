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
        image: "images/sanpham/daugoipubac/1.jpg",
        category: "Chăm sóc cá nhân"
    },
    {
        id: 30,
        name: "Dầu Xả",
        image: "images/sanpham/dauxa/1.jpg",
        category: "Chăm sóc cá nhân"
    }
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