var urunAdi = "iPhone 14"; //string
let urunFiyat = 30999; //number

console.log(typeof urunAdi);
console.log(typeof urunFiyat);

let sayi1 = "10";
let sayi2 = "20";

console.log(sayi1 + sayi2);
console.log(Number(sayi1) + Number(sayi2));

let sayi3 = 30
let sayi4 = 40

console.log(sayi3.toString() + sayi4.toString());

let isim = "anil";
let soyad= "mirap";

console.log(isim + " " + soyad);

let sinavNotu = 70;
let basarilimi = (sinavNotu >= 35);

console.log(basarilimi);
console.log(typeof basarilimi);

let yas;
console.log(yas);
console.log(typeof yas);

yas = "";
console.log(yas);
console.log(typeof yas);

/*
    1. İki öğrencinin aşağıdaki bilgilerini değişkenler içerisinde saklayınız.

        öğrenci 1:
            isim              : ahmet kazak
            doğum yili        : 1999
            matematik notlari : 45, 84, 65

        ogrenci 2:
            isim              : anil mirap
            doğum yili        : 1999
            matematik notlari : 60, 20, 55

    2. Öğrencilerin yaş bilgilerini değişkende tutun.
    3. öğrencilerin dest ortalama notunun değişkende tutun
    4. öğrencilerin 50 geçme notuna göre başarı durumlarını değişkende saklayın.
*/

let yil = new Date().getFullYear();

let ogr1_ad = "ahmet kazak";
let ogr1_doy = 1999;
let ogr1_scr1 = 45;
let ogr1_scr2 = 84;
let ogr1_scr3 = 65
let ogr1_avgScore = (ogr1_scr1 + ogr1_scr2 + ogr1_scr3)/3;
let basariAhmet = (ogr1_avgScore >= 50);
let yasAhmet = yil - ogr1_doy;

console.log("ahmetin yasi: " + yasAhmet);
console.log("ahmetin ortalamasi: " + ogr1_avgScore);
console.log("Ahmet basarili mi?" + " " + basariAhmet);

let ogr2_ad = "anil mirap"
let ogr2_doy = 1999;
let ogr2_scr1 = 60;
let ogr2_scr2 = 20;
let ogr2_scr3 = 55;
let ogr2_avgScore = (ogr2_scr1 + ogr1_scr2 + ogr2_scr3)/3;
let basariAnil = (ogr2_avgScore >= 50);
let yasAnil = yil - ogr2_doy;

console.log("anilin yasi: " + yasAnil);
console.log("anilin ortalamasi:" + " " + ogr2_avgScore);
console.log("Anil basarili mi?" + " " + basariAnil);