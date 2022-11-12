if (3 > 2){
    console.log("merhaba");
}
let username = "anilmirap"
let password = "1234"

if (username == "anilmirap"){
    if (password == "1234"){
        console.log("giris basarili");
    }
}
else{
    console.log("kullanici adi veya sifre hatali");
}

// yas >= 18
// mezuniyet == "lise" ya da mezuniyet == "universite"

let yas = 20;
let mezuniyet = "universite";

if ((yas => 18) && (mezuniyet == "lise" || mezuniyet == "universite")) {
    console.log("ehliyet alabilir");
} else{
    console.log("ehliyet alamaz!");
}

// 1. bir sayının 10-50 arasında olup olmadığını kontrol et.
// 2. bir sayının pozitif tek sayı olup olmadığını kontrol et.
// 3. x, y, z sayılarının büyüklük karşılaştırmasını yap.
// 4. 2 vize ve 1 final notuna göre hesaplanan ortalama için:
    // a. eğer ortalama 50 ve üstündeyse geçti, değilse kaldı.
    // b. geçmek için ort. 50 bile olsa final en az 50 olmalı.
    // c. finalden 70 ve üzeri alındığında ort. 50'nin altında olsa bile geçsin.

let sayi = 35;
if (sayi >= 10 && sayi <=50){
    console.log("tolerans limitlerinde");
} else{
    console.log("limit disi");
}

if (sayi % 2 == 1 && sayi > 0){
    console.log("sayi pozitif tek sayidir");
}else{
    console.log("sayi pozitif tek sayi değildir.");
}

let vize1 = 0;
let vize2 = 0;
let final = 70;

console.log("ortalamaniz: " + (vize1 * 0.25 + vize2 * 0.25 + final * 0.5));

if ((vize1 * 0.25 + vize2 * 0.25 + final * 0.5) >= 50 && final >= 50){
    console.log("ortalama ile geçtiniz.");
} else if (final >= 70){
    console.log("final notu ile geçtiniz");
} else{
    console.log("kaldiniz.");
}