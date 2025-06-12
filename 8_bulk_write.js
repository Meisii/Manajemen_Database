// Melakukan beberapa operasi sekaligus (insert, update, delete)
db.barang.bulkWrite([
  {
    insertOne: {
      document: {
        nama: "Mouse Wireless Logitech",
        kodeBarang: "MS-002",
        kategori: "Aksesoris",
        harga: 250000,
        stok: 50,
        tersedia: true
      }
    }
  },
  {
    updateOne: {
      filter: { kodeBarang: "MS-002" },
      update: { $set: { harga: 240000 } }
    }
  },
  {
    deleteOne: {
      filter: { kodeBarang: "MS-002" }
    }
  }
]);
