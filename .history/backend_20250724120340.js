const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const OA_ACCESS_TOKEN = 'YOUR_OA_ACCESS_TOKEN'; // Lấy trong trang quản trị OA
const ADMIN_USER_ID = 'USER_ID_ADMIN'; // Lấy user_id của bạn (admin OA)

app.post('/api/zalo-register', async (req, res) => {
    const { name, email, phone, area } = req.body;
    const message = `Đăng ký tư vấn:\nHọ tên: ${name}\nEmail: ${email}\nSĐT: ${phone}\nKhu vực: ${area}`;
    try {
        await axios.post('https://openapi.zalo.me/v2.0/oa/message', {
            recipient: { user_id: ADMIN_USER_ID },
            message: { text: message }
        }, {
            headers: {
                'access_token': OA_ACCESS_TOKEN,
                'Content-Type': 'application/json'
            }
        });
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: 'Gửi tin nhắn thất bại' });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));