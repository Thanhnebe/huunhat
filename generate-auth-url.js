// Script tạo Authorization URL cho Zalo OAuth
// Sử dụng: node generate-auth-url.js

const ZALO_APP_ID = '3635930658555273743';
const REDIRECT_URI = 'https://huunhat.vercel.app/api/zalo/callback';

function generateAuthUrl() {
    console.log('🔗 Tạo Authorization URL cho Zalo OAuth...\n');

    // Encode redirect URI
    const encodedRedirectUri = encodeURIComponent(REDIRECT_URI);

    // Tạo authorization URL
    const authUrl = `https://oauth.zaloapp.com/v4/oa/permission?app_id=${ZALO_APP_ID}&redirect_uri=${encodedRedirectUri}`;

    console.log('📋 Thông tin cấu hình:');
    console.log(`   App ID: ${ZALO_APP_ID}`);
    console.log(`   Redirect URI: ${REDIRECT_URI}`);
    console.log(`   Encoded Redirect URI: ${encodedRedirectUri}\n`);

    console.log('🔗 Authorization URL:');
    console.log(authUrl);
    console.log('\n📋 Hướng dẫn sử dụng:');
    console.log('1. Copy URL trên');
    console.log('2. Gửi cho admin của Zalo OA 3416749500273400315');
    console.log('3. Admin truy cập URL và cấp quyền');
    console.log('4. Sau khi cấp quyền, admin sẽ được redirect về callback URL');
    console.log('5. Hệ thống sẽ tự động lấy access token');
    console.log('6. Copy access token và cập nhật vào environment variables');

    console.log('\n⚠️  Lưu ý:');
    console.log('- Đảm bảo đã cấu hình ZALO_APP_SECRET trong .env.local');
    console.log('- Callback URL phải khớp với cấu hình trong Zalo Developer Console');
    console.log('- Access token có thời hạn, cần refresh định kỳ');

    return authUrl;
}

// Chạy script
const authUrl = generateAuthUrl();

// Export để sử dụng trong file khác
module.exports = { generateAuthUrl, ZALO_APP_ID, REDIRECT_URI }; 