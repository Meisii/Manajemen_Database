// Menambahkan 1 data barang baru ke dalam collection "barang"
db.barang.insertOne({
  nama: "Laptop ASUS ROG",
  kodeBarang: "ASUS-001",
  kategori: "Laptop",
  harga: 20000000,
  stok: 15,
  tersedia: true
});
