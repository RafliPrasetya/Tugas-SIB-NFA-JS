// Data awal produk
let products = [
    { id: 1, name: "Laptop", price: 10000000 },
    { id: 2, name: "Smartphone", price: 5000000 },
    { id: 3, name: "Tablet", price: 3000000 },
    { id: 4, name: "Smartwatch", price: 2000000 },
    { id: 5, name: "Headphone", price: 1000000 }
];

// Fungsi untuk menampilkan produk di HTML
function showProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; // Kosongkan daftar sebelum ditampilkan ulang

    products.forEach(({ id, name, price }) => {
        const li = document.createElement("li");
        li.textContent = `ID: ${id} | ${name} - Rp${price}`;
        productList.appendChild(li);
    });
}

// Fungsi menambahkan produk baru
function addProduct() {
    const nameInput = document.getElementById("product-name");
    const priceInput = document.getElementById("product-price");

    const name = nameInput.value;
    const price = parseInt(priceInput.value);

    if (name && price > 0) {
        const newId = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
        products = [...products, { id: newId, name, price }];
        
        showProducts();
        nameInput.value = "";
        priceInput.value = "";
    } else {
        alert("Masukkan nama dan harga yang valid!");
    }
}

// Fungsi menghapus produk berdasarkan ID
function removeProduct() {
    const idInput = document.getElementById("delete-id");
    const id = parseInt(idInput.value);

    const productIndex = products.findIndex(product => product.id === id);

    if (productIndex !== -1) {
        const [deletedProduct] = products.splice(productIndex, 1); // Destructuring
        showProducts();
        idInput.value = "";
    } else {
        alert("Produk tidak ditemukan!");
    }
}

// Event Listener untuk tombol
document.getElementById("add-product").addEventListener("click", addProduct);
document.getElementById("delete-product").addEventListener("click", removeProduct);

// Tampilkan daftar produk awal
document.addEventListener("DOMContentLoaded", showProducts);
