// =================================================================
// 1. GeoJSON Veri Seti ve Sabitler
// =================================================================
const PLACEHOLDER_IMAGE_URL = 'https://picsum.photos/400/250'; 
const DIYARBAKIR_CENTER = [37.9103, 40.2081];
const INITIAL_ZOOM = 9;

// Bitki verisi (Kısa versiyon, önceki adımdaki 10 bitki varsayılmıştır)
const plantData = {
    "type": "FeatureCollection",
    "name": "diyarbakir_etnobotanik_envanter",
    "crs": {
        "type": "name",
        "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" }
    },
    "features": [
        // 1. Kenger (Yemeklik & Şifalı)
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [39.8000, 37.8500] },
            "properties": {
                "id": "1", "latince_ad": "Gundelia tournefortii", "turkce_ad": "Kenger", "yoresel_adlar": ["Kenger"],
                "morfolojik_ozellikler": "Çok yıllık, dikenli, sütlü bir bitkidir...",
                "yetisme_ortami": "Karacadağ volkanik etekleri...", "toplama_zamani": "Mart sonu - Mayıs başı",
                "yemek_kullanimi": { "genel_kullanim": "Taze yumuşak kısmı çiğ yenir...", "ornek_yemek": "Kenger Kavurması" },
                "sifa_kullanimi": { "genel_kullanim": "Kökünden elde edilen sakız mide ve sindirim sistemine iyi gelir." },
                "fotograflar": [PLACEHOLDER_IMAGE_URL],
                "kullanim_alani": ["yemek", "sifa"] // YENİ ALAN
            }
        },
        // 2. Gulik (Yemeklik)
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [40.5000, 38.0500] },
            "properties": {
                "id": "2", "latince_ad": "Tamus communis", "turkce_ad": "Gulik", "yoresel_adlar": ["Gulik"],
                "morfolojik_ozellikler": "Tırmanıcı, ince gövdeli, kalp şeklinde parlak yapraklı çok yıllık bitkidir...",
                "yetisme_ortami": "Koruluklar, nemli ve gölgelik alanlar...", "toplama_zamani": "Nisan - Mayıs",
                "yemek_kullanimi": { "genel_kullanim": "Sürgünleri haşlanarak yumurta ile kavurması veya salatası yapılır.", "ornek_yemek": "Gulik Kavurması" },
                "sifa_kullanimi": { "genel_kullanim": "Kökü zehirli olmasına rağmen, halk tıbbında haricen romatizma ağrılarına karşı kullanılır." }, // Şifa amaçlı kullanılıyor ama temel olarak yemeklik.
                "fotograflar": [PLACEHOLDER_IMAGE_URL],
                "kullanim_alani": ["yemek"] // YENİ ALAN
            }
        },
        // 3. Sirmo (Yemeklik & Şifalı)
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [40.2300, 37.9500] },
            "properties": {
                "id": "3", "latince_ad": "Mentha longifolia", "turkce_ad": "Yabani Nane", "yoresel_adlar": ["Sirmo"],
                "morfolojik_ozellikler": "Güçlü kokulu, çok yıllık otsu bir bitkidir...",
                "yetisme_ortami": "Dicle Vadisi çevresi, su kenarları...", "toplama_zamani": "İlkbahar sonu - Yaz başı",
                "yemek_kullanimi": { "genel_kullanim": "Aromatik olarak salatalarda (cacık), çorbalarda kullanılır.", "ornek_yemek": "Sirmo Cacığı" },
                "sifa_kullanimi": { "genel_kullanim": "Çayı mide ağrısı, sindirim sorunları için kullanılır." },
                "fotograflar": [PLACEHOLDER_IMAGE_URL],
                "kullanim_alani": ["yemek", "sifa"] // YENİ ALAN
            }
        },
        // 4. Heliz (Yemeklik & Şifalı)
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [40.3500, 37.6000] },
            "properties": {
                "id": "4", "latince_ad": "Eremurus spectabilis", "turkce_ad": "Çiriş Otu", "yoresel_adlar": ["Heliz", "Hılız"],
                "morfolojik_ozellikler": "Soğanlı, uzun ve ince yapraklı bir bitkidir...",
                "yetisme_ortami": "Yüksek rakımlı dağlık alanlar ve yaylalar.", "toplama_zamani": "Nisan - Mayıs",
                "yemek_kullanimi": { "genel_kullanim": "Taze yaprakları ve yumuşak gövdesi haşlanarak yemeği, pilavı veya böreği yapılır.", "ornek_yemek": "Heliz Yemeği" },
                "sifa_kullanimi": { "genel_kullanim": "Halk arasında bağışıklık sistemini güçlendirici olarak kullanılır." },
                "fotograflar": [PLACEHOLDER_IMAGE_URL],
                "kullanim_alani": ["yemek", "sifa"] // YENİ ALAN
            }
        },
        // 5. Hardal Otu (Yemeklik)
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [40.0500, 38.0000] },
            "properties": {
                "id": "5", "latince_ad": "Sinapis arvensis", "turkce_ad": "Yabani Hardal", "yoresel_adlar": ["Hardal Otu"],
                "morfolojik_ozellikler": "Sarı çiçekli, hızlı büyüyen tek yıllık otsu bitkidir.",
                "yetisme_ortami": "Tarla kenarları, yol kenarları...", "toplama_zamani": "İlkbahar",
                "yemek_kullanimi": { "genel_kullanim": "Genç yaprakları ve sürgünleri haşlanıp salatası (limonlu) veya zeytinyağlı yemeği yapılır.", "ornek_yemek": "Hardal Otu Salatası" },
                "sifa_kullanimi": { "genel_kullanim": "Tohumları hardal olarak kullanılır, yaprakları C vitamini kaynağıdır." },
                "fotograflar": [PLACEHOLDER_IMAGE_URL],
                "kullanim_alani": ["yemek"] // YENİ ALAN
            }
        },
        // 6. Kuzukulağı (Yemeklik)
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [39.9500, 37.7500] },
            "properties": {
                "id": "6", "latince_ad": "Rumex acetosella", "turkce_ad": "Kuzukulağı", "yoresel_adlar": ["Ekşikulak"],
                "morfolojik_ozellikler": "Ok ucu şeklinde yapraklara sahip, hafif ekşi tadı olan otsu bitkidir.",
                "yetisme_ortami": "Nemli çayırlar, sulak arazi kenarları.", "toplama_zamani": "Mart - Haziran",
                "yemek_kullanimi": { "genel_kullanim": "Taze yaprakları çiğ olarak salatalarda ve çorbalara ekşi tat vermek için kullanılır.", "ornek_yemek": "Kuzukulağı Çorbası" },
                "sifa_kullanimi": { "genel_kullanim": "Halk arasında kan temizleyici ve iştah açıcı olarak bilinir." },
                "fotograflar": [PLACEHOLDER_IMAGE_URL],
                "kullanim_alani": ["yemek"] // YENİ ALAN
            }
        },
        // 7. Yarpuz (Şifalı)
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [40.1000, 38.1500] },
            "properties": {
                "id": "7", "latince_ad": "Mentha pulegium", "turkce_ad": "Yarpuz", "yoresel_adlar": ["Yarpuz"],
                "morfolojik_ozellikler": "Yoğun naneli kokulu, kısa boylu ve yayılıcı otsu bitkidir.",
                "yetisme_ortami": "Akarsu, dere ve nehir kenarları.", "toplama_zamani": "Yaz",
                "yemek_kullanimi": { "genel_kullanim": "Genellikle kurutularak baharat olarak veya çorbalara aroma katmak için kullanılır.", "ornek_yemek": "Yarpuzlu Bulgur Pilavı" },
                "sifa_kullanimi": { "genel_kullanim": "Hazımsızlık ve şişkinlik giderici çayı yapılır." },
                "fotograflar": [PLACEHOLDER_IMAGE_URL],
                "kullanim_alani": ["sifa"] // YENİ ALAN
            }
        },
        // 8. Ebegümeci (Yemeklik & Şifalı)
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [40.4000, 37.8000] },
            "properties": {
                "id": "8", "latince_ad": "Malva sylvestris", "turkce_ad": "Ebegümeci", "yoresel_adlar": ["Gaba"],
                "morfolojik_ozellikler": "Mor renkli çiçeklere sahip, yaygın olarak bulunan otsu bitkidir.",
                "yetisme_ortami": "Nadas tarlaları, yol kenarları, bahçeler.", "toplama_zamani": "İlkbahar - Sonbahar",
                "yemek_kullanimi": { "genel_kullanim": "Yaprak ve sürgünleri haşlanıp yemeği yapılır veya zeytinyağlı olarak tüketilir.", "ornek_yemek": "Ebegümeci Yemeği" },
                "sifa_kullanimi": { "genel_kullanim": "Boğaz ağrısı ve öksürük için çayı yapılır, yumuşatıcı özelliği vardır." },
                "fotograflar": [PLACEHOLDER_IMAGE_URL],
                "kullanim_alani": ["yemek", "sifa"] // YENİ ALAN
            }
        },
        // 9. Çökelek Otu (Yemeklik)
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [39.7000, 37.9000] },
            "properties": {
                "id": "9", "latince_ad": "Asphodelus aestivus", "turkce_ad": "Çiriş (Geniş Yapraklı)", "yoresel_adlar": ["Çökelek Otu"],
                "morfolojik_ozellikler": "Uzun, kılıç şeklinde yapraklara ve beyaz çiçeklere sahiptir.",
                "yetisme_ortami": "Taşlık, kayalık yamaçlar ve nadas tarlaları.", "toplama_zamani": "Mart - Nisan",
                "yemek_kullanimi": { "genel_kullanim": "Genç filizleri toplanır ve yumurta ile kavrulur.", "ornek_yemek": "Çökelek Otu Kavurması" },
                "sifa_kullanimi": { "genel_kullanim": "Halk arasında kökünün yaralara iyi geldiği düşünülür." },
                "fotograflar": [PLACEHOLDER_IMAGE_URL],
                "kullanim_alani": ["yemek"] // YENİ ALAN
            }
        },
        // 10. Madımak (Yemeklik & Şifalı)
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [40.1500, 37.5500] },
            "properties": {
                "id": "10", "latince_ad": "Polygonum cognatum", "turkce_ad": "Madımak", "yoresel_adlar": ["Madımak"],
                "morfolojik_ozellikler": "Yere yayılan, küçük yapraklı ve kırmızımsı gövdeli otsu bitkidir.",
                "yetisme_ortami": "Çayırlar ve otlaklar.", "toplama_zamani": "İlkbahar",
                "yemek_kullanimi": { "genel_kullanim": "Bulgur veya pirinçle yemeği yapılır, bazen salatalara da eklenir.", "ornek_yemek": "Madımak Aşı (Yemeği)" },
                "sifa_kullanimi": { "genel_kullanim": "İdrar söktürücü ve kan şekerini dengeleyici etkileri olduğu düşünülür." },
                "fotograflar": [PLACEHOLDER_IMAGE_URL],
                "kullanim_alani": ["yemek", "sifa"] // YENİ ALAN
            }
        }
    ]
};

