let angka = [1, 46, 75, 12, 89, 54, 101];
let genap = [];

// Tulis kode kalian di bawah ini

for (let i = 1; i < angka.length; i++) {
  if (angka[i] % 2 == 0) {
    genap.push(angka[i]);
  }
}

console.log(genap);
