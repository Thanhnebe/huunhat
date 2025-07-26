// Test Zalo Access Token
const testZaloToken = async () => {
    const ZALO_ACCESS_TOKEN = 'YOUR_ACTUAL_ACCESS_TOKEN_HERE'; // Thay bằng token thật

    try {
        // Test API Zalo
        const response = await fetch('https://openapi.zalo.me/v2.0/oa/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'access_token': ZALO_ACCESS_TOKEN
            },
            body: JSON.stringify({
                recipient: {
                    user_id: '3416749500273400315' // OA ID của bạn
                },
                message: {
                    text: '🔔 Test tin nhắn từ website Bio Amida'
                }
            })
        });

        const result = await response.json();

        if (response.ok) {
            console.log('✅ Token hoạt động tốt!');
            console.log('Kết quả:', result);
        } else {
            console.log('❌ Token không hoạt động');
            console.log('Lỗi:', result);
        }

    } catch (error) {
        console.log('❌ Lỗi kết nối:', error.message);
    }
};

// Chạy test
testZaloToken(); 