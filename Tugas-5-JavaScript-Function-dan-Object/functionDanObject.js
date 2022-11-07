//! Soal 1 ( Membuat Function dengan return String )
// function myFunction() {
//   console.log("Hello nama Saya Taufan");
// }
// myFunction();

//! Soal 2 ( Membuat Function dengan rumus penjumlahan didalamnya)
// function myFunction(angka1, angka2) {
//   return angka1 + angka2;
// }
// console.log(myFunction(20, 7));

//! Soal 3 ( Mengubah dalam bentuk arrow function )
// const hello = () => {
//   console.log("Hello");
// };
// hello();

//! soal 4 ( Memanggil key dalam sebuah object )
// let obj = {
//   nama: "john",
//   umur: 22,
//   bahasa: "indonesia",
// };
// const myFunction = () => {
//   return obj;
// };
// console.log(obj.bahasa);

//! soal 5 ( mengubah array menjadi object )
// let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku", 1992];
// let objDaftarPeserta = {
//   name: "John Doe",
//   jenisKelamin: "laki-laki",
//   hobi: "baca",
//   tahunLahir: "1992",
// };
// console.log(arrayDaftarPeserta[0]);

//! soal 6( Membuat sebuah array of object dan melakukan filter )
// const fruits = [
//   { name: "Nanas", warna: "Kuning", adaBijinya: false, harga: 9000 },
//   { nama: "Jeruk", warna: "Oranye", adaBijinya: true, harga: 8000 },
//   { nama: "Semangka", warna: "Hijau & Merah", adaBijinya: false, harga: 10000 },
//   { nama: "Pisang", warna: "Kuning", adaBijinya: false, harga: 5000 },
// ];
// const sortir = fruits.filter((fruits) => fruits.warna === "Kuning");
// console.log(sortir);

//! Soal 7 ( Destructuring pada Object )
// let phone = {
//   name: "Galaxy Note 20",
//   brand: "Samsung",
//   year: 2020,
// };
// const { name, brand, year } = phone;
// console.log(name, brand, year);

//! soal 8 ( Spred Operator pada Object )
// let dataBukuTambahan = {
//   penulis: "john doe",
//   tahunTerbit: 2020,
// };

// let buku = {
//   nama: "pemograman dasar",
//   jumlahHalaman: 172,
// };
// const allBook = { dataBukuTambahan, buku };
// console.log(allBook);

//! soal 9 ( Penggunaan Function dan Object )
let mobil = {
  merk: "bmw",
  color: "red",
  year: 2002,
};
const functionObject = (mobil) => {
  return mobil;
};
console.log(mobil);
