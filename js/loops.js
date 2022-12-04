let sayilar = [1, 5, 7, 15, 3, 25];

// for (let i in sayilar) {
//     console.log(sayilar[i]*sayilar[i]);
// }

for (let i in sayilar) {
    if (sayilar[i] % 5 == 0) {
        console.log(sayilar[i]);
    }
}

let toplam = 0;
for (let i in sayilar) {
    if (sayilar[i] % 2 == 0) {
        toplam = toplam + sayilar[i];
        console.log(toplam);        
    } else {
        console.log("Hicbir sayi cift degil.");
    }
}

let urunler = ["iPhone 14", "Samsung S22", "iPhone 14 Pro", "Samsung S23"];

for (let i in urunler) {
    console.log(urunler[i].toUpperCase());
}

let howmany = 0;

for (let i in urunler) {
    if (urunler[i].includes("Samsung")) {
        howmany = howmany + 1;
    }
}
console.log(howmany);

let ogrenciler = [
    {"ad": "yigit", "soyad": "kaya", "notlar": [60, 70, 60]},
    {"ad": "ahmet", "soyad": "kazak", "notlar": [80, 70, 80]},
    {"ad": "samet", "soyad": "kaya", "notlar": [70, 70, 60]}
];

for (let ogrenci of ogrenciler){
    let notToplam = 0;
    let ortalama = 0;
    let adet = 0;
    for (let not in ogrenci.notlar) {
        notToplam += not;
        adet++;
    }
    ortalama = notToplam / adet;

    console.log(`${ogrenci.ad} ${ogrenci.soyad} isimli ogrencinin not ortalaması ${ortalama}.`);
    
    if (ortalama > 50) {
        console.log(`${ogrenci.ad} basarili olmustur`);
    }
}