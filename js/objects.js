// let user = {
//     "name": "Ahmet",
//     "surname": "Kazak",
//     "age": 23,
//     "address": {
//         "City": "Istanbul",
//         "Region": "Levent-4"
//     }
//     "hobbies": ["fifa", "code"]
// }

// let result;

// result = user.name;
// console.log(result);

// result = user.surname;
// console.log(result);

// result = user["age"];
// console.log(result);

// result = user.address.City;
// console.log(result);

// result = user.address.Region;
// console.log(result);

// result = user.hobbies[0];


let siparis_1 = {
    "siparis_id": 101,
    "siparis_tarihi": "04.12.2022",
    "odeme_sekli": "kredi karti",
    "kargo_adresi": {
        "mahalle": "zafer",
        "ilce": "corlu",
        "sehir": "tekirdag",
    },
    "urunler": [        
        {
            "urun_id": 6,
            "urun_adi": "iPhone 14",
            "urun_url": "http://abc.com/iphone-14",
            "urun_fiyat": 30999 
        },
        {
            "urun_id": 1,
            "urun_adi": "iPhone 12",
            "urun_url": "http://abc.com/iphone-12",
            "urun_fiyat": 22999 
        },
    ]
};

let siparis_2 = {
    "siparis_id": 101,
    "siparis_tarihi": "04.12.2022",
    "odeme_sekli": "kredi karti",
    "kargo_adresi": {
        "mahalle": "zafer",
        "ilce": "corlu",
        "sehir": "tekirdag",
    },
    "urunler": [        
        {
            "urun_id": 3,
            "urun_adi": "Apple 20 W Charger",
            "urun_url": "http://abc.com/Apple-Charger-20W",
            "urun_fiyat": 549 
        },
        {
            "urun_id": 7,
            "urun_adi": "iPhone 14 Pro",
            "urun_url": "http://abc.com/iphone-14-pro",
            "urun_fiyat": 39999 
        },
    ]
};

let siparis1_toplam = (siparis_1.urunler[0].urun_fiyat + siparis_1.urunler[1].urun_fiyat) * 1.18;
let siparis2_toplam = (siparis_2.urunler[0].urun_fiyat + siparis_2.urunler[1].urun_fiyat) * 1.18;

let toplam_siparis = siparis1_toplam + siparis2_toplam;

console.log("toplam odenen miktar: ", toplam_siparis)

let siparisler = [siparis_1, siparis_2];
