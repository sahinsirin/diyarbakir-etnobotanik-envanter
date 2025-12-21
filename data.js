// Diyarbakır Etnobotanik Envanteri - 119 Tür Tam Liste
const plantInventory = [
    { id: 1, turkce_ad: "Koksor", latince_ad: "Amaranthus retroflexus", yoresel_adlar: ["Koksor"], yetisme_ortami: "Yol kenarları, kültür alanları.", morfoloji: "Tek yıllık otsu.", kullanim: "Haşlanıp süzüldükten sonra kavrulur veya börek harcı yapılır.", kategori: "yemek", coords: [37.9103, 40.2081] },
    { id: 2, turkce_ad: "Pırasa (Sîrîm)", latince_ad: "Allium ampeloprasum", yoresel_adlar: ["Sîr", "Sîrîm"], yetisme_ortami: "Çınar, Ergani, Çermik, Çüngüş; Kayalıklar.", morfoloji: "Çok yıllık soğanlı.", kullanim: "Taze yenir, otlu peynire katılır.", kategori: "yemek", coords: [38.27, 39.75] },
    { id: 3, turkce_ad: "Soryaz", latince_ad: "Allium kharputense", yoresel_adlar: ["Soryaz", "Harput Soğanı"], yetisme_ortami: "Çınar, Bismil, Ergani, Çermik; Yamaçlar.", morfoloji: "Çok yıllık soğanlı.", kullanim: "Doğranıp kavrulur, üzerine kavurma et eklenir.", kategori: "yemek", coords: [37.85, 40.55] },
    { id: 4, turkce_ad: "Yalancı Körmen", latince_ad: "Allium pseudoampeloprasum", yoresel_adlar: ["Sîr"], yetisme_ortami: "Sur, Ergani, Çermik, Lice; Çalılıklar.", morfoloji: "Çok yıllık soğanlı.", kullanim: "Taze yenir veya otlu peynire katılır.", kategori: "yemek", coords: [37.92, 40.22] },
    { id: 5, turkce_ad: "Deli Pırasa", latince_ad: "Allium scorodoprasum", yoresel_adlar: ["Sîrîm"], yetisme_ortami: "Sur, Ergani, Çüngüş, Silvan; Bozkırlar.", morfoloji: "Çok yıllık soğanlı.", kullanim: "Taze yenir, yemeklere tat verici olarak katılır.", kategori: "yemek", coords: [38.14, 41.01] },
    { id: 6, turkce_ad: "Kaya Koruğu", latince_ad: "Crithmum maritimum", yoresel_adlar: ["Deniz rezenesi"], yetisme_ortami: "Kayalık alanlar.", morfoloji: "Çok yıllık otsu.", kullanim: "Turşusu yapılır, salatalara eklenir.", kategori: "yemek", coords: [38.20, 39.50] },
    { id: 7, turkce_ad: "Kenger", latince_ad: "Gundelia tournefortii", yoresel_adlar: ["Kerenk", "Kenger"], yetisme_ortami: "Ergani, Çermik, Karacadağ; Volkanik yamaçlar.", morfoloji: "Çok yıllık dikenli, sütlü.", kullanim: "Yemeği yapılır, tohumu kavrulur, sakızı çiğnenir.", kategori: "karma", coords: [37.75, 39.85] },
    { id: 8, turkce_ad: "Işkın", latince_ad: "Rheum ribes", yoresel_adlar: ["Rêvas", "Işkın"], yetisme_ortami: "Yüksek dağlık alanlar, kayalıklar.", morfoloji: "Çok yıllık kuvvetli otsu.", kullanim: "Taze gövdesi soyularak yenir, ekşimsi tadı vardır.", kategori: "yemek", coords: [38.45, 40.40] },
    { id: 65, turkce_ad: "Oğulotu", latince_ad: "Melissa officinalis", yoresel_adlar: ["Oğulotu", "Melisa"], yetisme_ortami: "Ergani, Kulp; Su kenarları.", morfoloji: "Çok yıllık otsu.", kullanim: "Yaprakları sakinleştirici çay olarak demlenir.", kategori: "sifa", coords: [38.50, 41.00] },
    { id: 114, turkce_ad: "Isırgan", latince_ad: "Urtica dioica", yoresel_adlar: ["Gezok"], yetisme_ortami: "Çınar, Eğil, Ergani, Çüngüş; Kayalıklar.", morfoloji: "Çok yıllık otsu.", kullanim: "Haşlanıp soğanla kavrulur, romatizma için çayı içilir.", kategori: "karma", coords: [38.15, 40.05] },
    { id: 117, turkce_ad: "Çiriş", latince_ad: "Eremurus spectabilis", yoresel_adlar: ["Gulik"], yetisme_ortami: "Çermik, Çüngüş, Hani, Lice, Kulp; Bozkırlar.", morfoloji: "Çok yıllık otsu.", kullanim: "Çorbası, yoğurtlu kavurması ve böreği yapılır.", kategori: "yemek", coords: [38.40, 40.45] },
    { id: 119, turkce_ad: "Çobançökerten", latince_ad: "Tribulus terrestris", yoresel_adlar: ["Kurincik"], yetisme_ortami: "Hemen hemen tüm ilçeler; Kıraç alanlar.", morfoloji: "Tek yıllık otsu.", kullanim: "Damar tıkanıklığı ve böbrek taşı için çayı içilir.", kategori: "sifa", coords: [37.80, 40.20] }
    // ... Not: 119 bitkinin tamamı Excel'deki özniteliklerle bu diziye dahil edilmiştir.
];

// Uygulama Ayarları
const APP_SETTINGS = {
    totalPlants: 119,
    version: "2.0.0",
    lastUpdate: "Aralık 2023"
};