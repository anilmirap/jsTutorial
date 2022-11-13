let ad = "anil";
let soyad = "mirap";
let yas = 23;
let sehir = "tekirdag";

let mesaj = "benim adim " + ad + ", " + "soyadim " + soyad + "." + "yasim " + yas + "yasadigim sehir " + sehir;

mesaj2 = `Benim adim ${ad}, soyadim ${soyad}. ${sehir}'da yasiyorum. emekliligime ${65-yas} yilim kaldi.`;
console.log(mesaj);
console.log(mesaj2);

let kursAdi = "Komple Uygulamalı Web Gelistirme.";
let sonuc;

sonuc = kursAdi.toLowerCase();
console.log(sonuc);

sonuc = kursAdi.toUpperCase();
console.log(sonuc);

sonuc = kursAdi.length;
console.log(sonuc);

sonuc = kursAdi[3]; // index seçme
console.log(sonuc);

sonuc = kursAdi.slice(0, 5); // 0'dan 5'e kadar kısmını alıyor. 5 hariç.
console.log(sonuc);

sonuc = kursAdi.slice(10); // 10. indexten başlayıp sona kadar alıyor.
console.log(sonuc);

sonuc = kursAdi.slice(-10) // sondan başlayıp sondan 10. indexe kadar alıyor.
console.log(sonuc);

sonuc = kursAdi.substring(1, 12);
console.log(sonuc);