// =================================================================
// 2. Leaflet Haritası ve İkon Tanımlamaları
// =================================================================

const map = L.map('map').setView(DIYARBAKIR_CENTER, INITIAL_ZOOM);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap katkıcıları'
}).addTo(map);

let geoJsonLayer;
let currentFilter = 'all'; // Mevcut filtre durumunu tutar

// Özel İkon Tanımları (Yemeklik: Yeşil, Şifalı: Kırmızı/Koyu Pembe, İkisi birden: Turuncu)
const greenIcon = new L.DivIcon({
    className: 'custom-marker yemek-marker',
    html: '<div style="background-color: #008000; width: 15px; height: 15px; border-radius: 50%; border: 3px solid white;"></div>',
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -10]
});

const redIcon = new L.DivIcon({
    className: 'custom-marker sifa-marker',
    html: '<div style="background-color: #CC0000; width: 15px; height: 15px; border-radius: 50%; border: 3px solid white;"></div>',
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -10]
});

const mixedIcon = new L.DivIcon({
    className: 'custom-marker mixed-marker',
    html: '<div style="background-color: #FF8C00; width: 15px; height: 15px; border-radius: 50%; border: 3px solid white;"></div>',
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -10]
});

// Bitkinin kullanım alanına göre ikon döndüren fonksiyon
function getIconForPlant(kullanim_alani) {
    const isYemek = kullanim_alani.includes("yemek");
    const isSifa = kullanim_alani.includes("sifa");

    if (isYemek && isSifa) {
        return mixedIcon;
    } else if (isYemek) {
        return greenIcon;
    } else if (isSifa) {
        return redIcon;
    }
    return L.icon.Default(); // Hiçbiri değilse varsayılan
}


