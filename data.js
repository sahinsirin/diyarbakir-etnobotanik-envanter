// bitki türleri sınıflandırma.xlsx verilerinin JSON formatı
const plantInventory = [
    {
        id: 1,
        turkce_ad: "Koksor",
        latince_ad: "Amaranthus retroflexus",
        yoresel_adlar: ["Koksor"],
        yetisme_ortami: "Yol kenarları, kültür alanları.",
        morfoloji: "Tek yıllık otsu.",
        kullanim: "Haşlanıp süzüldükten sonra kavrulur veya börek harcı yapılır.",
        kategori: "yemek",
        coords: [37.9103, 40.2081] // Örnek merkez koordinat
    },
    {
        id: 2,
        turkce_ad: "Pırasa (Sîrîm)",
        latince_ad: "Allium ampeloprasum",
        yoresel_adlar: ["Sîr", "Sîrîm"],
        yetisme_ortami: "Çınar, Ergani, Çermik, Çüngüş; Kayalıklar.",
        morfoloji: "Çok yıllık soğanlı.",
        kullanim: "Taze yenir, otlu peynire katılır.",
        kategori: "yemek",
        coords: [38.27, 39.75]
    },
    {
        id: 117,
        turkce_ad: "Çiriş (Gulik)",
        latince_ad: "Eremurus spectabilis",
        yoresel_adlar: ["Gulik"],
        yetisme_ortami: "Çermik, Çüngüş, Hani, Lice, Kulp; Bozkırlar.",
        morfoloji: "Çok yıllık otsu.",
        kullanim: "Çorbası, yoğurtlu kavurması ve böreği yapılır.",
        kategori: "yemek",
        coords: [38.41, 40.41]
    },
    {
        id: 119,
        turkce_ad: "Çobançökerten",
        latince_ad: "Tribulus terrestris",
        yoresel_adlar: ["Kurincik"],
        yetisme_ortami: "Hemen hemen tüm ilçeler; Kıraç alanlar.",
        morfoloji: "Tek yıllık otsu.",
        kullanim: "Damar tıkanıklığı ve böbrek taşı için çayı içilir.",
        kategori: "sifa",
        coords: [37.85, 40.50]
    }
    // DİĞER 115 TÜR BU LİSTEYE EKLENEBİLİR...
];