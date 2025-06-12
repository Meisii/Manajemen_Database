// Menampilkan barang yang termasuk kategori "Laptop" dan stoknya > 0
// atau kategori "Aksesoris" dan harganya < 500.000

db.barang.find({
  $or: [
    { kategori: "Laptop", stok: { $gt: 0 } },
    { kategori: "Aksesoris", harga: { $lt: 500000 } }
  ]
});
