# 🔐 Hướng Dẫn Lấy Zalo Access Token

## 📋 Bước 1: Cấu Hình App Secret

### Lấy App Secret:
1. Trong Zalo Developers, vào **"Tổng quan"** → **"Cài đặt"**
2. Tìm **"App Secret"** và copy
3. Thêm vào Vercel Environment Variables:
   - **Name**: `ZALO_APP_SECRET`
   - **Value**: `your_app_secret_here`

## 🚀 Bước 2: Deploy Callback Endpoint

### Deploy lên Vercel:
```bash
git add .
git commit -m "Add Zalo OAuth callback"
git push
vercel --prod
```

## 🔗 Bước 3: Cấp Quyền Cho Ứng Dụng

### 1. Copy URL Cấp Quyền:
Từ trang Zalo Developers, copy URL:
```
https://oauth.zaloapp.com/v4/oa/permission?app_id=3635930658555273743&redirect_uri=https%3A%2F%2Fhuunhat.vercel.app%2Fzalo%2Fcallback
```

### 2. Mở URL Trong Browser:
- Mở tab mới
- Paste URL vào address bar
- Nhấn Enter

### 3. Đăng Nhập Và Cấp Quyền:
- Đăng nhập bằng tài khoản Zalo OA của bạn
- Nhấn **"Đồng ý"** để cấp quyền

## 🎯 Bước 4: Lấy Access Token

### Sau khi cấp quyền:
1. Bạn sẽ được chuyển về: `https://huunhat.vercel.app/zalo/callback`
2. Trang sẽ hiển thị **Access Token**
3. **Copy token** này

## ⚙️ Bước 5: Cấu Hình Vercel

### Thêm Environment Variable:
1. Vào [Vercel Dashboard](https://vercel.com/dashboard)
2. Chọn project của bạn
3. Vào **Settings** → **Environment Variables**
4. Thêm:
   - **Name**: `ZALO_ACCESS_TOKEN`
   - **Value**: `your_access_token_here` (token vừa copy)
   - **Environment**: Production, Preview, Development

## 🧪 Bước 6: Test Hệ Thống

### Test API:
```bash
curl -X POST https://huunhat.vercel.app/api/zalo-register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
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

## 🔄 Refresh Token

### Access Token có thời hạn, cần refresh:
1. Sử dụng **Refresh Token** để lấy Access Token mới
2. Hoặc cấp quyền lại theo bước 3

## 🐛 Troubleshooting

### Lỗi "Không có authorization code":
- Kiểm tra callback URL có đúng không
- Đảm bảo đã cấp quyền thành công

### Lỗi "App Secret không đúng":
- Kiểm tra App Secret trong Vercel
- Đảm bảo App Secret đúng với ứng dụng

### Lỗi "Access Token không hợp lệ":
- Token đã hết hạn, cần refresh
- Hoặc cấp quyền lại

## 📱 Kết Quả

Sau khi hoàn thành:
- ✅ **Access Token** đã được tạo
- ✅ **Hệ thống** có thể gửi tin nhắn tự động
- ✅ **Không cần** người dùng nhấn "Gửi"

## 🔒 Bảo Mật

### Lưu Ý quan trọng:
- **Không chia sẻ** Access Token
- **Không commit** token vào code
- **Refresh token** định kỳ
- **Backup** token để tránh mất

## 🎉 Hoàn Thành!

Bây giờ bạn đã có Access Token và hệ thống sẵn sàng gửi tin nhắn tự động! 🚀 