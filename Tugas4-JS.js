// Kelas dasar Kendaraan dengan konsep inheritance dan encapsulation
class Kendaraan {
    constructor(nama, jenis) {
        this._nama = nama; // Properti di-enkapsulasi dengan _
        this._jenis = jenis;
    }

    get nama() {
        return this._nama;
    }

    get jenis() {
        return this._jenis;
    }

    infoKendaraan() {
        return `${this._nama} (${this._jenis})`;
    }
}

// Subclass untuk kendaraan spesifik (Mobil & Motor)
class Mobil extends Kendaraan {
    constructor(nama, kapasitas) {
        super(nama, "Mobil");
        this._kapasitas = kapasitas;
    }

    infoKendaraan() {
        return `${super.infoKendaraan()} - Kapasitas: ${this._kapasitas} orang`;
    }
}

class Motor extends Kendaraan {
    constructor(nama, tipe) {
        super(nama, "Motor");
        this._tipe = tipe;
    }

    infoKendaraan() {
        return `${super.infoKendaraan()} - Tipe: ${this._tipe}`;
    }
}

// Kelas Pelanggan
class Pelanggan {
    constructor(nama, nomorTelepon) {
        this._nama = nama;
        this._nomorTelepon = nomorTelepon;
        this._kendaraanDisewa = null;
    }

    get nama() {
        return this._nama;
    }

    get nomorTelepon() {
        return this._nomorTelepon;
    }

    sewaKendaraan(kendaraan) {
        if (this._kendaraanDisewa) {
            console.log(`${this._nama} sudah menyewa kendaraan lain.`);
        } else {
            this._kendaraanDisewa = kendaraan;
            console.log(`${this._nama} telah menyewa ${kendaraan.infoKendaraan()}.`);
        }
    }

    get kendaraanDisewa() {
        return this._kendaraanDisewa;
    }
}

// Sistem Manajemen Transportasi
class SistemTransportasi {
    constructor() {
        this._pelangganList = [];
    }

    tambahPelanggan(pelanggan) {
        this._pelangganList.push(pelanggan);
    }

    tampilkanPelangganMenyewa() {
        console.log("Daftar Pelanggan yang Sedang Menyewa Kendaraan:");
        this._pelangganList.forEach((pelanggan, index) => {
            if (pelanggan.kendaraanDisewa) {
                console.log(`${index + 1}. ${pelanggan.nama} - ${pelanggan.nomorTelepon} - Kendaraan: ${pelanggan.kendaraanDisewa.infoKendaraan()}`);
            }
        });
    }
}

// Contoh penggunaan
const sistem = new SistemTransportasi();

const pelanggan1 = new Pelanggan("Ali", "08123456789");
const pelanggan2 = new Pelanggan("Budi", "08987654321");

const mobil = new Mobil("Toyota Avanza", 7);
const motor = new Motor("Honda Beat", "Skuter");

pelanggan1.sewaKendaraan(mobil);
pelanggan2.sewaKendaraan(motor);

sistem.tambahPelanggan(pelanggan1);
sistem.tambahPelanggan(pelanggan2);

sistem.tampilkanPelangganMenyewa();
