// Zalo OAuth Callback Handler - /api/zalo-callback
export default async function handler(req, res) {
    const { code, state } = req.query;

    if (!code) {
        return res.status(400).json({ error: 'Không có authorization code' });
    }

    try {
        // Đổi code lấy access token
        const tokenResponse = await fetch('https://oauth.zaloapp.com/v4/access_token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                app_id: '3635930658555273743', // App ID của bạn
                app_secret: process.env.ZALO_APP_SECRET, // App Secret
                code: code,
                grant_type: 'authorization_code'
            })
        });

        const tokenData = await tokenResponse.json();

        if (tokenData.access_token) {
            // Lưu access token (trong production nên lưu vào database)
            console.log('✅ Access Token:', tokenData.access_token);
            console.log('✅ Refresh Token:', tokenData.refresh_token);

            // Trả về trang thành công
            res.setHeader('Content-Type', 'text/html');
            res.status(200).send(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Zalo OA - Cấp Quyền Thành Công</title>
                    <style>
                        body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
                        .success { color: #4CAF50; font-size: 24px; }
                        .token { background: #f5f5f5; padding: 20px; margin: 20px; border-radius: 5px; word-break: break-all; }
                        .copy-btn { background: #2196F3; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; }
                    </style>
                </head>
                <body>
                    <div class="success">✅ Cấp Quyền Thành Công!</div>
                    <p>Access Token đã được tạo. Vui lòng copy token này và cấu hình vào Vercel:</p>
                    <div class="token">
                        <strong>Access Token:</strong><br>
                        ${tokenData.access_token}
                        <br><br>
                        <button class="copy-btn" onclick="copyToken()">Copy Token</button>
                    </div>
                    <p><strong>Lưu ý:</strong> Token này có thời hạn, cần refresh định kỳ.</p>
                    
                    <script>
                        function copyToken() {
                            navigator.clipboard.writeText('${tokenData.access_token}');
                            alert('Đã copy Access Token!');
                        }
                    </script>
                </body>
                </html>
            `);
        } else {
            throw new Error('Không nhận được access token');
        }

    } catch (error) {
        console.error('❌ Lỗi xử lý callback:', error);
        res.setHeader('Content-Type', 'text/html');
        res.status(500).send(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Lỗi - Zalo OA</title>
                <style>
                    body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
                    .error { color: #f44336; font-size: 24px; }
                </style>
            </head>
            <body>
                <div class="error">❌ Có Lỗi Xảy Ra</div>
                <p>Vui lòng thử lại hoặc liên hệ hỗ trợ.</p>
                <p>Lỗi: ${error.message}</p>
            </body>
            </html>
        `);
    }
} 