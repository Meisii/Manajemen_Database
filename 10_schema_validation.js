// Membuat collection "barangValid" dengan validasi skema
db.createCollection("barangValid", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nama", "kodeBarang", "kategori", "harga", "stok", "tersedia"],
      properties: {
        nama: { bsonType: "string" },
        kodeBarang: { bsonType: "string" },
        kategori: { enum: ["Laptop", "Smartphone", "Aksesoris"] },
        harga: { bsonType: "int", minimum: 10000 },
        stok: { bsonType: "int", minimum: 0 },
        tersedia: { bsonType: "bool" }
      }
    }
  }
});
