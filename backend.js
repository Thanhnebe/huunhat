const express = require('express');
const axios = require('axios');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Serve static files
app.use(express.static('.'));
app.use('/images', express.static('images'));
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));

// Cấu hình Zalo OA
const ZALO_CONFIG = {
    app_id: process.env.ZALO_APP_ID,
    app_secret: process.env.ZALO_APP_SECRET,
    oa_id: process.env.ZALO_OA_ID,
    access_token: process.env.ZALO_ACCESS_TOKEN,
    admin_user_id: process.env.ZALO_ADMIN_USER_ID
};


// Tạo transporter email
const transporter = nodemailer.createTransport(EMAIL_CONFIG);

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
        if (ZALO_CONFIG.access_token !== 'YOUR_OA_ACCESS_TOKEN' && ZALO_CONFIG.admin_user_id !== 'USER_ID_ADMIN') {
            try {
                await axios.post('https://openapi.zalo.me/v2.0/oa/message', {
                    recipient: { user_id: ZALO_CONFIG.admin_user_id },
                    message: { text: zaloMessage }
                }, {
                    headers: {
                        'access_token': ZALO_CONFIG.access_token,
                        'Content-Type': 'application/json'
                    }
                });
                console.log('✅ Gửi tin nhắn Zalo thành công');
            } catch (zaloError) {
                console.log('❌ Lỗi gửi tin nhắn Zalo:', zaloError.message);
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

// Serve trang chủ
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// API callback cho Zalo OA
app.get('/api/zalo/callback', (req, res) => {
    const { code, state } = req.query;

    console.log('🔔 Zalo callback received:', { code, state });

    // Xử lý authorization code từ Zalo
    if (code) {
        // Lưu code để đổi lấy access token
        console.log('✅ Authorization code received:', code);
        res.json({
            success: true,
            message: 'Authorization successful',
            code: code
        });
    } else {
        res.status(400).json({
            error: 'No authorization code received'
        });
    }
});

// API để đổi authorization code lấy access token
app.post('/api/zalo/token', async (req, res) => {
    const { code } = req.body;

    if (!code) {
        return res.status(400).json({ error: 'Authorization code required' });
    }

    try {
        const response = await axios.post('https://oauth.zaloapp.com/v4/access_token', {
            app_id: '3635930658555273743', // App ID của bạn
            app_secret: ZALO_CONFIG.app_secret, // App Secret của bạn
            code: code,
            grant_type: 'authorization_code'
        });

        console.log('✅ Access token received:', response.data);
        res.json(response.data);

    } catch (error) {
        console.error('❌ Error getting access token:', error.response?.data || error.message);
        res.status(500).json({
            error: 'Failed to get access token',
            details: error.response?.data || error.message
        });
    }
});

// API kiểm tra trạng thái server
app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        services: {
            zalo: ZALO_CONFIG.access_token !== 'YOUR_OA_ACCESS_TOKEN'
        }
    });
});

// Export app cho Vercel serverless
module.exports = app;

// Chỉ chạy server khi không phải Vercel
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`🚀 Server đang chạy trên port ${PORT}`);
        console.log(`📧 Email: ${EMAIL_CONFIG.auth.user !== 'your-email@gmail.com' ? 'Đã cấu hình' : 'Chưa cấu hình'}`);
        console.log(`💬 Zalo: ${ZALO_CONFIG.access_token !== 'YOUR_OA_ACCESS_TOKEN' ? 'Đã cấu hình' : 'Chưa cấu hình'}`);
    });
}