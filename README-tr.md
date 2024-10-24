# Nesneler ve Fonksiyonlar

Bu alıştırma, nesnelerle çalışma ve bunları fonksiyonlarla nasıl kullanacağınızı öğrenmenize yardımcı olacak bazı temel kullanım örneklerini içerir.

## Görev 1

Kullanıcı profilleri için veri içeren 3 nesne oluşturun.

Her nesne aşağıdaki özellikleri içermelidir:

- `firstName` (ad)
- `lastName` (soyad)
- `email` (e-posta)
- `age` (yaş)

İstediğiniz verileri kullanabilirsiniz veya aşağıdaki örnekleri kullanabilirsiniz:

- Mark Maxwell, 32, mark@email.com
- Sally Samson, 24, sally@email.com
- Jenny Jay, 38, jenny@email.com

Her nesneyi konsola yazdırın.

Beklenen çıktı:

```plaintext
{
  firstName: 'Mark',
  lastName: 'Maxwell',
  age: 32,
  email: 'mark@email.com'
}
{
  firstName: 'Sally',
  lastName: 'Samson',
  age: 24,
  email: 'sally@email.com'
}
{
  firstName: 'Jenny',
  lastName: 'Jay',
  age: 38,
  email: 'jenny@email.com'
}
```

## Görev 1.1

Oluşturduğunuz 3 nesneye `city` (şehir) özelliği ekleyin, ancak yazdığınız kodu değiştirmeden bu işlemi yapın.

## Görev 1.2

Bir `user` (kullanıcı) nesnesini girdi olarak alan ve bu kullanıcıyı tanımlayan bir mesaj döndüren `describe` adlı bir fonksiyon oluşturun.

Örneğin, ilk kullanıcıya New York şehri eklediğimizi varsayarsak:

```javascript
console.log(describe(user1));

// çıktı
"Mark Maxwell 32 yaşında ve New York'ta yaşıyor"
```

## Görev 1.3

İlk iki kullanıcı nesnesine yalnızca `job` (iş) özelliği ekleyin. Sonuç olarak, sadece ilk 2 kullanıcının bir işi olmalıdır.

Bir `user` (kullanıcı) nesnesini girdi olarak alan ve bu kullanıcının ne iş yaptığını söyleyen bir mesaj döndüren `showJob` adlı bir fonksiyon yazın.

Örneğin:

```plaintext
Sally Samson web geliştiricisi olarak çalışıyor
```

Bir kullanıcının `job` (iş) özelliği yoksa, mesaj farklı olmalıdır.

Örneğin:

```plaintext
Jenny Jay şu anda işsiz
```

## Görev 2

Aşağıdaki özellikleri içeren 3 nesne oluşturun, her biri bir aracı temsil edecek:

- `type`: aracın türü, örneğin araba, kamyon, minibüs, motosiklet...
- `color`: aracın rengi
- `brand`: aracın markası, örneğin Honda, Toyota, Ford...
- `mileage`: aracın şimdiye kadar seyahat ettiği kilometre

## Görev 2.1

Bir `vehicle` (araç) nesnesini girdi olarak kabul eden ve aracın `mileage` (kilometresi) değerine bağlı olarak `true` veya `false` döndüren bir `needsRevision` adlı fonksiyon oluşturun.

Eğer `mileage` 60000'den fazlaysa, fonksiyon `true` döndürür, aksi takdirde `false` döndürür.