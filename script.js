const DIYARBAKIR_CENTER = [37.9103, 40.2081];

// 1. GENİŞLETİLMİŞ VE YEREL FOTOĞRAF DESTEKLİ VERİ SETİ
const plantData = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [39.7500, 37.8000] },
            "properties": {
                "id": "1", "latince_ad": "Gundelia tournefortii", "turkce_ad": "Kenger", "yoresel_adlar": ["Kereng", "Kenger"],
                "morfoloji": "Dikenli, sütlü çok yıllık otsu bitki.", "ortam": "Karacadağ volkanik arazisi.",
                "yemek": "Kenger sakızı, kenger kavurması, boranisi.", "sifa": "Karaciğer dostu, diş sağlığı.", "kullanim": ["yemek", "sifa"],
                "img": "img/1-gundelia-tournefortii.jpg" 
            }
        },
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [40.4200, 38.4500] },
            "properties": {
                "id": "2", "latince_ad": "Rheum ribes", "turkce_ad": "Işkın", "yoresel_adlar": ["Revas", "Rıbes"],
                "morfoloji": "Kalın gövdeli, geniş yapraklı dağ meyvesi.", "ortam": "Yüksek rakımlı kayalıklar.",
                "yemek": "Taze olarak gövdesi soyulup yenir.", "sifa": "Şeker hastalığına karşı kullanılır.", "kullanim": ["yemek", "sifa"],
                "img": "img/2-rheum-ribes.jpg"
            }
        },
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [40.5500, 38.1200] },
            "properties": {
                "id": "3", "latince_ad": "Ferulago angulata", "turkce_ad": "Çakşır Otu", "yoresel_adlar": ["Siyabo"],
                "morfoloji": "Dere otuna benzer parçalı yapraklı.", "ortam": "Serin ve nemli yamaçlar.",
                "yemek": "Otlu peynir ve yumurtalı kavurma.", "sifa": "Enerji verici ve direnç artırıcı.", "kullanim": ["yemek", "sifa"],
                "img": "img/3-ferulago-angulata.jpg"
            }
        },
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [40.1000, 37.6500] },
            "properties": {
                "id": "4", "latince_ad": "Eremurus spectabilis", "turkce_ad": "Çiriş Otu", "yoresel_adlar": ["Heliz", "Hılız"],
                "morfoloji": "Sarı çiçekli bitki.", "ortam": "Yüksek meralar.",
                "yemek": "Helizli bulgur pilavı, çorba.", "sifa": "İltihap sökücü.", "kullanim": ["yemek", "sifa"],
                "img": "img/4-eremurus-spectabilis.jpg"
            }
        },
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [40.2300, 37.9500] },
            "properties": {
                "id": "5", "latince_ad": "Chaerophyllum macropodum", "turkce_ad": "Mendik", "yoresel_adlar": ["Mendik"],
                "morfoloji": "Hoş kokulu, ince yapraklı tür.", "ortam": "Akarsu kenarları.",
                "yemek": "Peynir aroması, taze salata.", "sifa": "Hazmı kolaylaştırır.", "kullanim": ["yemek"],
                "img": "img/5-chaerophyllum-macropodum.jpg"
            }
        },
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [40.4000, 37.8000] },
            "properties": {
                "id": "6", "latince_ad": "Malva sylvestris", "turkce_ad": "Ebegümeci", "yoresel_adlar": ["Gaba", "Tole"],
                "morfoloji": "Yuvarlak yapraklı, mor çiçekli.", "ortam": "Bahçeler.",
                "yemek": "Sarma ve kavurma.", "sifa": "Öksürük kesici.", "kullanim": ["yemek", "sifa"],
                "img": "img/6-malva-sylvestris.jpg"
            }
        },
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [39.9500, 37.7500] },
            "properties": {
                "id": "7", "latince_ad": "Rumex acetosella", "turkce_ad": "Kuzukulağı", "yoresel_adlar": ["Ekşikulak", "Tirşo"],
                "morfoloji": "Ekşi yapraklar.", "ortam": "Nemli meralar.",
                "yemek": "Salata ve cacık.", "sifa": "Kan temizleyici.", "kullanim": ["yemek"],
                "img": "img/7-rumex-acetosella.jpg"
            }
        },
        {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [40.0500, 38.0000] },
            "properties": {
                "id": "8", "latince_ad": "Sinapis arvensis", "turkce_ad": "Yabani Hardal", "yoresel_adlar": ["Hardal Otu"],
                "morfoloji": "Sarı çiçekli tek yıllık.", "ortam": "Tarla kenarları.",
                "yemek": "Haşlama salatası.", "sifa": "C vitamini kaynağı.", "kullanim": ["yemek"],
                "img": "img/8-sinapis-arvensis.jpg"
            }
        }
    ]
};

