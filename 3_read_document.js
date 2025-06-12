// Menampilkan semua barang di koleksi
print("Semua data barang:");
db.barang.find();

// Menampilkan data barang berdasarkan kode barang tertentu
print("Barang dengan kode ASUS-001:");
db.barang.findOne({ kodeBarang: "ASUS-001" });