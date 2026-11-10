require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Import fungsi dari controller yang sudah kita buat
const { getAllKomik, createKomik, updateKomik, deleteKomik } = require('./controllers/komikController');

// Middleware untuk membaca data format JSON dari Postman
app.use(express.json());

// Rute API (Endpoints)
app.get('/api/komik', getAllKomik);          // Read
app.post('/api/komik', createKomik);         // Create
app.put('/api/komik/:id', updateKomik);      // Update
app.delete('/api/komik/:id', deleteKomik);   // Delete

// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});