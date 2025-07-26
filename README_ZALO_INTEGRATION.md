# Hướng Dẫn Tích Hợp Zalo OA

## Tổng Quan
Website đã được tích hợp với Zalo OA của bạn (https://zalo.me/3416749500273400315) để xử lý đăng ký tư vấn và liên hệ khách hàng.

## Tính Năng Đã Tích Hợp

### 1. Form Đăng Ký Tư Vấn
- **Vị trí**: Trang chủ, section "Chương trình tư vấn 1:1 antgroupvn"
- **Chức năng**: 
  - Thu thập thông tin: Họ tên, Email, Số điện thoại, Khu vực
  - Tự động gửi thông tin đến Zalo OA với format đẹp
  - Hiển thị thông báo thành công
  - Reset form sau khi gửi

### 2. Nút Liên Hệ Tư Vấn (Trang Sản Phẩm)
- **Vị trí**: Modal chi tiết sản phẩm trong trang products.html
- **Chức năng**: Mở trực tiếp Zalo OA để tư vấn

## Cách Hoạt Động

### Form Đăng Ký
1. Khách hàng điền thông tin vào form
2. Nhấn "Đăng ký tư vấn"
3. Hệ thống tạo tin nhắn với format:
```
🔔 ĐĂNG KÝ TƯ VẤN MỚI

👤 Họ và tên: [Tên khách hàng]
📧 Email: [Email]
📱 Số điện thoại: [SĐT]
📍 Khu vực: [Khu vực]

💬 Khách hàng muốn được tư vấn về sản phẩm Bio Amida và cơ hội kinh doanh.

⏰ Thời gian: [Thời gian đăng ký]
```
4. Mở Zalo OA với tin nhắn đã được điền sẵn
5. Hiển thị thông báo thành công

### Nút Liên Hệ
- Nhấn nút "Liên Hệ Tư Vấn" → Mở trực tiếp Zalo OA

## File Đã Chỉnh Sửa

### 1. `index.html`
- Thêm `onsubmit="return sendToZalo(event)"` vào form
- Sửa cấu trúc HTML form

### 2. `main.js`
- Thêm function `sendToZalo(event)` để xử lý form
- Thêm function `showSuccessMessage()` để hiển thị thông báo
- Tích hợp với Zalo OA URL: `https://zalo.me/3416749500273400315`

### 3. `products.js`
- Cập nhật nút "Liên Hệ Tư Vấn" để mở Zalo OA
- Thay thế số điện thoại cũ bằng Zalo OA URL

## Lưu Ý Kỹ Thuật

### Zalo OA URL
- URL chính: `https://zalo.me/3416749500273400315`
- Có thể thêm tham số `?text=` để gửi tin nhắn có sẵn nội dung

### Bảo Mật
- Thông tin khách hàng được mã hóa trong URL
- Không lưu trữ dữ liệu trên server
- Tuân thủ quy định bảo mật của Zalo

### Tương Thích
- Hoạt động trên tất cả trình duyệt hiện đại
- Responsive trên mobile và desktop
- Tự động mở Zalo app nếu đã cài đặt

## Tùy Chỉnh

### Thay Đổi Nội Dung Tin Nhắn
Chỉnh sửa trong `main.js`, function `sendToZalo()`:
```javascript
const message = `🔔 ĐĂNG KÝ TƯ VẤN MỚI
// Thay đổi nội dung ở đây
`;
```

### Thay Đổi Zalo OA URL
Chỉnh sửa trong `main.js` và `products.js`:
```javascript
const zaloOAUrl = 'https://zalo.me/YOUR_NEW_OA_ID';
```

### Tùy Chỉnh Thông Báo
Chỉnh sửa trong `main.js`, function `showSuccessMessage()`:
```javascript
notification.innerHTML = `
    <div class="notification-content">
        <i class="fas fa-check-circle"></i>
        <span>Nội dung thông báo tùy chỉnh</span>
    </div>
`;
```

## Kiểm Tra Hoạt Động

1. Mở website trên trình duyệt
2. Điền form đăng ký tư vấn
3. Nhấn "Đăng ký tư vấn"
4. Kiểm tra:
   - Thông báo thành công xuất hiện
   - Zalo OA mở với tin nhắn đã điền
   - Form được reset

## Hỗ Trợ

Nếu gặp vấn đề:
1. Kiểm tra console browser để xem lỗi JavaScript
2. Đảm bảo Zalo OA URL đúng
3. Kiểm tra kết nối internet
4. Thử trên trình duyệt khác

## Cập Nhật Tương Lai

- Có thể tích hợp với Zalo API để gửi tin nhắn trực tiếp
- Thêm tính năng lưu trữ dữ liệu khách hàng
- Tích hợp với CRM system
- Thêm chatbot tự động 