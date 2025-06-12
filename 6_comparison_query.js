// Menampilkan barang dengan harga lebih dari 10 juta rupiah
db.barang.find({ harga: { $gt: 10000000 } });