// =================================================================
// 3. Detay ve Etkileşim Fonksiyonları
// =================================================================

function displayPlantDetails(properties) {
    // ... (Önceki adımdaki displayPlantDetails fonksiyonunun içeriği aynı kalmalı)
    const detailsView = document.getElementById('plant-details-view');
    if (!detailsView) return; 

    const htmlContent = `
        <h3 style="color:#006666; margin-top: 0;">${properties.turkce_ad} Detayları</h3>
        <div class="plant-details-card">
            <img src="${properties.fotograflar[0] || PLACEHOLDER_IMAGE_URL}" alt="${properties.turkce_ad} fotoğrafı" style="width:100%; height:auto; border-radius: 5px; margin-bottom: 15px;">
            <p><strong>Latince Adı:</strong> <em>${properties.latince_ad}</em></p>
            <p><strong>Yöresel Adı:</strong> ${properties.yoresel_adlar.join(', ')}</p>
            <p><strong>Morfoloji:</strong> ${properties.morfolojik_ozellikler}</p>
            <p><strong>Yetişme Ortamı:</strong> ${properties.yetisme_ortami}</p>
            <p><strong>Toplama Zamanı:</strong> ${properties.toplama_zamani}</p>
            
            <h4 style="margin-top: 15px; border-bottom: 1px dashed #ddd; padding-bottom: 5px;">🍲 Yemek Kullanımı</h4>
            <p>${properties.yemek_kullanimi.genel_kullanim}</p>
            <p>Örn. Yemek: <strong>${properties.yemek_kullanimi.ornek_yemek}</strong></p>
            
            <h4 style="margin-top: 15px; border-bottom: 1px dashed #ddd; padding-bottom: 5px;">⚕️ Halk Tıbbı Kullanımı</h4>
            <p>${properties.sifa_kullanimi.genel_kullanim}</p>
        </div>
    `;

    detailsView.innerHTML = htmlContent;
    detailsView.scrollIntoView({ behavior: 'smooth' });
}


