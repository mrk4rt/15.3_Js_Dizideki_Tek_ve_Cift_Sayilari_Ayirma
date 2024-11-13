# Dizideki Tek ve Çift Sayıları Ayırma Projesi

Bu projede, rastgele sayılardan oluşan bir dizi içerisindeki tek ve çift sayıları ayırarak iki farklı diziye ekleyeceğiz. `for` veya `for...of` döngüsünü kullanarak bu işlemi gerçekleştireceğiz.

## Proje Amacı

- Bir dizi içerisindeki tek ve çift sayıları ayırmak.
- Tek sayıları bir diziye, çift sayıları başka bir diziye yerleştirmek.

## Adımlar

1. **Dizi Oluşturma:** İlk olarak, rastgele sayılardan oluşan bir dizi tanımla.
2. **Boş Diziler Tanımlama:** Tek ve çift sayılar için iki farklı boş dizi oluştur.
3. **Döngü Kullanma:** Dizideki her bir sayı üzerinde gezinmek için `for` veya `for...of` döngüsü kullan.
   - Her sayının tek mi yoksa çift mi olduğunu kontrol etmek için mod (`%`) operatörünü kullan.
   - Çift sayılar `evenNumbers` dizisine, tek sayılar `oddNumbers` dizisine eklenecek.
4. **Sonuçları Gösterme:** Ayırdığın tek ve çift sayıları içeren dizileri ekrana yazdır.

## Açıklama

- `for...of` döngüsü her bir sayı üzerinde gezerek sayıyı `number` olarak tanımlar.
- `if (number % 2 === 0)` ifadesi, sayının çift olup olmadığını kontrol eder. Çift sayılar `evenNumbers` dizisine eklenir; aksi durumda sayı `oddNumbers` dizisine eklenir.

## Anahtar Kelimeler

- **Döngüler:** `for`, `for...of`
- **Diziler:** Dizi oluşturma, `push` yöntemi
- **Koşul:** `if` yapısı
- **Mod Operatörü:** `%`, bir sayının tek veya çift olduğunu anlamak için kullanılır

Bu yapı, diziler üzerinde döngü ve koşul ifadeleri ile veri ayırma konusunda pratiğe yönelik bir örnektir.