// 2. HARİTA AYARLARI
const map = L.map('map').setView(DIYARBAKIR_CENTER, 9);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

let geoJsonLayer;
let currentFilter = 'all';

// Özel Renkli Marker Fonksiyonu
const getIcon = (k) => {
    let color = k.includes('yemek') && k.includes('sifa') ? '#FF8C00' : (k.includes('yemek') ? '#008080' : '#CC0000');
    return L.divIcon({
        className: 'custom-marker',
        html: `<div style="background-color: ${color}; width: 16px; height: 16px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 5px rgba(0,0,0,0.3);"></div>`,
        iconSize: [16, 16],
        iconAnchor: [8, 8]
    });
};

// 3. DETAY GÖSTERME FONKSİYONU
function showDetails(p) {
    const view = document.getElementById('plant-details-view');
    view.innerHTML = `
        <div class="plant-details-card">
            <img src="${p.img}" alt="${p.turkce_ad}" style="width:100%; border-radius:8px; margin-bottom:10px; min-height: 200px; object-fit: cover;">
            <h3>${p.turkce_ad} <br><small>(${p.yoresel_adlar.join(', ')})</small></h3>
            <hr>
            <p><strong>Latince:</strong> <em>${p.latince_ad}</em></p>
            <p><strong>Yetişme Ortamı:</strong> ${p.ortam}</p>
            <p><strong>Yemeklik Kullanım:</strong> ${p.yemek}</p>
            <p><strong>Şifalı Özellikleri:</strong> ${p.sifa}</p>
        </div>`;
}

// Popup içeriği
function createPopupContent(p) {
    return `
        <div style="text-align:center">
            <img src="${p.img}" style="width:100px; height:70px; object-fit:cover; border-radius:4px;">
            <h4 style="margin:5px 0">${p.turkce_ad}</h4>
            <p style="font-size:11px">${p.yoresel_adlar[0]}</p>
            <button onclick="zoomToPlant(${p.id})" style="background:#008080; color:white; border:none; padding:4px 8px; border-radius:4px; cursor:pointer">Detayları Gör</button>
        </div>
    `;
}

window.zoomToPlant = function(id) {
    const feature = plantData.features.find(f => f.properties.id == id);
    if(feature) {
        showDetails(feature.properties);
        map.flyTo([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], 13);
    }
};

// 4. ARAYÜZ GÜNCELLEME
function updateUI(filtered) {
    const list = document.getElementById('plant-list');
    list.innerHTML = "";
    
    if (geoJsonLayer) map.removeLayer(geoJsonLayer);

    geoJsonLayer = L.geoJSON({type: "FeatureCollection", features: filtered}, {
        pointToLayer: (f, l) => {
            const marker = L.marker(l, {icon: getIcon(f.properties.kullanim)});
            marker.bindPopup(createPopupContent(f.properties));
            return marker;
        },
        onEachFeature: (f, l) => {
            l.on('click', () => showDetails(f.properties));
        }
    }).addTo(map);

    filtered.forEach(f => {
        const item = document.createElement('div');
        item.className = 'plant-list-item';
        item.innerHTML = `<strong>${f.properties.turkce_ad}</strong> <br> <small>${f.properties.yoresel_adlar[0]}</small>`;
        item.onclick = () => {
            showDetails(f.properties);
            map.flyTo([f.geometry.coordinates[1], f.geometry.coordinates[0]], 12);
        };
        list.appendChild(item);
    });
}

// 5. FİLTRELEME
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

updateUI(plantData.features);

// Lejant Ayarı
const legend = L.control({position: 'bottomright'});
legend.onAdd = function() {
    const div = L.DomUtil.create('div', 'legend');
    div.style.background = 'white';
    div.style.padding = '10px';
    div.style.borderRadius = '5px';
    div.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';
    div.innerHTML = `
        <div style="margin-bottom:5px"><i style="background: #008080; width:12px; height:12px; display:inline-block; border-radius:50%"></i> Yemeklik</div>
        <div style="margin-bottom:5px"><i style="background: #CC0000; width:12px; height:12px; display:inline-block; border-radius:50%"></i> Şifalı</div>
        <div><i style="background: #FF8C00; width:12px; height:12px; display:inline-block; border-radius:50%"></i> Her İkisi</div>
    `;
    return div;
};
legend.addTo(map);