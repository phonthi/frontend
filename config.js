// ไฟล์กำหนดค่าคงที่สำหรับระบบ

// กำหนด URL ของ Backend API
const API_BASE_URL = 'https://back-end-pj.vercel.app';

// สร้างฟังก์ชันสำหรับการเรียก API endpoints
function getEndpoint(path) {
  return `${API_BASE_URL}${path}`;
}