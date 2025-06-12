// Menghitung rata-rata harga dan jumlah produk per kategori
db.barang.aggregate([
  {
    $group: {
      _id: "$kategori",
      rataHarga: { $avg: "$harga" },
      totalBarang: { $sum: 1 }
    }
  }
]);
