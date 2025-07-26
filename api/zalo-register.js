// Vercel Serverless Function - Tự động gửi tin nhắn Zalo
export default async function handler(req, res) {
    // Chỉ cho phép POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    try {
        const { name, email, phone, area } = req.body;

        // Tạo tin nhắn cho Zalo
        const zaloMessage = `🔔 ĐĂNG KÝ TƯ VẤN MỚI

👤 Họ và tên: ${name}
📧 Email: ${email}
📱 Số điện thoại: ${phone}
📍 Khu vực: ${area}

💬 Khách hàng muốn được tư vấn về sản phẩm Bio Amida và cơ hội kinh doanh.

⏰ Thời gian: ${new Date().toLocaleString('vi-VN')}`;

        // Cấu hình Zalo OA (thay bằng thông tin thật của bạn)
        const ZALO_OA_ID = '3416749500273400315'; // OA ID của bạn
        const ZALO_ACCESS_TOKEN = process.env.ZALO_ACCESS_TOKEN || 'YOUR_ACTUAL_ACCESS_TOKEN_HERE'; // Thay bằng token thật

        // Gửi tin nhắn đến Zalo OA
        if (ZALO_ACCESS_TOKEN) {
            try {
                const response = await fetch('https://openapi.zalo.me/v2.0/oa/message', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'access_token': ZALO_ACCESS_TOKEN
                    },
                    body: JSON.stringify({
                        recipient: {
                            user_id: ZALO_OA_ID
                        },
                        message: {
                            text: zaloMessage
                        }
                    })
                });

                if (response.ok) {
                    console.log('✅ Gửi tin nhắn Zalo thành công');
                } else {
                    console.log('❌ Lỗi gửi tin nhắn Zalo:', response.status);
                }
            } catch (error) {
                console.log('❌ Lỗi kết nối Zalo:', error.message);
            }
        }

        // Gửi email thông báo (tùy chọn)
        const EMAIL_SERVICE = process.env.EMAIL_SERVICE;
        if (EMAIL_SERVICE === 'sendgrid' && process.env.SENDGRID_API_KEY) {
            try {
                const emailResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        personalizations: [{
                            to: [{ email: process.env.ADMIN_EMAIL }]
                        }],
                        from: { email: process.env.FROM_EMAIL },
                        subject: '🔔 Đăng Ký Tư Vấn Mới - Bio Amida',
                        content: [{
                            type: 'text/html',
                            value: `
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
                            `
                        }]
                    })
                });

                if (emailResponse.ok) {
                    console.log('✅ Gửi email thông báo thành công');
                } else {
                    console.log('❌ Lỗi gửi email:', emailResponse.status);
                }
            } catch (error) {
                console.log('❌ Lỗi kết nối email:', error.message);
            }
        }

        // Trả về kết quả thành công
        return res.status(200).json({
            success: true,
            message: 'Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.',
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        console.error('❌ Lỗi xử lý đăng ký:', error);
        return res.status(500).json({
            error: 'Có lỗi xảy ra, vui lòng thử lại sau.',
            details: error.message
        });
    }
} 