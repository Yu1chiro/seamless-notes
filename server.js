const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk menyajikan aset statis (CSS, gambar, JS client-side) dari folder 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rute root yang diwajibkan mengarah ke public/index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server production berjalan di http://localhost:${PORT}`);
});