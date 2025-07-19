// Mảng dữ liệu sản phẩm (copy từ main.js)
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
    // ... copy tất cả sản phẩm từ main.js
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