function updateMapMarkers(filteredFeatures) {
    if (geoJsonLayer) {
        map.removeLayer(geoJsonLayer);
    }

    const filteredData = {
        type: "FeatureCollection",
        features: filteredFeatures
    };
    
    geoJsonLayer = L.geoJSON(filteredData, {
        pointToLayer: function(feature, latlng) {
            // İkonu belirleme
            const icon = getIconForPlant(feature.properties.kullanim_alani || []);

            const popupContent = `
                <div style="text-align: center;">
                    <h4>${feature.properties.turkce_ad} <span style="font-size: 0.9em; color: #555;">(${feature.properties.yoresel_adlar[0]})</span></h4>
                    <p>Latince: <em>${feature.properties.latince_ad}</em></p>
                    <button class="detail-button" data-id="${feature.properties.id}" style="
                        background-color: #008080; 
                        color: white; 
                        border: none; 
                        padding: 5px 10px; 
                        cursor: pointer; 
                        border-radius: 4px;
                    ">Detayları Gör</button>
                </div>
            `;
            
            // Marker'ı özel ikon ile oluşturma
            const marker = L.marker(latlng, { icon: icon });
            marker.bindPopup(popupContent);
            
            marker.on('popupopen', function() {
                const detailButton = document.querySelector('.detail-button[data-id="' + feature.properties.id + '"]');
                if (detailButton) {
                    detailButton.onclick = function() {
                        displayPlantDetails(feature.properties);
                        map.flyTo(latlng, 12);
                    };
                }
            });
            
            return marker;
        }
    }).addTo(map);

    if (filteredFeatures.length > 0) {
         try {
             const bounds = geoJsonLayer.getBounds();
             map.fitBounds(bounds, { padding: [50, 50] });
         } catch(e) {
             map.setView(DIYARBAKIR_CENTER, INITIAL_ZOOM);
         }
    } else {
        map.setView(DIYARBAKIR_CENTER, INITIAL_ZOOM);
    }
}


