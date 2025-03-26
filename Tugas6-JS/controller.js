const users = require("./data"); // Import data dari data.js

// 1️⃣ Fungsi untuk menampilkan semua data dengan map()
function showUsers() {
    console.log("📋 Daftar Pengguna:");
    users.map((user, index) => {
        console.log(`${index + 1}. Nama: ${user.nama}, Umur: ${user.umur}, Alamat: ${user.alamat}, Email: ${user.email}`);
    });
}

// 2️⃣ Fungsi untuk menambahkan data baru
function addUser(nama, umur, alamat, tanggalLahir) {
    const email = `${nama.toLowerCase()}${tanggalLahir}@gmail.com`; // Email dengan tanggal lahir
    users.push({ nama, umur, alamat, email });
    console.log(`✅ Data "${nama}" berhasil ditambahkan dengan email: ${email}`);
}

// 3️⃣ Fungsi untuk menghapus data berdasarkan nama
function removeUser(nama) {
    const index = users.findIndex(user => user.nama.toLowerCase() === nama.toLowerCase());
    if (index !== -1) {
        const [deletedUser] = users.splice(index, 1);
        console.log(`❌ Data "${deletedUser.nama}" berhasil dihapus!`);
    } else {
        console.log(`⚠️ Data dengan nama "${nama}" tidak ditemukan.`);
    }
}

// 🔥 Eksekusi fungsi untuk menampilkan hasil
console.log("=== SEBELUM MENAMBAH DATA ===");
showUsers();

console.log("\n🟢 Menambahkan 2 pengguna baru...");
addUser("Kiki", 23, "Palembang", "230502");
addUser("Lina", 27, "Padang", "270498");

console.log("\n=== SETELAH MENAMBAH DATA ===");
showUsers();

console.log("\n🔴 Menghapus pengguna 'Eko'...");
removeUser("Eko");

console.log("\n=== SETELAH MENGHAPUS DATA ===");
showUsers();
