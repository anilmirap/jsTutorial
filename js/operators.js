let sonuc;
let a = 10, b = 20, c = 32;

// 1. Aritmetik operatorler
sonuc = a + b; // toplama
sonuc = a - b; // cikarma
sonuc = a * b; // carpma
sonuc = a / b; // bolme
sonuc = a % b; // mod
sonuc = a++;   // a + 1
sonuc = ++a;   // a + 1 ama önce a tanımlanıyor sonra arttırıyor.
sonuc = a--;   // azaltma
sonuc = --a;   // aynı mantık.

// 2. Atama operatorleri
sonuc = a;
sonuc += a; // sonuc = sonuc + a;
sonuc -= a; // sonuc = sonuc - a;
sonuc *= a; // sonuc = sonuc * a;
sonuc /= a; // sonuc = sonuc / a;
sonuc %= a; // sonuc = sonuc % a;

// 3. karşılaştırma operatorleri (boolean)

sonuc = (a == a);    // eşit mi? => eşit ise = 1
sonuc = (a != a);    // eşit değil mi? => eşit değil ise = 1
sonuc = (3 === "3"); // değer ve tip kontrolü yapıyor ve and operatörüne göre veriyor yani hem tip hem değer aynı olursa sonuç true.
sonuc = (a > b);
sonuc = (a < b);
sonuc = (a >= b);
sonuc = (a <= b);


