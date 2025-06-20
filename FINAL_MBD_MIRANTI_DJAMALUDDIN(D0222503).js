//Miranti Djamaluddin (D0222503) MBD_B2022

//nomor1
use projectUAS

db.createCollection("barang");

//nomor2
db.barang.insertMany([
  { key: "LPT001", value: "ASUS VivoBook 14" },
  { key: "LPT002", value: "HP Pavilion x360" },
  { key: "LPT003", value: "Acer Aspire 5" },
  { key: "LPT004", value: "Lenovo IdeaPad Slim 3" },
  { key: "LPT005", value: "Dell Inspiron 15" }
])

//nomor3
use projectUAS2

db.createCollection("produk");

//nomor4
db.produk.insertMany([
  {
    id: 1,
    merk: "ASUS",
    model: "VivoBook 14",
    ram: "8GB",
    storage: "512GB SSD",
    harga: 7999000
  },
  {
    id: 2,
    merk: "HP",
    model: "Pavilion x360",
    ram: "8GB",
    storage: "256GB SSD",
    harga: 8999000
  },
  {
    id: 3,
    merk: "Acer",
    model: "Aspire 5",
    ram: "16GB",
    storage: "1TB HDD",
    harga: 8499000
  },
  {
    id: 4,
    merk: "Lenovo",
    model: "IdeaPad Slim 3",
    ram: "4GB",
    storage: "256GB SSD",
    harga: 6799000
  },
  {
    id: 5,
    merk: "Dell",
    model: "Inspiron 15",
    ram: "8GB",
    storage: "512GB SSD",
    harga: 8899000
  }
])
