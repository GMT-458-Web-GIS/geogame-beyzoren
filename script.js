
// Symbols and city information
const symbols = [
    {
        name: "Boğaz Köprüsü",
        description: "This famous bridge connects two continents and offers breathtaking views of the water.",
        city: "Istanbul",
        coordinates: [41.0760, 29.0350], // Istanbul coordinates
    },
    {
        name: "Mevlana Statue",
        description: "A statue representing a prominent figure of spirituality, renowned for its teachings and philosophy.",
        city: "Konya",
        coordinates: [37.8714, 32.4840], // Konya coordinates
    },
    {
        name: "Cappadocia Fairy Chimneys",
        description: "These naturally formed, cone-shaped rock formations are famous for their surreal appearance.",
        city: "Nevşehir",
        coordinates: [38.7075, 34.7958], // Nevşehir coordinates
    },
    {
        name: "Izmir Clock Tower",
        description: "A historical clock tower in the heart of the city, known for its architectural elegance.",
        city: "Izmir",
        coordinates: [38.4192, 27.1287], // Izmir coordinates
    },
    {
        name: "Aspendos Theatre",
        description: "An ancient Roman theater, renowned for its excellent acoustics and historical significance.",
        city: "Antalya",
        coordinates: [36.8840, 30.8010], // Antalya coordinates
    },
    {
        name: "Topkapi Palace",
        description: "A former imperial palace that served as the residence of Ottoman sultans for centuries.",
        city: "Istanbul",
        coordinates: [41.0136, 28.9855], // Istanbul coordinates
    },
    {
        name: "Mausoleum of Halicarnassus",
        description: "One of the Seven Wonders of the Ancient World, this tomb was built for a Persian satrap.",
        city: "Bodrum",
        coordinates: [37.0373, 27.4295], // Bodrum coordinates
    },
    {
        name: "Bodrum Castle",
        description: "A medieval castle built by the Knights of St. John, offering panoramic views of the coastline.",
        city: "Bodrum",
        coordinates: [37.0369, 27.4305], // Bodrum coordinates
    },
    {
        name: "Sumela Monastery",
        description: "A cliffside monastery that blends beautifully with the landscape, known for its stunning frescoes.",
        city: "Trabzon",
        coordinates: [40.0583, 39.7139], // Trabzon coordinates
    },
    {
        name: "Pergamon Acropolis",
        description: "An ancient city located on a hilltop, famous for its well-preserved ruins and ancient structures.",
        city: "Bergama",
        coordinates: [39.1291, 27.1827], // Bergama coordinates
    },
    {
        name: "Nemrut Daği",
        description: "A mountain with monumental statues and tombs, a UNESCO World Heritage site.",
        city: "Adiyaman",
        coordinates: [37.9305, 38.6933], // Adıyaman coordinates
    },
    {
        name: "Blue Mosque",
        description: "A stunning mosque known for its blue-tiled interior, one of the most iconic landmarks of the region.",
        city: "Istanbul",
        coordinates: [41.0056, 28.9762], // Istanbul coordinates
    },
    {
        name: "Anitkabir",
        description: "A mausoleum dedicated to the founder of the Republic of Turkey, a symbol of national pride.",
        city: "Ankara",
        coordinates: [39.9255, 32.8661], // Ankara coordinates
    },
    {
        name: "Mount Ararat",
        description: "The highest peak in Turkey, believed to be the resting place of Noah's Ark in some ancient traditions.",
        city: "Ağri",
        coordinates: [39.7200, 44.3000], // Ağrı coordinates
    },
    {
        name: "Taksim Square",
        description: "A central hub for cultural events, protests, and celebrations, surrounded by iconic buildings.",
        city: "Istanbul",
        coordinates: [41.0369, 28.9858], // Istanbul coordinates
    },
    {
        name: "Dolmabahçe Palace",
        description: "A lavish palace that served as the administrative center of the Ottoman Empire in the 19th century.",
        city: "Istanbul",
        coordinates: [41.0395, 29.0002], // Istanbul coordinates
    },
    {
        name: "Çirağan Palace",
        description: "An opulent Ottoman palace overlooking the Bosphorus, now a luxury hotel.",
        city: "Istanbul",
        coordinates: [41.0522, 29.0155], // Istanbul coordinates
    },
    {
        name: "Kiz Kulesi",
        description: "A small islet in the Bosphorus, home to an iconic tower that has become a symbol of the city.",
        city: "Istanbul",
        coordinates: [41.0203, 29.0587], // Istanbul coordinates
    },
    {
        name: "Mount Uludağ",
        description: "A popular winter sports destination with breathtaking views and scenic beauty.",
        city: "Bursa",
        coordinates: [40.2167, 29.0667], // Bursa coordinates
    },
    {
        name: "Ephesus Ancient Ruins",
        description: "The ancient city of Ephesus is famous for its Temple of Artemis, one of the Seven Wonders of the Ancient World.",
        city: "Aydin",
        coordinates: [37.9497, 27.3630], // Aydın coordinates
    },
    {
        name: "Fethiye Oludeniz",
        description: "A stunning turquoise lagoon surrounded by steep mountains, famous for paragliding.",
        city: "Muğla",
        coordinates: [36.4556, 29.1172], // Muğla coordinates
    },
    {
        name: "Grand Bazaar",
        description: "One of the largest and oldest covered markets in the world, offering a unique shopping experience.",
        city: "Istanbul",
        coordinates: [41.0104, 28.9688], // Istanbul coordinates
    },
    {
        name: "Kapadokya Göreme Valley",
        description: "A picturesque valley with rock-hewn churches and fairy chimneys, a must-see historical site.",
        city: "Nevşehir",
        coordinates: [38.6421, 34.8282], // Nevşehir coordinates
    },
    {
        name: "Atatürk Forest Farm and Zoo",
        description: "A research farm and zoo offering a glimpse into the history of Turkish agriculture and animal care.",
        city: "Ankara",
        coordinates: [39.9747, 32.8527], // Ankara coordinates
    },
    {
        name: "Kuşadasi National Park",
        description: "A beautiful coastal park with rich biodiversity, perfect for nature lovers and bird watchers.",
        city: "Aydin",
        coordinates: [37.8793, 27.2707], // Aydın coordinates
    },
    {
        name: "Çanakkale Martyrs' Memorial",
        description: "A monument commemorating the soldiers who fought and died in the Gallipoli Campaign during World War I.",
        city: "Çanakkale",
        coordinates: [40.0060, 26.4066], // Çanakkale coordinates
    },
    {
        name: "Kocaeli Gebze History Museum",
        description: "A museum dedicated to the rich history of the Gebze region and its cultural heritage.",
        city: "Kocaeli",
        coordinates: [40.9958, 29.4266], // Kocaeli coordinates
    },
    {
        name: "Mardin Grand Mosque",
        description: "A mosque with beautiful Islamic architecture, located in the heart of the historic city.",
        city: "Mardin",
        coordinates: [37.3187, 40.7372], // Mardin coordinates
    },
    {
        name: "Güney Şehitlik",
        description: "A serene cemetery honoring the sacrifices made by those who fought for freedom and independence.",
        city: "Hatay",
        coordinates: [36.1854, 36.3664], // Hatay coordinates
    },
    {
        name: "Kocatepe Mosque",
        description: "A modern mosque with impressive Ottoman architecture, a prominent landmark in the city.",
        city: "Ankara",
        coordinates: [39.9366, 32.8603], // Ankara coordinates
    },
    {
        name: "Konyaalti Beach",
        description: "A famous beach offering beautiful views, perfect for swimming and relaxation.",
        city: "Antalya",
        coordinates: [36.8741, 30.5944], // Antalya coordinates
    }
];
// Initialize the map
const map = L.map('map').setView([39.9334, 32.8597], 6); // Default center on Turkey

// Add a tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Define a global variable to track score
let score = 0;
let currentSymbol = {};

// Display a random symbol
function updateSymbol() {
    currentSymbol = getRandomSymbol();
    document.getElementById('symbol-description').innerText = currentSymbol.description;
}

// Add markers for all symbols to the map
symbols.forEach(symbol => {
    const marker = L.marker(symbol.coordinates).addTo(map);
    marker.bindPopup(`<b>${symbol.name}</b>`);

    // Add a click event on each marker
    marker.on('click', function () {
        const distance = map.distance(symbol.coordinates, currentSymbol.coordinates);
        if (distance < 10000) { // If clicked close to the correct symbol (within 10 km)
            // Correct answer
            score++;
            document.getElementById('score-value').innerText = score;
            updateSymbol(); // Get a new random symbol
            alert('Correct! Next symbol!');
        } else {
            alert('Wrong city, try again!');
        }
    });
});

// Function to get a random symbol from the array
function getRandomSymbol() {
    const randomIndex = Math.floor(Math.random() * symbols.length);
    return symbols[randomIndex];
}

// Start the game by displaying the first symbol
updateSymbol();