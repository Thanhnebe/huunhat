# 🚀 Hướng Dẫn Cấu Hình Gửi Thông Báo Tự Động

## 📋 Tổng Quan
Hệ thống đã được nâng cấp để gửi thông báo tự động khi có đăng ký tư vấn mới, không cần mở app Zalo.

## 🎯 Tính Năng Mới

### ✅ Gửi Tin Nhắn Zalo Tự Động
- Gửi tin nhắn trực tiếp đến Zalo OA của bạn
- Không cần mở app Zalo
- Tin nhắn có format đẹp với emoji

### ✅ Gửi Email Thông Báo
- Gửi email thông báo đến chính bạn
- Email có giao diện đẹp, chuyên nghiệp
- Thông tin chi tiết về khách hàng

### ✅ Fallback System
- Nếu server không hoạt động → Tự động mở Zalo OA
- Đảm bảo luôn có cách liên hệ với khách hàng

## 🔧 Cài Đặt Backend

### Bước 1: Cài đặt Node.js
```bash
# Kiểm tra Node.js
node --version
npm --version
```

### Bước 2: Cài đặt dependencies
```bash
npm install
```

### Bước 3: Cấu hình Zalo OA API

#### Lấy Access Token:
1. Đăng nhập vào [Zalo Developers](https://developers.zalo.me/)
2. Tạo ứng dụng mới hoặc chọn ứng dụng có sẵn
3. Vào **Quản lý ứng dụng** → **Cấu hình** → **OA**
4. Copy **Access Token**

#### Lấy User ID:
1. Vào **Quản lý ứng dụng** → **Cấu hình** → **OA**
2. Copy **User ID** của bạn (admin)

#### Cập nhật file `backend.js`:
```javascript
const OA_ACCESS_TOKEN = 'YOUR_ACTUAL_ACCESS_TOKEN'; // Thay bằng token thật
const ADMIN_USER_ID = 'YOUR_ACTUAL_USER_ID'; // Thay bằng user ID thật
```

### Bước 4: Cấu hình Email (Gmail)

#### Tạo App Password:
1. Đăng nhập Gmail
2. Vào **Quản lý tài khoản Google**
3. **Bảo mật** → **Xác minh 2 bước** (bật nếu chưa)
4. **Mật khẩu ứng dụng** → **Tạo mật khẩu ứng dụng**
5. Chọn **Ứng dụng khác** → Đặt tên: "Bio Amida"
6. Copy mật khẩu được tạo

#### Cập nhật file `backend.js`:
```javascript
const EMAIL_CONFIG = {
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com', // Email Gmail của bạn
        pass: 'your-16-digit-app-password' // Mật khẩu ứng dụng 16 ký tự
    }
};
```

## 🚀 Khởi Chạy

### Chế độ Development:
```bash
npm run dev
```

### Chế độ Production:
```bash
npm start
```

### Kiểm tra server:
```bash
curl http://localhost:3000/api/health
```

## 📱 Cách Hoạt Động

### 1. Khách hàng đăng ký
- Điền form → Nhấn "Đăng ký tư vấn"
- Hiển thị loading "Đang gửi..."

### 2. Backend xử lý
- Nhận dữ liệu từ frontend
- Gửi tin nhắn Zalo (nếu có cấu hình)
- Gửi email thông báo (nếu có cấu hình)
- Trả về kết quả

### 3. Frontend hiển thị
- Thành công: "Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất."
- Lỗi: "Có lỗi xảy ra, vui lòng thử lại."
- Fallback: Mở Zalo OA nếu server không hoạt động

## 🔍 Kiểm Tra Hoạt Động

### Test API:
```bash
curl -X POST http://localhost:3000/api/zalo-register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Nguyễn Văn A",
    "email": "test@example.com",
    "phone": "0123456789",
    "area": "Hà Nội"
  }'
```

### Kiểm tra logs:
```bash
# Terminal sẽ hiển thị:
✅ Gửi tin nhắn Zalo thành công
✅ Gửi email thông báo thành công
```

## 🛠️ Tùy Chỉnh

### Thay đổi nội dung tin nhắn Zalo:
```javascript
// Trong backend.js
const zaloMessage = `🔔 ĐĂNG KÝ TƯ VẤN MỚI
// Thay đổi nội dung ở đây
`;
```

### Thay đổi template email:
```javascript
// Trong backend.js
const emailContent = `
    <div style="font-family: Arial, sans-serif;">
        // Thay đổi HTML template ở đây
    </div>
`;
```

### Thay đổi URL server:
```javascript
// Trong main.js
fetch('http://localhost:3000/api/zalo-register', {
    // Thay đổi URL nếu deploy lên server khác
});
```

## 🔒 Bảo Mật

### Environment Variables (Khuyến nghị):
Tạo file `.env`:
```env
ZALO_OA_ACCESS_TOKEN=your_access_token
ZALO_ADMIN_USER_ID=your_user_id
GMAIL_USER=your-email@gmail.com
GMAIL_PASS=your-app-password
```

Cập nhật `backend.js`:
```javascript
require('dotenv').config();

const OA_ACCESS_TOKEN = process.env.ZALO_OA_ACCESS_TOKEN;
const ADMIN_USER_ID = process.env.ZALO_ADMIN_USER_ID;
const EMAIL_CONFIG = {
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
};
```

Cài đặt dotenv:
```bash
npm install dotenv
```

## 🚀 Deploy

### Deploy lên VPS:
1. Upload code lên server
2. Cài đặt Node.js
3. Chạy `npm install`
4. Cấu hình environment variables
5. Chạy `npm start`

### Deploy lên Heroku:
1. Tạo app Heroku
2. Connect GitHub repository
3. Cấu hình environment variables trong Heroku dashboard
4. Deploy

### Deploy lên Vercel:
1. Import project vào Vercel
2. Cấu hình environment variables
3. Deploy

## 🐛 Troubleshooting

### Lỗi Zalo API:
- Kiểm tra Access Token có đúng không
- Kiểm tra User ID có đúng không
- Kiểm tra OA có được kích hoạt không

### Lỗi Email:
- Kiểm tra mật khẩu ứng dụng Gmail
- Bật "Less secure app access" (nếu cần)
- Kiểm tra 2FA có bật không

### Lỗi CORS:
- Đảm bảo đã cài đặt và cấu hình CORS
- Kiểm tra domain frontend có được cho phép không

### Lỗi Kết Nối:
- Kiểm tra server có đang chạy không
- Kiểm tra port 3000 có bị block không
- Kiểm tra firewall

## 📞 Hỗ Trợ

Nếu gặp vấn đề:
1. Kiểm tra logs trong terminal
2. Kiểm tra console browser
3. Test API bằng Postman/curl
4. Kiểm tra cấu hình Zalo OA và Gmail

## 🔄 Cập Nhật Tương Lai

- [ ] Thêm database để lưu trữ đăng ký
- [ ] Thêm dashboard quản lý
- [ ] Thêm SMS notification
- [ ] Thêm webhook cho các platform khác
- [ ] Thêm analytics và báo cáo 