// =================================================================
// 4. Bitki Ansiklopedisini ve Filtreleme İşlevini Yönetme
// =================================================================

// Bitki listesini (sağ panel) güncelleyen ana fonksiyon
function populatePlantList(filteredFeatures = plantData.features) {
    const plantListDiv = document.getElementById('plant-list');
    if (!plantListDiv) return;

    // "Hepsi" butonu üzerindeki sayıyı güncelle
    const allButton = document.querySelector('.filter-btn[data-filter="all"]');
    if (allButton) {
        // Eğer arama kutusu boşsa, toplam bitki sayısını göster
        const totalCount = plantData.features.length;
        allButton.textContent = `Hepsi (${totalCount})`;
    }
    
    // Aktif filtreye göre liste başlığını güncelle
    let headerText = "Tüm Türler";
    if (currentFilter === "yemek") headerText = "🍲 Yemeklik Türler";
    if (currentFilter === "sifa") headerText = "⚕️ Şifalı Türler";

    const searchTerm = document.getElementById('search-input').value.trim();
    if(searchTerm) {
        headerText = `Arama Sonucu (${filteredFeatures.length})`
    } else {
        headerText += ` (${filteredFeatures.length})`;
    }


    plantListDiv.innerHTML = `<h3>${headerText}</h3>`; 

    if (filteredFeatures.length === 0) {
        plantListDiv.innerHTML += '<p style="padding: 10px;">Aradığınız kritere uygun bitki bulunamadı.</p>';
        return;
    }

    filteredFeatures.forEach(feature => {
        const props = feature.properties;

        const listItem = document.createElement('div');
        listItem.className = 'plant-list-item';
        // Liste item'ına kullanım alanına göre renkli etiket ekle
        let tags = '';
        if(props.kullanim_alani.includes('yemek')) tags += '<span style="color:#008000; font-weight: bold;">[Y] </span>';
        if(props.kullanim_alani.includes('sifa')) tags += '<span style="color:#CC0000; font-weight: bold;">[Ş] </span>';

        listItem.innerHTML = `
            <h4>${tags} ${props.turkce_ad} <small>(${props.yoresel_adlar.join(', ')})</small></h4>
            <p><em>${props.latince_ad}</em></p>
        `;

        listItem.addEventListener('click', () => {
            const coords = feature.geometry.coordinates;
            const latlng = [coords[1], coords[0]];

            displayPlantDetails(props);
            map.flyTo(latlng, 12);
        });

        plantListDiv.appendChild(listItem);
    });
}

// Arama/Filtreleme işlemini yapan ana fonksiyon
function filterPlants() {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
    
    // Detay alanını temizle
    const detailsView = document.getElementById('plant-details-view');
    if(detailsView) {
         detailsView.innerHTML = '<p class="initial-msg">Lütfen haritadan bir işaretçi seçin veya listeden bir bitkiye tıklayın.</p>'; 
    }

    const filtered = plantData.features.filter(feature => {
        const props = feature.properties;

        // 1. Arama Terimine Göre Filtreleme
        let matchesSearch = true;
        if (searchTerm !== '') {
            const searchPool = [
                props.turkce_ad,
                props.latince_ad,
                ...props.yoresel_adlar,
                props.yemek_kullanimi.genel_kullanim,
                props.sifa_kullanimi.genel_kullanim
            ].map(s => s.toLowerCase()).join(' ');

            matchesSearch = searchPool.includes(searchTerm);
        }

        // 2. Buton Filtresine Göre Filtreleme (currentFilter'a bakar)
        let matchesFilter = true;
        if (currentFilter !== 'all') {
            matchesFilter = props.kullanim_alani.includes(currentFilter);
        }

        return matchesSearch && matchesFilter;
    });

    populatePlantList(filtered);
    updateMapMarkers(filtered);
}

