// Mengurangi stok barang dengan kode ASUS-001 sebanyak 1 (karena penjualan)
db.barang.updateOne(
  { kodeBarang: "ASUS-001" },
  { $inc: { stok: -1 } }
);
