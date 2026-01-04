const PLACEHOLDER_IMAGE_URL = 'https://picsum.photos/400/250';
const DIYARBAKIR_CENTER = [37.9103, 40.2081];

// 1. GENİŞLETİLMİŞ VERİ TABANI (Excel Verileri Entegre Edildi)
const plantData = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [39.7500, 37.8000] },
            "properties": {
                "id": "1", "latince_ad": "Gundelia tournefortii", "turkce_ad": "Kenger", "yoresel_adlar": ["Kereng", "Kenger"],
                "morfoloji": "Dikenli, sütlü çok yıllık otsu bitki.", "ortam": "Karacadağ volkanik arazisi.",
                "yemek": "Kenger sakızı, kenger kavurması.", "sifa": "Karaciğer dostu, diş sağlığı.", "kullanim": ["yemek", "sifa"]
            }
        },
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [40.4200, 38.4500] },
            "properties": {
                "id": "2", "latince_ad": "Rheum ribes", "turkce_ad": "Işkın", "yoresel_adlar": ["Revas", "Rıbes"],
                "morfoloji": "Kalın gövdeli, geniş yapraklı dağ meyvesi.", "ortam": "Yüksek rakımlı kayalıklar.",
                "yemek": "Taze olarak gövdesi soyulup yenir.", "sifa": "Şeker hastalığına karşı kullanılır.", "kullanim": ["yemek", "sifa"]
            }
        },
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [40.5500, 38.1200] },
            "properties": {
                "id": "3", "latince_ad": "Ferulago angulata", "turkce_ad": "Çakşır Otu", "yoresel_adlar": ["Siyabo"],
                "morfoloji": "Dere otuna benzer parçalı yapraklı.", "ortam": "Serin ve nemli yamaçlar.",
                "yemek": "Otlu peynir ve yumurtalı kavurma.", "sifa": "Afrodizyak ve vücut direnci artırıcı.", "kullanim": ["yemek", "sifa"]
            }
        },
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [40.1000, 37.6500] },
            "properties": {
                "id": "4", "latince_ad": "Eremurus spectabilis", "turkce_ad": "Çiriş Otu", "yoresel_adlar": ["Heliz", "Hılız"],
                "morfoloji": "Zambakgillerden sarı çiçekli bitki.", "ortam": "Yüksek meralar.",
                "yemek": "Helizli bulgur pilavı, çorba.", "sifa": "C vitamini deposu, iltihap sökücü.", "kullanim": ["yemek", "sifa"]
            }
        },
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [40.2300, 37.9500] },
            "properties": {
                "id": "5", "latince_ad": "Chaerophyllum macropodum", "turkce_ad": "Mendik", "yoresel_adlar": ["Mendik"],
                "morfoloji": "Hoş kokulu, ince yapraklı tür.", "ortam": "Akarsu kenarları.",
                "yemek": "Peynir aroması, taze salata.", "sifa": "Hazmı kolaylaştırır.", "kullanim": ["yemek"]
            }
        },
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [40.4000, 37.8000] },
            "properties": {
                "id": "6", "latince_ad": "Malva sylvestris", "turkce_ad": "Ebegümeci", "yoresel_adlar": ["Gaba", "Tole"],
                "morfoloji": "Yuvarlak yapraklı, mor çiçekli.", "ortam": "Yol kenarları, bahçeler.",
                "yemek": "Zeytinyağlı sarması ve yemeği.", "sifa": "Öksürük kesici, göğüs yumuşatıcı.", "kullanim": ["yemek", "sifa"]
            }
        },
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [39.9500, 37.7500] },
            "properties": {
                "id": "7", "latince_ad": "Rumex acetosella", "turkce_ad": "Kuzukulağı", "yoresel_adlar": ["Ekşikulak", "Tirşo"],
                "morfoloji": "Ok ucu şeklinde ekşi yapraklar.", "ortam": "Nemli çayırlar.",
                "yemek": "Salatalar ve cacık.", "sifa": "Kan temizleyici etkisi vardır.", "kullanim": ["yemek"]
            }
        }
    ]
};

// 2. HARİTA BAŞLATMA
const map = L.map('map').setView(DIYARBAKIR_CENTER, 9);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

let geoJsonLayer;
let currentFilter = 'all';

// İkonlar
const getIcon = (k) => {
    let color = k.includes('yemek') && k.includes('sifa') ? '#FF8C00' : (k.includes('yemek') ? '#008000' : '#CC0000');
    return L.divIcon({
        className: 'custom-marker',
        html: `<div style="background-color: ${color}; width: 14px; height: 14px; border-radius: 50%; border: 2px solid white;"></div>`
    });
};

// 3. FONKSİYONLAR
function showDetails(p) {
    const view = document.getElementById('plant-details-view');
    view.innerHTML = `
        <div class="plant-details-card">
            <h3>${p.turkce_ad} (${p.yoresel_adlar[0]})</h3>
            <p><strong>Latince:</strong> <em>${p.latince_ad}</em></p>
            <p><strong>Morfoloji:</strong> ${p.morfoloji}</p>
            <p><strong>Yemek:</strong> ${p.yemek}</p>
            <p><strong>Şifa:</strong> ${p.sifa}</p>
        </div>`;
}

function updateUI(filtered) {
    const list = document.getElementById('plant-list');
    list.innerHTML = "";
    
    if (geoJsonLayer) map.removeLayer(geoJsonLayer);

    geoJsonLayer = L.geoJSON({type: "FeatureCollection", features: filtered}, {
        pointToLayer: (f, l) => L.marker(l, {icon: getIcon(f.properties.kullanim)}).bindPopup(f.properties.turkce_ad),
        onEachFeature: (f, l) => {
            l.on('click', () => showDetails(f.properties));
        }
    }).addTo(map);

    filtered.forEach(f => {
        const item = document.createElement('div');
        item.className = 'plant-list-item';
        item.innerHTML = `<strong>${f.properties.turkce_ad}</strong> <small>(${f.properties.yoresel_adlar[0]})</small>`;
        item.onclick = () => {
            showDetails(f.properties);
            map.flyTo([f.geometry.coordinates[1], f.geometry.coordinates[0]], 11);
        };
        list.appendChild(item);
    });
}

// 4. ARAMA VE FİLTRELEME
function applyFilter() {
    const search = document.getElementById('search-input').value.toLowerCase();
    const filtered = plantData.features.filter(f => {
        const p = f.properties;
        const matchesSearch = p.turkce_ad.toLowerCase().includes(search) || 
                              p.yoresel_adlar.some(y => y.toLowerCase().includes(search)) ||
                              p.latince_ad.toLowerCase().includes(search);
        const matchesType = currentFilter === 'all' || p.kullanim.includes(currentFilter);
        return matchesSearch && matchesType;
    });
    updateUI(filtered);
}

document.getElementById('search-input').addEventListener('input', applyFilter);
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.onclick = (e) => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentFilter = e.target.dataset.filter;
        applyFilter();
    };
});

// Başlangıç
updateUI(plantData.features);

// Harita Lejantı
const legend = L.control({position: 'bottomright'});
legend.onAdd = function() {
    const div = L.DomUtil.create('div', 'legend');
    div.innerHTML = `
        <i style="background: #008000"></i> Yemeklik<br>
        <i style="background: #CC0000"></i> Şifalı<br>
        <i style="background: #FF8C00"></i> Her İkisi
    `;
    return div;
};
legend.addTo(map);