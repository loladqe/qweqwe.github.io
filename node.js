const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static('public')); // 정적 파일 제공

// 업로드 처리
app.post('/upload', upload.single('file'), (req, res) => {
    res.send(`File uploaded: ${req.file.originalname}`);
});

// 서버 시작
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
