# 🚀 Hướng Dẫn Cấu Hình Gửi Tin Nhắn Zalo Tự Động

## 🎯 Mục Tiêu
Tự động gửi tin nhắn đến Zalo OA khi có đăng ký tư vấn, **không cần người dùng nhấn "Gửi"**.

## ✅ Tính Năng Đã Tích Hợp

### 🔔 **Gửi Tin Nhắn Tự Động**
- Tin nhắn được gửi trực tiếp đến Zalo OA
- Không cần mở app Zalo
- Không cần người dùng nhấn "Gửi"

### 📧 **Email Thông Báo (Tùy chọn)**
- Gửi email thông báo đến admin
- Sử dụng SendGrid (miễn phí)

### 🔄 **Fallback System**
- Nếu server không hoạt động → Mở Zalo OA
- Đảm bảo luôn có cách liên hệ

## 🔧 Cấu Hình Zalo OA API

### Bước 1: Lấy Access Token
1. Đăng nhập [Zalo Developers](https://developers.zalo.me/)
2. Tạo ứng dụng mới hoặc chọn ứng dụng có sẵn
3. Vào **Quản lý ứng dụng** → **Cấu hình** → **OA**
4. Copy **Access Token**

### Bước 2: Cấu Hình Vercel Environment Variables

#### Cách 1: Qua Vercel Dashboard
1. Vào [Vercel Dashboard](https://vercel.com/dashboard)
2. Chọn project của bạn
3. Vào **Settings** → **Environment Variables**
4. Thêm các biến sau:

```
ZALO_ACCESS_TOKEN = your_zalo_access_token_here
EMAIL_SERVICE = sendgrid
SENDGRID_API_KEY = your_sendgrid_api_key
ADMIN_EMAIL = your-email@gmail.com
FROM_EMAIL = your-email@gmail.com
```

#### Cách 2: Qua Vercel CLI
```bash
vercel env add ZALO_ACCESS_TOKEN
vercel env add EMAIL_SERVICE
vercel env add SENDGRID_API_KEY
vercel env add ADMIN_EMAIL
vercel env add FROM_EMAIL
```

## 📧 Cấu Hình Email (Tùy Chọn)

### Sử Dụng SendGrid (Miễn Phí)
1. Đăng ký [SendGrid](https://sendgrid.com/) (100 email/ngày miễn phí)
2. Tạo API Key
3. Thêm vào environment variables

### Hoặc Sử Dụng EmailJS (Đơn Giản Hơn)
Thay thế phần email trong `api/zalo-register.js`:

```javascript
// Gửi email qua EmailJS
if (process.env.EMAILJS_SERVICE_ID) {
    const emailjsUrl = `https://api.emailjs.com/api/v1.0/email/send`;
    const emailjsData = {
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_USER_ID,
        template_params: {
            to_email: process.env.ADMIN_EMAIL,
            from_name: name,
            from_email: email,
            from_phone: phone,
            from_area: area,
            message: zaloMessage
        }
    };
    
    await fetch(emailjsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailjsData)
    });
}
```

## 🚀 Deploy Lên Vercel

### Bước 1: Push Code
```bash
git add .
git commit -m "Add auto Zalo messaging"
git push
```

### Bước 2: Deploy
```bash
vercel --prod
```

### Bước 3: Kiểm Tra
Truy cập: `https://your-domain.vercel.app/api/zalo-register`

## 🔍 Test Hệ Thống

### Test API Trực Tiếp:
```bash
curl -X POST https://your-domain.vercel.app/api/zalo-register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Nguyễn Văn A",
    "email": "test@example.com",
    "phone": "0123456789",
    "area": "Hà Nội"
  }'
```

### Test Từ Website:
1. Mở website
2. Điền form đăng ký
3. Nhấn "Đăng ký tư vấn"
4. Kiểm tra Zalo OA có nhận tin nhắn không

## 📱 Cách Hoạt Động

### 1. Khách hàng đăng ký
- Điền form → Nhấn "Đăng ký tư vấn"
- Hiển thị loading "Đang gửi..."

### 2. Serverless Function xử lý
- Nhận dữ liệu từ frontend
- Gửi tin nhắn đến Zalo OA qua API
- Gửi email thông báo (nếu có cấu hình)

### 3. Kết quả
- Tin nhắn xuất hiện trong Zalo OA
- Email thông báo đến admin
- Frontend hiển thị "Đăng ký thành công!"

## 🐛 Troubleshooting

### Lỗi Zalo API:
- Kiểm tra Access Token có đúng không
- Kiểm tra OA có được kích hoạt không
- Kiểm tra quyền gửi tin nhắn

### Lỗi Email:
- Kiểm tra SendGrid API Key
- Kiểm tra email đã được verify chưa
- Kiểm tra quota (giới hạn gửi)

### Lỗi Deploy:
- Kiểm tra environment variables
- Kiểm tra Vercel logs
- Kiểm tra function timeout

## 🔒 Bảo Mật

### Environment Variables:
- Không commit token vào code
- Sử dụng Vercel environment variables
- Rotate token định kỳ

### Rate Limiting:
- Giới hạn số request/phút
- Validate dữ liệu đầu vào
- Log các request để theo dõi

## 📊 Monitoring

### Vercel Analytics:
- Theo dõi function performance
- Kiểm tra error rate
- Monitor response time

### Custom Logging:
```javascript
console.log(`✅ Đăng ký thành công: ${name} - ${phone}`);
console.log(`📧 Email: ${email}`);
console.log(`📍 Khu vực: ${area}`);
```

## 🔄 Nâng Cấp Tương Lai

- [ ] Thêm database lưu trữ đăng ký
- [ ] Thêm dashboard quản lý
- [ ] Thêm SMS notification
- [ ] Thêm chatbot tự động
- [ ] Thêm analytics chi tiết

## 🎉 Kết Quả

Sau khi cấu hình xong:
- ✅ **Tin nhắn tự động gửi** đến Zalo OA
- ✅ **Email thông báo** đến admin
- ✅ **Không cần người dùng** nhấn "Gửi"
- ✅ **Hoạt động 24/7** trên Vercel
- ✅ **Fallback system** đảm bảo tin cậy

**Hệ thống đã sẵn sàng nhận đăng ký và tự động thông báo!** 🚀 