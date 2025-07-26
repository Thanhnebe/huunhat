const express = require('express');
const axios = require('axios');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Cấu hình Zalo OA
const OA_ACCESS_TOKEN = 'YOUR_OA_ACCESS_TOKEN'; // Lấy trong trang quản trị OA
const ADMIN_USER_ID = 'USER_ID_ADMIN'; // Lấy user_id của bạn (admin OA)

// Cấu hình Email (Gmail)
const EMAIL_CONFIG = {
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com', // Email của bạn
        pass: 'your-app-password' // Mật khẩu ứng dụng Gmail
    }
};

// Tạo transporter email
const transporter = nodemailer.createTransporter(EMAIL_CONFIG);

// API gửi đăng ký tư vấn
app.post('/api/zalo-register', async (req, res) => {
    const { name, email, phone, area } = req.body;

    // Tạo tin nhắn cho Zalo
    const zaloMessage = `🔔 ĐĂNG KÝ TƯ VẤN MỚI

👤 Họ và tên: ${name}
📧 Email: ${email}
📱 Số điện thoại: ${phone}
📍 Khu vực: ${area}

💬 Khách hàng muốn được tư vấn về sản phẩm Bio Amida và cơ hội kinh doanh.

⏰ Thời gian: ${new Date().toLocaleString('vi-VN')}`;

    // Tạo nội dung email
    const emailSubject = '🔔 Đăng Ký Tư Vấn Mới - Bio Amida';
    const emailContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2c3e50;">🔔 ĐĂNG KÝ TƯ VẤN MỚI</h2>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>👤 Họ và tên:</strong> ${name}</p>
                <p><strong>📧 Email:</strong> ${email}</p>
                <p><strong>📱 Số điện thoại:</strong> ${phone}</p>
                <p><strong>📍 Khu vực:</strong> ${area}</p>
                <p><strong>⏰ Thời gian:</strong> ${new Date().toLocaleString('vi-VN')}</p>
            </div>
            <p><strong>💬 Nhu cầu:</strong> Khách hàng muốn được tư vấn về sản phẩm Bio Amida và cơ hội kinh doanh.</p>
            <hr style="margin: 20px 0;">
            <p style="color: #7f8c8d; font-size: 12px;">
                Tin nhắn này được gửi tự động từ website Bio Amida.<br>
                Vui lòng liên hệ khách hàng trong thời gian sớm nhất.
            </p>
        </div>
    `;

    try {
        // Gửi tin nhắn Zalo (nếu có cấu hình)
        if (OA_ACCESS_TOKEN !== 'YOUR_OA_ACCESS_TOKEN' && ADMIN_USER_ID !== 'USER_ID_ADMIN') {
            try {
                await axios.post('https://openapi.zalo.me/v2.0/oa/message', {
                    recipient: { user_id: ADMIN_USER_ID },
                    message: { text: zaloMessage }
                }, {
                    headers: {
                        'access_token': OA_ACCESS_TOKEN,
                        'Content-Type': 'application/json'
                    }
                });
                console.log('✅ Gửi tin nhắn Zalo thành công');
            } catch (zaloError) {
                console.log('❌ Lỗi gửi tin nhắn Zalo:', zaloError.message);
            }
        }

        // Gửi email thông báo
        if (EMAIL_CONFIG.auth.user !== 'your-email@gmail.com') {
            try {
                await transporter.sendMail({
                    from: EMAIL_CONFIG.auth.user,
                    to: EMAIL_CONFIG.auth.user, // Gửi cho chính mình
                    subject: emailSubject,
                    html: emailContent
                });
                console.log('✅ Gửi email thông báo thành công');
            } catch (emailError) {
                console.log('❌ Lỗi gửi email:', emailError.message);
            }
        }

        res.json({
            success: true,
            message: 'Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.',
            timestamp: new Date().toISOString()
        });

    } catch (err) {
        console.error('❌ Lỗi xử lý đăng ký:', err);
        res.status(500).json({
            error: 'Có lỗi xảy ra, vui lòng thử lại sau.',
            details: err.message
        });
    }
});

// API kiểm tra trạng thái server
app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        services: {
            zalo: OA_ACCESS_TOKEN !== 'YOUR_OA_ACCESS_TOKEN',
            email: EMAIL_CONFIG.auth.user !== 'your-email@gmail.com'
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server đang chạy trên port ${PORT}`);
    console.log(`📧 Email: ${EMAIL_CONFIG.auth.user !== 'your-email@gmail.com' ? 'Đã cấu hình' : 'Chưa cấu hình'}`);
    console.log(`💬 Zalo: ${OA_ACCESS_TOKEN !== 'YOUR_OA_ACCESS_TOKEN' ? 'Đã cấu hình' : 'Chưa cấu hình'}`);
});