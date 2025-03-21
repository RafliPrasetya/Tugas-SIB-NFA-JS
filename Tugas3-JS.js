let produkToko = [
    {id: 1, nama: "Laptop", harga: 7000000, stok: 5},
    {id: 2, nama: "Mouse", harga: 200000, stok: 10},
    {id: 3, nama: "Keyboard", harga: 350000, stok: 7}
];

// Fungsi untuk menambahkan produk baru ke dalam array produkToko
function tambahProduk(nama, harga, stok) {
    // Menentukan ID baru berdasarkan ID terakhir dalam array
    let idBaru = produkToko.length > 0 ? produkToko[produkToko.length - 1].id + 1 : 1;
    // Menambahkan produk baru ke dalam array
    produkToko.push({ id: idBaru, nama, harga, stok });
    console.log(`Produk ${nama} berhasil ditambahkan.`);
}

// Fungsi untuk menghapus produk berdasarkan ID
function hapusProduk(id) {
    // Mencari indeks produk dalam array berdasarkan ID
    let index = produkToko.findIndex(produk => produk.id === id);
    if (index !== -1) {
        let namaProduk = produkToko[index].nama;
        // Menghapus produk dari array
        produkToko.splice(index, 1);
        console.log(`Produk ${namaProduk} berhasil dihapus.`);
    } else {
        console.log(`Produk dengan ID ${id} tidak ditemukan.`);
    }
}

// Fungsi untuk menampilkan daftar produk yang ada di dalam array
function tampilkanProduk() {
    console.log("Daftar Produk:");
    produkToko.forEach(produk => {
        console.log(`ID: ${produk.id}, Nama: ${produk.nama}, Harga: Rp${produk.harga}, Stok: ${produk.stok}`);
    });
}

// penggunaan fungsi:
tambahProduk("flashdisk", 50000, 9); // Menambahkan produk baru
hapusProduk(1); // Menghapus produk (tetapi jika tidak ada ID yang diberikan, bisa menyebabkan error)
tampilkanProduk(); // Menampilkan daftar produk