// Buton tıklamalarını yöneten fonksiyon
function handleFilterButtonClick(event) {
    const filterValue = event.target.getAttribute('data-filter');
    
    // Aktif butonu güncelle
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Yeni filtre değerini ayarla
    currentFilter = filterValue;

    // Arama kutusunu temizle
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.value = '';
    }

    // Filtrelemeyi tetikle
    filterPlants();
}


// =================================================================
// 5. Başlangıç ve CSS Stilleri
// =================================================================

function attachListeners() {
    // Arama dinleyicisini bağla
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('keyup', filterPlants);
    }

    // Filtre butonu dinleyicilerini bağla
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', handleFilterButtonClick);
    });
}


// Sayfa yüklendiğinde haritayı ve listeyi başlat
document.addEventListener('DOMContentLoaded', function() {
    
    updateMapMarkers(plantData.features);

   populatePlantList(); 
    attachListeners(); 
    
    // CSS Stilleri (style.css'te olmalı, ancak test için buraya ekleniyor)
    const style = document.createElement('style');
    style.innerHTML = `
   
/* ------------------------------------------------ */
    /* YENİ/GÜNCELLENMİŞ ARAMA STİLLERİ BURADAN BAŞLAR */
    /* ------------------------------------------------ */
    #search-container {
        margin-bottom: 15px;
        padding: 10px 0;
    }
    .search-input-wrapper {
        position: relative; /* İkonu konumlandırmak için kritik */
        display: flex; 
        align-items: center;
    }
    .search-icon {
        position: absolute;
        left: 12px;
        color: #888;
        font-size: 1.2em; /* İkon boyutu */
        z-index: 10; 
    }
    #search-input {
        width: 100%;
        padding: 10px 10px 10px 35px; /* İkon için soldan boşluk bırakıldı */
        height: 45px; /* ARTIK DAHA BÜYÜK */
        border: 1px solid #ccc;
        border-radius: 6px; /* Hafif yuvarlak köşeler */
        font-size: 1.1em;
        box-sizing: border-box; /* Padding'in genişliğe dahil olmasını sağlar */
    }
    /* ------------------------------------------------ */
    /* YENİ/GÜNCELLENMİŞ ARAMA STİLLERİ BURADA BİTER */
    /*


 /* Filter Butonları Stilleri */
    #filter-buttons {
        margin-bottom: 15px;
        display: flex;
        gap: 10px;
    }
    .filter-btn {
        padding: 8px 15px;
        border: 1px solid #ccc;
        border-radius: 4px;
        cursor: pointer;
        background-color: #f0f0f0;
        transition: background-color 0.2s, border-color 0.2s;
    }
    .filter-btn:hover {
        background-color: #e0e0e0;
    }
    .filter-btn.active {
        background-color: #008080;
        color: white;
        border-color: #006666;
    }
    /* Diğer stiller (önceki adımdan) */
    #plant-list {
        max-height: 350px; 
        overflow-y: auto;
        padding-right: 10px;
        border: 1px solid #eee;
        padding: 10px;
        border-radius: 5px;
    }
    .initial-msg {
        padding: 15px;
        margin-top: 20px;
        background: #e6f7ff;
        border: 1px solid #cceeff;
        border-left: 5px solid #008080;
        border-radius: 4px;
        font-style: italic;
        color: #006666;
    }
    .plant-list-item {
        padding: 10px;
        margin-bottom: 8px;
        background-color: #ffffff;
        border: 1px solid #ddd;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.2s;
    }
    .plant-list-item:hover {
        background-color: #e6f7ff;
    }
    .plant-details-card {
        padding: 15px;
        border: 1px solid #ccc;
        border-radius: 8px;
        background-color: #ffffff;
        margin-top: 15px;
    }
    `;
    document.head.appendChild(style);
});