function selamlama(msg) {
    console.log(msg);
}

selamlama("selam");
selamlama("iyi gunler");
selamlama("gunaydin");
selamlama("merhaba");

function yasHesapla(dogumYili) {
    return new Date().getFullYear() - dogumYili;
}

let yasAnil = yasHesapla(1999);
let yasCansu = yasHesapla(1993);

console.log(yasAnil, yasCansu);

function emeklilikCalculator(dogumYili, isim) {
    let yas = yasHesapla(dogumYili);
    let kalanYil = 65 - yas;
    
    if (kalanYil > 0) {
        console.log(`${isim} emekli olmaniza ${kalanYil} kaldi`);
    } else {
        console.log("Zaten emekli oldunuz.");
    }
}

emeklilikCalculator(1999, );