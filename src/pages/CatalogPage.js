// CatalogPage.jsx
import React, { useState } from 'react';
import './CatalogPage.css';

const CatalogPage = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [catalogImages, setCatalogImages] = useState([]);

  // Partner brands with their catalog images
  const partnersCatalog = {
    'VGUARD': {
      images: [
        'https://images.pexels.com/photos/1457852/pexels-photo-1457852.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/206243/pexels-photo-206243.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/2808105/pexels-photo-2808105.jpeg?auto=compress&cs=tinysrgb&w=600',
      ]
    },
'JAQUAR': {
  images: [
    'https://i.postimg.cc/ZqXMjS64/CG-VOL-22-2026-27-Web-images-0.jpg',
    'https://i.postimg.cc/1zbjMQDS/CG-VOL-22-2026-27-Web-images-1.jpg',
    'https://i.postimg.cc/cJPbTSfZ/CG-VOL-22-2026-27-Web-images-2.jpg',
    'https://i.postimg.cc/VN2V48Xz/CG-VOL-22-2026-27-Web-images-3.jpg',
    'https://i.postimg.cc/sXS0NN4q/CG-VOL-22-2026-27-Web-images-4.jpg',
    'https://i.postimg.cc/1t6Yjjrk/CG-VOL-22-2026-27-Web-images-5.jpg',
    'https://i.postimg.cc/tTPmMMz0/CG-VOL-22-2026-27-Web-images-6.jpg',
    'https://i.postimg.cc/cHY5bbcG/CG-VOL-22-2026-27-Web-images-7.jpg',
    'https://i.postimg.cc/xCHF44PS/CG-VOL-22-2026-27-Web-images-8.jpg',
    'https://i.postimg.cc/cHY5bbcW/CG-VOL-22-2026-27-Web-images-9.jpg',
    'https://i.postimg.cc/mDM655SB/CG-VOL-22-2026-27-Web-images-10.jpg',
    'https://i.postimg.cc/Hx5PhhtT/CG-VOL-22-2026-27-Web-images-11.jpg',
    'https://i.postimg.cc/3RpbccZx/CG-VOL-22-2026-27-Web-images-12.jpg',
    'https://i.postimg.cc/qRnZ55Gq/CG-VOL-22-2026-27-Web-images-13.jpg',
    'https://i.postimg.cc/pT8166B5/CG-VOL-22-2026-27-Web-images-14.jpg',
    'https://i.postimg.cc/C1D6QQ4f/CG-VOL-22-2026-27-Web-images-15.jpg',
    'https://i.postimg.cc/pT8166Bj/CG-VOL-22-2026-27-Web-images-16.jpg',
    'https://i.postimg.cc/KzLsHH5L/CG-VOL-22-2026-27-Web-images-17.jpg',
    'https://i.postimg.cc/NMTPzzxm/CG-VOL-22-2026-27-Web-images-18.jpg',
    'https://i.postimg.cc/mks6fydk/CG-VOL-22-2026-27-Web-images-19.jpg',
    'https://i.postimg.cc/3NTb5FLW/CG-VOL-22-2026-27-Web-images-20.jpg',
    'https://i.postimg.cc/D0TYkPCS/CG-VOL-22-2026-27-Web-images-21.jpg',
    'https://i.postimg.cc/4ygFkQ8K/CG-VOL-22-2026-27-Web-images-22.jpg',
    'https://i.postimg.cc/wMpb8QWy/CG-VOL-22-2026-27-Web-images-23.jpg',
    'https://i.postimg.cc/hvB3W1CQ/CG-VOL-22-2026-27-Web-images-24.jpg',
    'https://i.postimg.cc/PJjFsQ6D/CG-VOL-22-2026-27-Web-images-25.jpg',
    'https://i.postimg.cc/HngPD9S5/CG-VOL-22-2026-27-Web-images-26.jpg',
    'https://i.postimg.cc/Bb0w9Bh2/CG-VOL-22-2026-27-Web-images-27.jpg',
    'https://i.postimg.cc/Kj2sSD9n/CG-VOL-22-2026-27-Web-images-28.jpg',
    'https://i.postimg.cc/SRhtFfZr/CG-VOL-22-2026-27-Web-images-29.jpg',
    'https://i.postimg.cc/j2bk048v/CG-VOL-22-2026-27-Web-images-30.jpg',
    'https://i.postimg.cc/D0TYkPCB/CG-VOL-22-2026-27-Web-images-31.jpg',
    'https://i.postimg.cc/zvrPZFdx/CG-VOL-22-2026-27-Web-images-32.jpg',
    'https://i.postimg.cc/gjWBFHMt/CG-VOL-22-2026-27-Web-images-33.jpg',
    'https://i.postimg.cc/J0LdV5T6/CG-VOL-22-2026-27-Web-images-34.jpg',
    'https://i.postimg.cc/PJjFsQ6c/CG-VOL-22-2026-27-Web-images-35.jpg',
    'https://i.postimg.cc/Vv8HQW7H/CG-VOL-22-2026-27-Web-images-36.jpg',
    'https://i.postimg.cc/qqxDk6YG/CG-VOL-22-2026-27-Web-images-37.jpg',
    'https://i.postimg.cc/Hn9vp8Kz/CG-VOL-22-2026-27-Web-images-38.jpg',
    'https://i.postimg.cc/qqxDk6Ym/CG-VOL-22-2026-27-Web-images-39.jpg',
    'https://i.postimg.cc/br9VzSMC/CG-VOL-22-2026-27-Web-images-40.jpg',
    'https://i.postimg.cc/0j0X8K3X/CG-VOL-22-2026-27-Web-images-41.jpg',
    'https://i.postimg.cc/SRf1yY5v/CG-VOL-22-2026-27-Web-images-42.jpg',
    'https://i.postimg.cc/90YgWwK5/CG-VOL-22-2026-27-Web-images-43.jpg',
    'https://i.postimg.cc/90YgWwKH/CG-VOL-22-2026-27-Web-images-44.jpg',
    'https://i.postimg.cc/PJQVtv9f/CG-VOL-22-2026-27-Web-images-45.jpg',
    'https://i.postimg.cc/j243snmS/CG-VOL-22-2026-27-Web-images-46.jpg',
    'https://i.postimg.cc/NG6z8ZMr/CG-VOL-22-2026-27-Web-images-47.jpg',
    'https://i.postimg.cc/66rmVF3R/CG-VOL-22-2026-27-Web-images-48.jpg',
    'https://i.postimg.cc/jqHF6B5P/CG-VOL-22-2026-27-Web-images-49.jpg',
    'https://i.postimg.cc/mZY53KDQ/CG-VOL-22-2026-27-Web-images-50.jpg',
    'https://i.postimg.cc/Y26sNT9z/CG-VOL-22-2026-27-Web-images-51.jpg',
    'https://i.postimg.cc/9XdnPsMB/CG-VOL-22-2026-27-Web-images-52.jpg',
    'https://i.postimg.cc/qBs5cWRj/CG-VOL-22-2026-27-Web-images-53.jpg',
    'https://i.postimg.cc/Y26sNT9y/CG-VOL-22-2026-27-Web-images-54.jpg',
    'https://i.postimg.cc/bYxB04JK/CG-VOL-22-2026-27-Web-images-55.jpg',
    'https://i.postimg.cc/RC7D12Fk/CG-VOL-22-2026-27-Web-images-56.jpg',
    'https://i.postimg.cc/HWwh0Fn1/CG-VOL-22-2026-27-Web-images-57.jpg',
    'https://i.postimg.cc/Yqtyd8GT/CG-VOL-22-2026-27-Web-images-58.jpg',
    'https://i.postimg.cc/hPK32MzH/CG-VOL-22-2026-27-Web-images-59.jpg',
    'https://i.postimg.cc/wT9bwFRY/CG-VOL-22-2026-27-Web-images-60.jpg',
    'https://i.postimg.cc/HsTP638D/CG-VOL-22-2026-27-Web-images-61.jpg',
    'https://i.postimg.cc/9FcNL1wV/CG-VOL-22-2026-27-Web-images-62.jpg',
    'https://i.postimg.cc/vHGS0XxY/CG-VOL-22-2026-27-Web-images-63.jpg',
    'https://i.postimg.cc/X7nDsxBv/CG-VOL-22-2026-27-Web-images-64.jpg',
    'https://i.postimg.cc/X7nDsxBp/CG-VOL-22-2026-27-Web-images-65.jpg',
    'https://i.postimg.cc/wTF4ZJDq/CG-VOL-22-2026-27-Web-images-66.jpg',
    'https://i.postimg.cc/J4KYvJj7/CG-VOL-22-2026-27-Web-images-67.jpg',
    'https://i.postimg.cc/65zbgRCy/CG-VOL-22-2026-27-Web-images-68.jpg',
    'https://i.postimg.cc/Dy5pHs14/CG-VOL-22-2026-27-Web-images-69.jpg',
    'https://i.postimg.cc/VL4ZpMXt/CG-VOL-22-2026-27-Web-images-70.jpg',
    'https://i.postimg.cc/QxSYw5cp/CG-VOL-22-2026-27-Web-images-71.jpg',
    'https://i.postimg.cc/PrKV9Z1b/CG-VOL-22-2026-27-Web-images-72.jpg',
    'https://i.postimg.cc/Yq8DZgQx/CG-VOL-22-2026-27-Web-images-73.jpg',
    'https://i.postimg.cc/NfbCSTRp/CG-VOL-22-2026-27-Web-images-74.jpg',
    'https://i.postimg.cc/3J9fVp2L/CG-VOL-22-2026-27-Web-images-75.jpg',
    'https://i.postimg.cc/Hkxvgxt0/CG-VOL-22-2026-27-Web-images-76.jpg',
    'https://i.postimg.cc/y8dpHdTP/CG-VOL-22-2026-27-Web-images-77.jpg',
    'https://i.postimg.cc/kg4Ym4yj/CG-VOL-22-2026-27-Web-images-78.jpg',
    'https://i.postimg.cc/P5xVjxM2/CG-VOL-22-2026-27-Web-images-79.jpg',
    'https://i.postimg.cc/pLTcHTBG/CG-VOL-22-2026-27-Web-images-80.jpg',
    'https://i.postimg.cc/XYJ1bJg1/CG-VOL-22-2026-27-Web-images-81.jpg',
    'https://i.postimg.cc/vZB2sBvk/CG-VOL-22-2026-27-Web-images-82.jpg',
    'https://i.postimg.cc/g2JtWJK5/CG-VOL-22-2026-27-Web-images-83.jpg',
    'https://i.postimg.cc/8z5XS5HS/CG-VOL-22-2026-27-Web-images-84.jpg',
    'https://i.postimg.cc/2S69D6wY/CG-VOL-22-2026-27-Web-images-85.jpg',
    'https://i.postimg.cc/dV1NY1BJ/CG-VOL-22-2026-27-Web-images-86.jpg',
    'https://i.postimg.cc/NjMCcM4B/CG-VOL-22-2026-27-Web-images-87.jpg',
    'https://i.postimg.cc/YCsnqHXZ/CG-VOL-22-2026-27-Web-images-88.jpg',
    'https://i.postimg.cc/6pmj5XHF/CG-VOL-22-2026-27-Web-images-89.jpg',
    'https://i.postimg.cc/YCsnqHnc/CG-VOL-22-2026-27-Web-images-90.jpg',
    'https://i.postimg.cc/3xcSJTSK/CG-VOL-22-2026-27-Web-images-91.jpg',
    'https://i.postimg.cc/dVxHtYHv/CG-VOL-22-2026-27-Web-images-92.jpg',
    'https://i.postimg.cc/y8bQYHQ1/CG-VOL-22-2026-27-Web-images-93.jpg',
    'https://i.postimg.cc/BnVYQ0YZ/CG-VOL-22-2026-27-Web-images-94.jpg',
    'https://i.postimg.cc/ht5yPByj/CG-VOL-22-2026-27-Web-images-95.jpg',
    'https://i.postimg.cc/nhPRcJRM/CG-VOL-22-2026-27-Web-images-96.jpg',
    'https://i.postimg.cc/4xSLNgLK/CG-VOL-22-2026-27-Web-images-97.jpg',
    'https://i.postimg.cc/4xSLNgLY/CG-VOL-22-2026-27-Web-images-98.jpg',
    'https://i.postimg.cc/zGctXrtH/CG-VOL-22-2026-27-Web-images-99.jpg',
    'https://i.postimg.cc/nhPRcJRm/CG-VOL-22-2026-27-Web-images-100.jpg',
    'https://i.postimg.cc/t4MSCjSP/CG-VOL-22-2026-27-Web-images-101.jpg',
    'https://i.postimg.cc/P5R3rj31/CG-VOL-22-2026-27-Web-images-102.jpg',
    'https://i.postimg.cc/d0ZWhxpD/CG-VOL-22-2026-27-Web-images-103.jpg',
    'https://i.postimg.cc/d0ZWhxp7/CG-VOL-22-2026-27-Web-images-104.jpg',
    'https://i.postimg.cc/YSLXvsZG/CG-VOL-22-2026-27-Web-images-105.jpg',
    'https://i.postimg.cc/3w0LkcV0/CG-VOL-22-2026-27-Web-images-106.jpg',
    'https://i.postimg.cc/CKnvRQXf/CG-VOL-22-2026-27-Web-images-107.jpg',
    'https://i.postimg.cc/jjn8DFmN/CG-VOL-22-2026-27-Web-images-108.jpg',
    'https://i.postimg.cc/fbSHVrpY/CG-VOL-22-2026-27-Web-images-109.jpg',
    'https://i.postimg.cc/q76mN5Ss/CG-VOL-22-2026-27-Web-images-110.jpg',
    'https://i.postimg.cc/0NKtzBFd/CG-VOL-22-2026-27-Web-images-111.jpg',
    'https://i.postimg.cc/wBRW1GZF/CG-VOL-22-2026-27-Web-images-112.jpg',
    'https://i.postimg.cc/g0LMxTQs/CG-VOL-22-2026-27-Web-images-113.jpg',
    'https://i.postimg.cc/hGQCX56C/CG-VOL-22-2026-27-Web-images-114.jpg',
    'https://i.postimg.cc/Dz4CSMHj/CG-VOL-22-2026-27-Web-images-115.jpg',
    'https://i.postimg.cc/3w0LkcVc/CG-VOL-22-2026-27-Web-images-116.jpg',
    'https://i.postimg.cc/s2GnMNqL/CG-VOL-22-2026-27-Web-images-117.jpg',
    'https://i.postimg.cc/JnwpZQCK/CG-VOL-22-2026-27-Web-images-118.jpg',
    'https://i.postimg.cc/Ss0gCGbd/CG-VOL-22-2026-27-Web-images-119.jpg',
    'https://i.postimg.cc/fL48mvQB/CG-VOL-22-2026-27-Web-images-120.jpg',
    'https://i.postimg.cc/cHqFwcGF/CG-VOL-22-2026-27-Web-images-121.jpg',
    'https://i.postimg.cc/hjF2T0RZ/CG-VOL-22-2026-27-Web-images-122.jpg',
    'https://i.postimg.cc/j5VMPhY1/CG-VOL-22-2026-27-Web-images-123.jpg',
    'https://i.postimg.cc/0QgVDC1B/CG-VOL-22-2026-27-Web-images-124.jpg',
    'https://i.postimg.cc/ZRkwpLzg/CG-VOL-22-2026-27-Web-images-125.jpg',
    'https://i.postimg.cc/zBmxKkY6/CG-VOL-22-2026-27-Web-images-126.jpg',
    'https://i.postimg.cc/MTk9VYJh/CG-VOL-22-2026-27-Web-images-127.jpg',
    'https://i.postimg.cc/DZVxLcKV/CG-VOL-22-2026-27-Web-images-128.jpg',
    'https://i.postimg.cc/MTk9VYJC/CG-VOL-22-2026-27-Web-images-129.jpg',
    'https://i.postimg.cc/wvKwLkdY/CG-VOL-22-2026-27-Web-images-130.jpg',
    'https://i.postimg.cc/1txvwKZQ/CG-VOL-22-2026-27-Web-images-131.jpg',
    'https://i.postimg.cc/pTNszBt2/CG-VOL-22-2026-27-Web-images-132.jpg',
    'https://i.postimg.cc/j5VMPhrx/CG-VOL-22-2026-27-Web-images-133.jpg',
    'https://i.postimg.cc/PxGSYMkr/CG-VOL-22-2026-27-Web-images-134.jpg',
    'https://i.postimg.cc/858ZMbVC/CG-VOL-22-2026-27-Web-images-135.jpg',
    'https://i.postimg.cc/C1yck4V1/CG-VOL-22-2026-27-Web-images-136.jpg',
    'https://i.postimg.cc/k4xfctnm/CG-VOL-22-2026-27-Web-images-137.jpg',
    'https://i.postimg.cc/mDQ8wFb4/CG-VOL-22-2026-27-Web-images-138.jpg',
    'https://i.postimg.cc/3RgnBDK8/CG-VOL-22-2026-27-Web-images-139.jpg',
'https://i.postimg.cc/d184BTqQ/CG-VOL-22-2026-27-Web-images-140.jpg',
'https://i.postimg.cc/mDQ8wFbt/CG-VOL-22-2026-27-Web-images-141.jpg',
'https://i.postimg.cc/1tpJHN94/CG-VOL-22-2026-27-Web-images-142.jpg',
'https://i.postimg.cc/ydFvPSVD/CG-VOL-22-2026-27-Web-images-143.jpg',
'https://i.postimg.cc/MTydDjWM/CG-VOL-22-2026-27-Web-images-144.jpg',
'https://i.postimg.cc/nzv0kQHQ/CG-VOL-22-2026-27-Web-images-145.jpg',
'https://i.postimg.cc/B6xMg1qF/CG-VOL-22-2026-27-Web-images-146.jpg',
'https://i.postimg.cc/pTDqZn28/CG-VOL-22-2026-27-Web-images-147.jpg',
'https://i.postimg.cc/ydFvPSVT/CG-VOL-22-2026-27-Web-images-148.jpg',
'https://i.postimg.cc/j2tvkd5w/CG-VOL-22-2026-27-Web-images-149.jpg',
'https://i.postimg.cc/FzNGnsRJ/CG-VOL-22-2026-27-Web-images-150.jpg',
'https://i.postimg.cc/90C1NFM9/CG-VOL-22-2026-27-Web-images-151.jpg',
'https://i.postimg.cc/6qtz153n/CG-VOL-22-2026-27-Web-images-152.jpg',
'https://i.postimg.cc/brpLFNJ1/CG-VOL-22-2026-27-Web-images-153.jpg',
'https://i.postimg.cc/FzNGnsRy/CG-VOL-22-2026-27-Web-images-154.jpg',
'https://i.postimg.cc/Y0M8yq9z/CG-VOL-22-2026-27-Web-images-155.jpg',
'https://i.postimg.cc/6qtz153h/CG-VOL-22-2026-27-Web-images-156.jpg',
'https://i.postimg.cc/T1fQHYw0/CG-VOL-22-2026-27-Web-images-157.jpg',
'https://i.postimg.cc/rsMgYFmg/CG-VOL-22-2026-27-Web-images-158.jpg',
'https://i.postimg.cc/QChSnxtY/CG-VOL-22-2026-27-Web-images-159.jpg',
'https://i.postimg.cc/kGqwhX4h/CG-VOL-22-2026-27-Web-images-160.jpg',
'https://i.postimg.cc/C5SJ6L1Q/CG-VOL-22-2026-27-Web-images-161.jpg',
'https://i.postimg.cc/QChSnxtw/CG-VOL-22-2026-27-Web-images-162.jpg',
'https://i.postimg.cc/fyD5gTLG/CG-VOL-22-2026-27-Web-images-163.jpg',
'https://i.postimg.cc/wMgFbTMY/CG-VOL-22-2026-27-Web-images-164.jpg',
'https://i.postimg.cc/L5DvdKYy/CG-VOL-22-2026-27-Web-images-165.jpg',
'https://i.postimg.cc/cChTqygk/CG-VOL-22-2026-27-Web-images-166.jpg',
'https://i.postimg.cc/Y0R8cKGy/CG-VOL-22-2026-27-Web-images-167.jpg',
'https://i.postimg.cc/QCmSLG9z/CG-VOL-22-2026-27-Web-images-168.jpg',
'https://i.postimg.cc/BbpNW9Ly/CG-VOL-22-2026-27-Web-images-169.jpg',
'https://i.postimg.cc/5ygpcdYT/CG-VOL-22-2026-27-Web-images-170.jpg',
'https://i.postimg.cc/Hnz3GDcq/CG-VOL-22-2026-27-Web-images-171.jpg',
'https://i.postimg.cc/90b135w5/CG-VOL-22-2026-27-Web-images-172.jpg',
'https://i.postimg.cc/4yPwCkHR/CG-VOL-22-2026-27-Web-images-173.jpg',
'https://i.postimg.cc/5ygpcdQJ/CG-VOL-22-2026-27-Web-images-174.jpg',
'https://i.postimg.cc/wM2FK8Rd/CG-VOL-22-2026-27-Web-images-175.jpg',
'https://i.postimg.cc/J0xKwVHm/CG-VOL-22-2026-27-Web-images-176.jpg',
'https://i.postimg.cc/T10Q8M5f/CG-VOL-22-2026-27-Web-images-177.jpg',
'https://i.postimg.cc/C57JyTn1/CG-VOL-22-2026-27-Web-images-178.jpg',
'https://i.postimg.cc/vThXRFxT/CG-VOL-22-2026-27-Web-images-179.jpg',
'https://i.postimg.cc/brgLXcSd/CG-VOL-22-2026-27-Web-images-180.jpg',
'https://i.postimg.cc/nr2T8b9X/CG-VOL-22-2026-27-Web-images-181.jpg',
'https://i.postimg.cc/gcHgLRSv/CG-VOL-22-2026-27-Web-images-182.jpg',
'https://i.postimg.cc/Wz8SRLqD/CG-VOL-22-2026-27-Web-images-183.jpg',
'https://i.postimg.cc/Wpw5qrW6/CG-VOL-22-2026-27-Web-images-184.jpg',
'https://i.postimg.cc/c1BFtY9h/CG-VOL-22-2026-27-Web-images-185.jpg',
'https://i.postimg.cc/sf4TGS6K/CG-VOL-22-2026-27-Web-images-186.jpg',
'https://i.postimg.cc/QNJfK540/CG-VOL-22-2026-27-Web-images-187.jpg',
'https://i.postimg.cc/sf4TGS6n/CG-VOL-22-2026-27-Web-images-188.jpg',
'https://i.postimg.cc/Wpw5qrWW/CG-VOL-22-2026-27-Web-images-189.jpg',
'https://i.postimg.cc/PfQSvZ3V/CG-VOL-22-2026-27-Web-images-190.jpg',
'https://i.postimg.cc/KcD03LqH/CG-VOL-22-2026-27-Web-images-191.jpg',
'https://i.postimg.cc/xj36NHxW/CG-VOL-22-2026-27-Web-images-192.jpg',
'https://i.postimg.cc/7PnKJ7sF/CG-VOL-22-2026-27-Web-images-193.jpg',
'https://i.postimg.cc/MZm9fR3w/CG-VOL-22-2026-27-Web-images-194.jpg',
'https://i.postimg.cc/XNksBF10/CG-VOL-22-2026-27-Web-images-195.jpg',
'https://i.postimg.cc/c1BFtYk0/CG-VOL-22-2026-27-Web-images-196.jpg',
'https://i.postimg.cc/QNJfK5Yj/CG-VOL-22-2026-27-Web-images-197.jpg',
'https://i.postimg.cc/sDfwYXqb/CG-VOL-22-2026-27-Web-images-198.jpg',
'https://i.postimg.cc/gkcNVJQC/CG-VOL-22-2026-27-Web-images-199.jpg',
'https://i.postimg.cc/WbpXG3xR/CG-VOL-22-2026-27-Web-images-200.jpg',
'https://i.postimg.cc/fTWBcL1n/CG-VOL-22-2026-27-Web-images-201.jpg',
'https://i.postimg.cc/7YPm36jr/CG-VOL-22-2026-27-Web-images-202.jpg',
'https://i.postimg.cc/HsWBwxFC/CG-VOL-22-2026-27-Web-images-203.jpg',
'https://i.postimg.cc/xTjtvCBY/CG-VOL-22-2026-27-Web-images-204.jpg',
'https://i.postimg.cc/ncV04zNH/CG-VOL-22-2026-27-Web-images-205.jpg',
'https://i.postimg.cc/BQZMT6RS/CG-VOL-22-2026-27-Web-images-206.jpg',
'https://i.postimg.cc/qMBjsRWB/CG-VOL-22-2026-27-Web-images-207.jpg',
'https://i.postimg.cc/4N4B6dj3/CG-VOL-22-2026-27-Web-images-208.jpg',
'https://i.postimg.cc/dtQ421gV/CG-VOL-22-2026-27-Web-images-209.jpg',
'https://i.postimg.cc/SNQD6sHX/CG-VOL-22-2026-27-Web-images-210.jpg',
'https://i.postimg.cc/Yq2b69Tv/CG-VOL-22-2026-27-Web-images-211.jpg',
'https://i.postimg.cc/kXMfQ4L6/CG-VOL-22-2026-27-Web-images-212.jpg',
'https://i.postimg.cc/c41XRHP8/CG-VOL-22-2026-27-Web-images-213.jpg',
'https://i.postimg.cc/vH83rBCn/CG-VOL-22-2026-27-Web-images-214.jpg',
'https://i.postimg.cc/DyC5BhK0/CG-VOL-22-2026-27-Web-images-215.jpg',
'https://i.postimg.cc/J4TKP8Ws/CG-VOL-22-2026-27-Web-images-216.jpg',
'https://i.postimg.cc/65HzYKN7/CG-VOL-22-2026-27-Web-images-217.jpg',
'https://i.postimg.cc/Wb9SXVPk/CG-VOL-22-2026-27-Web-images-218.jpg',
'https://i.postimg.cc/VL74Dwcn/CG-VOL-22-2026-27-Web-images-219.jpg',
'https://i.postimg.cc/Kv9QJbyP/CG-VOL-22-2026-27-Web-images-220.jpg',
'https://i.postimg.cc/Qx6S0Drg/CG-VOL-22-2026-27-Web-images-221.jpg',
'https://i.postimg.cc/8PywtGVB/CG-VOL-22-2026-27-Web-images-222.jpg',
'https://i.postimg.cc/yYfnvKzy/CG-VOL-22-2026-27-Web-images-223.jpg',
  ]
},
    'KITEC': {
      images: [
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1622915/pexels-photo-1622915.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1457852/pexels-photo-1457852.jpeg?auto=compress&cs=tinysrgb&w=600',
      ]
    },
    'NOVA': {
      images: [
        'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/206243/pexels-photo-206243.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/2808105/pexels-photo-2808105.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1457850/pexels-photo-1457850.jpeg?auto=compress&cs=tinysrgb&w=600',
      ]
    },
    'EROS': {
      images: [
        'https://i.postimg.cc/nzcNCk4w/1-eros-master-catalouge-june-25-compressed-images-0.jpg',
        'https://i.postimg.cc/hjPNfrLY/1-eros-master-catalouge-june-25-compressed-images-1.jpg',
        'https://i.postimg.cc/LX6GnTtr/1-eros-master-catalouge-june-25-compressed-images-2.jpg',
        'https://i.postimg.cc/Pxr0P4W0/1-eros-master-catalouge-june-25-compressed-images-3.jpg',
        'https://i.postimg.cc/ydY2kPhC/1-eros-master-catalouge-june-25-compressed-images-4.jpg',
        'https://i.postimg.cc/1t5bfH05/1-eros-master-catalouge-june-25-compressed-images-5.jpg',
        'https://i.postimg.cc/268gVwd1/1-eros-master-catalouge-june-25-compressed-images-6.jpg',
        'https://i.postimg.cc/d1tgLBR3/1-eros-master-catalouge-june-25-compressed-images-7.jpg',
        'https://i.postimg.cc/pTX3pZQ9/1-eros-master-catalouge-june-25-compressed-images-8.jpg',
        'https://i.postimg.cc/0Q2hbfGK/1-eros-master-catalouge-june-25-compressed-images-9.jpg',
        'https://i.postimg.cc/tTC8Y5dV/1-eros-master-catalouge-june-25-compressed-images-10.jpg',
        'https://i.postimg.cc/MTPNRQtn/1-eros-master-catalouge-june-25-compressed-images-11.jpg',
        'https://i.postimg.cc/gJSQRZ40/1-eros-master-catalouge-june-25-compressed-images-12.jpg',
        'https://i.postimg.cc/Px39ZwKJ/1-eros-master-catalouge-june-25-compressed-images-13.jpg',
        'https://i.postimg.cc/qRbSn3Qh/1-eros-master-catalouge-june-25-compressed-images-14.jpg',
        'https://i.postimg.cc/Jn6vJkKk/1-eros-master-catalouge-june-25-compressed-images-15.jpg',
        'https://i.postimg.cc/HxZR5y3w/1-eros-master-catalouge-june-25-compressed-images-16.jpg',
        'https://i.postimg.cc/xCxhHzgG/1-eros-master-catalouge-june-25-compressed-images-17.jpg',
        'https://i.postimg.cc/3RSVpv9C/1-eros-master-catalouge-june-25-compressed-images-18.jpg',
        'https://i.postimg.cc/0QWFmwZZ/1-eros-master-catalouge-june-25-compressed-images-19.jpg',
        'https://i.postimg.cc/ydQt9Znv/1-eros-master-catalouge-june-25-compressed-images-20.jpg',
        'https://i.postimg.cc/W3WCrkSY/1-eros-master-catalouge-june-25-compressed-images-21.jpg',
        'https://i.postimg.cc/7h5cNZQ1/1-eros-master-catalouge-june-25-compressed-images-22.jpg',
        'https://i.postimg.cc/tJsfz4mk/1-eros-master-catalouge-june-25-compressed-images-23.jpg',
        'https://i.postimg.cc/90DSBQNg/1-eros-master-catalouge-june-25-compressed-images-24.jpg',
        'https://i.postimg.cc/BbjyCnwy/1-eros-master-catalouge-june-25-compressed-images-25.jpg',
        'https://i.postimg.cc/zvyMkGcY/1-eros-master-catalouge-june-25-compressed-images-26.jpg',
        'https://i.postimg.cc/prm7BL6b/1-eros-master-catalouge-june-25-compressed-images-27.jpg',
        'https://i.postimg.cc/gjx5K2Tp/1-eros-master-catalouge-june-25-compressed-images-28.jpg',
        'https://i.postimg.cc/90DSBQnC/1-eros-master-catalouge-june-25-compressed-images-29.jpg',
        'https://i.postimg.cc/qqWFDH9P/1-eros-master-catalouge-june-25-compressed-images-30.jpg',
        'https://i.postimg.cc/x8BZpVwV/1-eros-master-catalouge-june-25-compressed-images-31.jpg',
        'https://i.postimg.cc/nrNWSfyt/1-eros-master-catalouge-june-25-compressed-images-32.jpg',
        'https://i.postimg.cc/1Xbd71kQ/1-eros-master-catalouge-june-25-compressed-images-33.jpg',
        'https://i.postimg.cc/wMnr4YCg/1-eros-master-catalouge-june-25-compressed-images-34.jpg',
        'https://i.postimg.cc/DfNRw1S0/1-eros-master-catalouge-june-25-compressed-images-35.jpg',
        'https://i.postimg.cc/sfLbg5Mf/1-eros-master-catalouge-june-25-compressed-images-36.jpg',
        'https://i.postimg.cc/GhsV89D9/1-eros-master-catalouge-june-25-compressed-images-37.jpg',
        'https://i.postimg.cc/8Pr9Jsvc/1-eros-master-catalouge-june-25-compressed-images-38.jpg',
        'https://i.postimg.cc/bN2WDdnS/1-eros-master-catalouge-june-25-compressed-images-39.jpg',
        'https://i.postimg.cc/J4BvDtXk/1-eros-master-catalouge-june-25-compressed-images-40.jpg',
        'https://i.postimg.cc/rwXbScGS/1-eros-master-catalouge-june-25-compressed-images-41.jpg',
        'https://i.postimg.cc/9FqKRz9B/1-eros-master-catalouge-june-25-compressed-images-42.jpg',
        'https://i.postimg.cc/y845FBhy/1-eros-master-catalouge-june-25-compressed-images-43.jpg',
        'https://i.postimg.cc/13hTpP0B/1-eros-master-catalouge-june-25-compressed-images-44.jpg',
        'https://i.postimg.cc/JzVgbm3K/1-eros-master-catalouge-june-25-compressed-images-45.jpg',
        'https://i.postimg.cc/13hTpP0d/1-eros-master-catalouge-june-25-compressed-images-46.jpg',
        'https://i.postimg.cc/htWw9g86/1-eros-master-catalouge-june-25-compressed-images-47.jpg',
        'https://i.postimg.cc/8zQ3hDdx/1-eros-master-catalouge-june-25-compressed-images-48.jpg',
        'https://i.postimg.cc/qvVY80c9/1-eros-master-catalouge-june-25-compressed-images-49.jpg',
        'https://i.postimg.cc/T3MSrGqM/1-eros-master-catalouge-june-25-compressed-images-50.jpg',
        'https://i.postimg.cc/3x56g7js/1-eros-master-catalouge-june-25-compressed-images-51.jpg',
        'https://i.postimg.cc/vZFjWMLs/1-eros-master-catalouge-june-25-compressed-images-52.jpg',
        'https://i.postimg.cc/NjqV1Y7Y/1-eros-master-catalouge-june-25-compressed-images-53.jpg',
        'https://i.postimg.cc/vZrKhjXj/1-eros-master-catalouge-june-25-compressed-images-54.jpg',
        'https://i.postimg.cc/jSH1c9vG/1-eros-master-catalouge-june-25-compressed-images-55.jpg',
        'https://i.postimg.cc/Nj6nDVpq/1-eros-master-catalouge-june-25-compressed-images-56.jpg',
        'https://i.postimg.cc/2SQtGJ2N/1-eros-master-catalouge-june-25-compressed-images-57.jpg',
        'https://i.postimg.cc/bwx5gM3P/1-eros-master-catalouge-june-25-compressed-images-58.jpg',
        'https://i.postimg.cc/HkwNzKBT/1-eros-master-catalouge-june-25-compressed-images-59.jpg',
        'https://i.postimg.cc/htLYswpG/1-eros-master-catalouge-june-25-compressed-images-60.jpg',
        'https://i.postimg.cc/Z58QHgVR/1-eros-master-catalouge-june-25-compressed-images-61.jpg',
        'https://i.postimg.cc/yN7bbPbx/1-eros-master-catalouge-june-25-compressed-images-62.jpg',
        'https://i.postimg.cc/hGK55r5j/1-eros-master-catalouge-june-25-compressed-images-63.jpg',
        'https://i.postimg.cc/bvqBBTBZ/1-eros-master-catalouge-june-25-compressed-images-64.jpg',
        'https://i.postimg.cc/1zyjjHjg/1-eros-master-catalouge-june-25-compressed-images-65.jpg',
        'https://i.postimg.cc/25CKKwKb/1-eros-master-catalouge-june-25-compressed-images-66.jpg',
        'https://i.postimg.cc/BvJVVgVH/1-eros-master-catalouge-june-25-compressed-images-67.jpg',
        'https://i.postimg.cc/CKwQQNQ4/1-eros-master-catalouge-june-25-compressed-images-68.jpg',
        'https://i.postimg.cc/g0GTTDTN/1-eros-master-catalouge-june-25-compressed-images-69.jpg',
        'https://i.postimg.cc/25CKKwKw/1-eros-master-catalouge-june-25-compressed-images-70.jpg',
        'https://i.postimg.cc/tg9MM5Mr/1-eros-master-catalouge-june-25-compressed-images-71.jpg',
        'https://i.postimg.cc/PqKRswg4/1-eros-master-catalouge-june-25-compressed-images-72.jpg',
        'https://i.postimg.cc/zfpcZgs7/1-eros-master-catalouge-june-25-compressed-images-73.jpg',
        'https://i.postimg.cc/YS8sKW5X/1-eros-master-catalouge-june-25-compressed-images-74.jpg',
        'https://i.postimg.cc/yNnb4ZMv/1-eros-master-catalouge-june-25-compressed-images-75.jpg',
        'https://i.postimg.cc/CKJQTq3r/1-eros-master-catalouge-june-25-compressed-images-76.jpg',
        'https://i.postimg.cc/PqKRswgR/1-eros-master-catalouge-june-25-compressed-images-77.jpg',
        'https://i.postimg.cc/5tpRdChr/1-eros-master-catalouge-june-25-compressed-images-78.jpg',
        'https://i.postimg.cc/xdg4Dmrr/1-eros-master-catalouge-june-25-compressed-images-79.jpg',
        'https://i.postimg.cc/ZqjMtNkt/1-eros-master-catalouge-june-25-compressed-images-80.jpg',
        'https://i.postimg.cc/25TKRWpC/1-eros-master-catalouge-june-25-compressed-images-81.jpg',
        'https://i.postimg.cc/XvxzS5M4/1-eros-master-catalouge-june-25-compressed-images-82.jpg',
        'https://i.postimg.cc/NMMPg0Yq/1-eros-master-catalouge-june-25-compressed-images-83.jpg',
        'https://i.postimg.cc/zBBPJf5Y/1-eros-master-catalouge-june-25-compressed-images-84.jpg',
        'https://i.postimg.cc/nzzwHLZJ/1-eros-master-catalouge-june-25-compressed-images-85.jpg',
        'https://i.postimg.cc/9MMNWfV2/1-eros-master-catalouge-june-25-compressed-images-86.jpg',
        'https://i.postimg.cc/k44hn59q/1-eros-master-catalouge-june-25-compressed-images-87.jpg',
        'https://i.postimg.cc/63319Qw9/1-eros-master-catalouge-june-25-compressed-images-88.jpg'
      ]
    },
    'AROFIC': {
      images: [
        'https://i.postimg.cc/L4wmPXHb/AROFIC-SANITARYWARE-26-V-01-compressed-images-0.jpg',
        'https://i.postimg.cc/2jMCW6zg/AROFIC-SANITARYWARE-26-V-01-compressed-images-1.jpg',
        'https://i.postimg.cc/tRw96TXc/AROFIC-SANITARYWARE-26-V-01-compressed-images-2.jpg',
        'https://i.postimg.cc/WpCsZ32K/AROFIC-SANITARYWARE-26-V-01-compressed-images-3.jpg',
        'https://i.postimg.cc/RCyvtFSm/AROFIC-SANITARYWARE-26-V-01-compressed-images-4.jpg',
        'https://i.postimg.cc/y6t7Rd1B/AROFIC-SANITARYWARE-26-V-01-compressed-images-5.jpg',
        'https://i.postimg.cc/RCyvtFSv/AROFIC-SANITARYWARE-26-V-01-compressed-images-6.jpg',
        'https://i.postimg.cc/3rV3GR88/AROFIC-SANITARYWARE-26-V-01-compressed-images-7.jpg',
        'https://i.postimg.cc/2jMCW6k8/AROFIC-SANITARYWARE-26-V-01-compressed-images-8.jpg',
        'https://i.postimg.cc/8k9Tv5pz/AROFIC-SANITARYWARE-26-V-01-compressed-images-9.jpg',
        'https://i.postimg.cc/c12d3HxH/AROFIC-SANITARYWARE-26-V-01-compressed-images-10.jpg',
        'https://i.postimg.cc/dtCwjY3F/AROFIC-SANITARYWARE-26-V-01-compressed-images-11.jpg',
        'https://i.postimg.cc/fTdDfNyZ/AROFIC-SANITARYWARE-26-V-01-compressed-images-12.jpg',
        'https://i.postimg.cc/ncmpGJrq/AROFIC-SANITARYWARE-26-V-01-compressed-images-13.jpg',
        'https://i.postimg.cc/65ZtfXqn/AROFIC-SANITARYWARE-26-V-01-compressed-images-14.jpg',
        'https://i.postimg.cc/RZz9PDJy/AROFIC-SANITARYWARE-26-V-01-compressed-images-15.jpg',
        'https://i.postimg.cc/RZz9PDJD/AROFIC-SANITARYWARE-26-V-01-compressed-images-16.jpg',
        'https://i.postimg.cc/Gm1rM5T6/AROFIC-SANITARYWARE-26-V-01-compressed-images-17.jpg',
        'https://i.postimg.cc/mgGRd510/AROFIC-SANITARYWARE-26-V-01-compressed-images-18.jpg',
        'https://i.postimg.cc/rwLchPtX/AROFIC-SANITARYWARE-26-V-01-compressed-images-19.jpg',
        'https://i.postimg.cc/Mpbwgm1r/AROFIC-SANITARYWARE-26-V-01-compressed-images-20.jpg',
        'https://i.postimg.cc/nhYxNGqW/AROFIC-SANITARYWARE-26-V-01-compressed-images-21.jpg',
        'https://i.postimg.cc/GmJR6xvW/AROFIC-SANITARYWARE-26-V-01-compressed-images-22.jpg',
        'https://i.postimg.cc/x1yQB3Kr/AROFIC-SANITARYWARE-26-V-01-compressed-images-23.jpg',
        'https://i.postimg.cc/52qJDSwM/AROFIC-SANITARYWARE-26-V-01-compressed-images-24.jpg',
        'https://i.postimg.cc/cLMWPBQW/AROFIC-SANITARYWARE-26-V-01-compressed-images-25.jpg',
        'https://i.postimg.cc/cLMWPBQd/AROFIC-SANITARYWARE-26-V-01-compressed-images-26.jpg',
        'https://i.postimg.cc/y8XK2yFd/AROFIC-SANITARYWARE-26-V-01-compressed-images-27.jpg',
        'https://i.postimg.cc/htbnN19h/AROFIC-SANITARYWARE-26-V-01-compressed-images-28.jpg',
        'https://i.postimg.cc/QdkDvJp9/AROFIC-SANITARYWARE-26-V-01-compressed-images-29.jpg',
        'https://i.postimg.cc/jjxTTnXW/AROFIC-SANITARYWARE-26-V-01-compressed-images-30.jpg',
        'https://i.postimg.cc/3w8hh0B2/AROFIC-SANITARYWARE-26-V-01-compressed-images-31.jpg',
        'https://i.postimg.cc/9fm22wpG/AROFIC-SANITARYWARE-26-V-01-compressed-images-32.jpg',
        'https://i.postimg.cc/mrL441wY/AROFIC-SANITARYWARE-26-V-01-compressed-images-33.jpg',
        'https://i.postimg.cc/MG6wwfDs/AROFIC-SANITARYWARE-26-V-01-compressed-images-34.jpg',
        'https://i.postimg.cc/bvyPPSTV/AROFIC-SANITARYWARE-26-V-01-compressed-images-35.jpg',
        'https://i.postimg.cc/s2Trgf6p/AROFIC-SANITARYWARE-26-V-01-compressed-images-36.jpg',
        'https://i.postimg.cc/GpXCm37F/AROFIC-SANITARYWARE-26-V-01-compressed-images-37.jpg',
        'https://i.postimg.cc/MG9SpZPb/AROFIC-SANITARYWARE-26-V-01-compressed-images-38.jpg',
        'https://i.postimg.cc/fb8NRW2C/AROFIC-SANITARYWARE-26-V-01-compressed-images-39.jpg',
        'https://i.postimg.cc/HL6gkWZ3/AROFIC-SANITARYWARE-26-V-01-compressed-images-40.jpg',
        'https://i.postimg.cc/QMf3dN4f/AROFIC-SANITARYWARE-26-V-01-compressed-images-41.jpg',
        'https://i.postimg.cc/JhpLz766/AROFIC-SANITARYWARE-26-V-01-compressed-images-42.jpg',
        'https://i.postimg.cc/cJFSL19z/AROFIC-SANITARYWARE-26-V-01-compressed-images-43.jpg',
        'https://i.postimg.cc/yNLH86Qw/AROFIC-SANITARYWARE-26-V-01-compressed-images-44.jpg',
        'https://i.postimg.cc/Lsxp84Qd/AROFIC-SANITARYWARE-26-V-01-compressed-images-45.jpg',
        'https://i.postimg.cc/rpfkwyZX/AROFIC-SANITARYWARE-26-V-01-compressed-images-46.jpg',
        'https://i.postimg.cc/43Wgx42T/AROFIC-SANITARYWARE-26-V-01-compressed-images-47.jpg'
      ]
    },
    'DEEPALI': {
      images: [
        'https://images.pexels.com/photos/206243/pexels-photo-206243.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/2808105/pexels-photo-2808105.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1457850/pexels-photo-1457850.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1358907/pexels-photo-1358907.jpeg?auto=compress&cs=tinysrgb&w=600',
      ]
    },
    'SHIRS': {
      images: [
        'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/207211/pexels-photo-207211.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=600',
      ]
    },
    'ZERO-B':{
      images:[
        'https://i.postimg.cc/RFZDscRr/New-Kitchanmate-UV-RO-Broucher-images-0.jpg',
        'https://i.postimg.cc/V6kVGjRQ/New-Kitchanmate-UV-RO-Broucher-images-1.jpg',
          'https://i.postimg.cc/Qtdy4pqy/Water-Softener-New-images-0.jpg',
          'https://i.postimg.cc/HxkhZQ21/Water-Softener-New-images-1.jpg',
          'https://i.postimg.cc/V6ZH3d7V/Water-Softener-New-images-2.jpg',
          'https://i.postimg.cc/4d2FrmLG/Water-Softener-New-images-3.jpg',
              ]
    }
  };

  const brands = [
    { id: 1, name: 'VGUARD', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/86/V-Guard_Industries.svg/1280px-V-Guard_Industries.svg.png' },
    { id: 2, name: 'JAQUAR', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Jaquar_logo.svg/250px-Jaquar_logo.svg.png' },
    { id: 3, name: 'KITEC', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTryvzpG8NkfNXsqlusu3I92Ywo3VUXUC7vxQ&s' },
    { id: 4, name: 'NOVA', img: 'https://media.licdn.com/dms/image/v2/C560BAQHzK_9Ycov6qw/company-logo_200_200/company-logo_200_200/0/1630575485997/nova_plastik_san_tic_a__logo?e=2147483647&v=beta&t=bX0tDdf3LFvKxD0iP2fAkYTk3DO3g8ny-8UM6Kw9qHw' },
    { id: 5, name: 'EROS', img: 'https://i.pinimg.com/736x/e0/3e/57/e03e570adbacaec736c6d1d865bcc903.jpg' },
    { id: 6, name: 'AROFIC', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQexOvLwKCqfBqsABNAel2tdMKU6BI5lIASw&s' },
    { id: 7, name: 'DEEPALI', img: 'https://deepalisinks.com/wp-content/uploads/2021/10/Deepali-Sinks-Logo.png' },
    { id: 8, name: 'SHIRS', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk_jRCABpHv6cMdQCVG_F88P4M9PlgEgTsMg&s' },
    { id: 9, name: 'ZERO-B', img: 'https://www.zerobonline.com/wp-content/uploads/2023/08/ZB-Logo-social-share2.jpg' },
  ];

  const handleBrandClick = (brandName) => {
    setSelectedBrand(brandName);
    setCatalogImages(partnersCatalog[brandName]?.images || []);
  };

  const goBack = () => {
    setSelectedBrand(null);
    setCatalogImages([]);
  };

  return (
    <div className="catalog-page">
      {/* Hero Section */}
      <section className="catalog-hero">
        <div className="catalog-hero-overlay">
          <div className="container">
            <h1 className="catalog-hero-title">Our Catalog</h1>
            <p className="catalog-hero-subtitle">Explore premium products from trusted brands</p>
            <div className="catalog-hero-line"></div>
          </div>
        </div>
      </section>

      <div className="container">
        {!selectedBrand ? (
          <>
            <div className="section-header">
              <h2 className="section-title">OUR PARTNER BRANDS</h2>
              <p className="section-subtitle">Click on any brand to view their catalog</p>
            </div>
            <div className="brands-grid">
              {brands.map((brand) => (
                <div 
                  key={brand.id} 
                  className="brand-card"
                  onClick={() => handleBrandClick(brand.name)}
                >
                  <div className="brand-image-wrapper">
                    <img src={brand.img} alt={brand.name} />
                    <div className="brand-overlay">
                      <h3 className="brand-name-hover">{brand.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="catalog-header">
              <button className="back-btn" onClick={goBack}>
                ← Back to Brands
              </button>
              <h2 className="catalog-title">{selectedBrand} Catalog</h2>
            </div>
            <div className="catalog-images-grid">
              {catalogImages.map((img, index) => (
                <div key={index} className="catalog-image-card">
                  <img src={img} alt={`${selectedBrand} product ${index + 1}`} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;