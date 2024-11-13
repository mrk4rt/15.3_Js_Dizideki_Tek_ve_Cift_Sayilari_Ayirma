// Rastgele sayılardan oluşan bir dizi tanımla
const numbers = [12, 5, 8, 21, 30, 7, 3, 22, 14, 10];

// Tek ve çift sayılar için boş diziler oluştur
const evenNumbers = [];
const oddNumbers = [];

// Döngü ile her sayı üzerinde gezin
for (const number of numbers) {
  if (number % 2 === 0) {
    evenNumbers.push(number);  // Çift sayıları evenNumbers dizisine ekle
  } else {
    oddNumbers.push(number);  // Tek sayıları oddNumbers dizisine ekle
  }
}

// Sonuçları göster
console.log("Çift Sayılar:", evenNumbers);
console.log("Tek Sayılar:", oddNumbers);
