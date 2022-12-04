// OOP: Nesne Tabanlı Programlama

let soru1 = {
    soruMetni: "hangisi JS paket yönetimi uygulamasidir?",
    cevapSecenekleri: {
        a: "node.Js",
        b: "TypeScript",
        c: "npm",
    },
    dogruCevap: "c",
    cevabiKontrolEt: function(cevap){
        return cevap === this.dogruCevap
    }
}

let soru2 = {
    soruMetni: "hangisi .net paket yönetimi uygulamasidir?",
    cevapSecenekleri: {
        a: "node.Js",
        b: "nuget",
        c: "npm",
    },
    dogruCevap: "b",
    cevabiKontrolEt: function(cevap){
        return cevap === this.dogruCevap
    }
}

console.log(soru1.soruMetni);
console.log(soru1.cevabiKontrolEt("c"));
console.log(soru2.cevabiKontrolEt("b"));

// sinif => nesne * 30
