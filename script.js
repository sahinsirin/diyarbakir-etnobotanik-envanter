const DIYARBAKIR_CENTER = [37.9103, 40.2081];
const map = L.map('map').setView(DIYARBAKIR_CENTER, 9);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(map);

// Kategoriye göre marker rengi (Excel tabanlı)
function getMarkerHtml(kategori) {
    let color = kategori === 'yemek' ? '#28a745' : (kategori === 'sifa' ? '#dc3545' : '#fd7e14');
    return `<div style="background-color: ${color}; width: 14px; height: 14px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 4px rgba(0,0,0,0.4);"></div>`;
}

function loadMarkers(data) {
    map.eachLayer((layer) => { if (layer instanceof L.Marker) map.removeLayer(layer); });

    data.forEach(plant => {
        const icon = L.divIcon({
            className: 'custom-icon',
            html: getMarkerHtml(plant.kategori),
            iconSize: [14, 14]
        });

        const marker = L.marker(plant.coords, { icon: icon }).addTo(map);
        marker.bindPopup(`
            <b>${plant.turkce_ad}</b><br>
            <i>${plant.latince_ad}</i><br>
            <button onclick="showDetails(${plant.id})" style="margin-top:5px; cursor:pointer;">Detaylar</button>
        `);
    });
}

function showDetails(id) {
    const plant = plantInventory.find(p => p.id === id);
    const view = document.getElementById('plant-details-view');
    
    // Excel'deki zehirlilik uyarısı kontrolü (Kari/Kardi türleri için)
    const safetyNote = (plant.turkce_ad.includes("Kari") || plant.turkce_ad.includes("Kardi")) 
        ? `<p style="color:red; font-weight:bold;">⚠️ UYARI: Taze hali zehirlidir, haşlamadan tüketmeyiniz!</p>` : "";

    view.innerHTML = `
        <div class="plant-details-card">
            <h3>${plant.turkce_ad} (${plant.yoresel_adlar.join(', ')})</h3>
            <p><strong>Bilimsel Ad:</strong> <i>${plant.latince_ad}</i></p>
            <p><strong>Yetiştiği Yerler:</strong> ${plant.yetisme_ortami}</p>
            <p><strong>Kullanım Şekli:</strong> ${plant.kullanim}</p>
            ${safetyNote}
        </div>
    `;
    view.scrollIntoView({ behavior: 'smooth' });
}

// Arama Fonksiyonu
document.getElementById('search-input').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = plantInventory.filter(p => 
        p.turkce_ad.toLowerCase().includes(term) || 
        p.latince_ad.toLowerCase().includes(term)
    );
    loadMarkers(filtered);
    updateList(filtered);
});

// Başlangıç
loadMarkers(plantInventory);