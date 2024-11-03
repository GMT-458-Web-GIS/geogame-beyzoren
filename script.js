// Initialize the map centered on the world
const map = L.map('map').setView([20, 0], 2);

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Define initial game variables
let score = 0;
let currentWonderIndex = null;

const naturalWonders = [
    { name: "Great Barrier Reef", location: [-18.2871, 147.6992], description: "The world's largest coral reef system." },
    { name: "Machu Picchu", location: [-13.1631, -72.5449], description: "An ancient Incan city in Peru." },
    { name: "Yosemite National Park", location: [37.8651, -119.5383], description: "Famous for its stunning natural beauty." },     
    { name: "Grand Canyon", location: [36.1069, -112.1129], description: "One of the largest canyons in the world." },
    { name: "Santorini", location: [36.3932, 25.4615], description: "An island famous for its stunning white buildings." },
    { name: "Great Pyramids of Giza", location: [29.9792, 31.1342], description: "The most famous structures of ancient Egypt." },
    { name: "Victoria Falls", location: [-17.9243, 25.8572], description: "One of the largest waterfalls in the world." },
    { name: "Salar de Uyuni", location: [-20.1338, -67.4891], description: "The world's largest salt flat." },
    { name: "Himalayas", location: [28.6139, 77.2090], description: "The world's highest mountain range." },
    { name: "Amazon Rainforest", location: [-3.4653, -62.2159], description: "The largest tropical rainforest in the world." },
    { name: "Stonehenge", location: [51.1789, -1.8262], description: "An ancient stone structure and a mysterious site." },
    { name: "Serengeti National Park", location: [-2.3333, 34.8333], description: "Home to one of Africa's largest animal migrations." },
    { name: "Cappadocia", location: [38.6340, 34.8270], description: "Famous for its fairy chimneys and underground cities." },
    { name: "Halong Bay", location: [20.9200, 107.0105], description: "Known for its breathtaking limestone islands." },
    { name: "Antelope Canyon", location: [36.8619, -111.3743], description: "Famous for its stunning sandstone formations." },
    { name: "Galapagos Islands", location: [-0.9538, -90.9656], description: "Home to unique fauna and flora." },
    { name: "Niagara Falls", location: [43.0794, -79.0742], description: "One of the most recognizable waterfalls in the world." },
    { name: "Mount Ararat", location: [39.7028, 44.3084], description: "Turkey's highest peak." },
    { name: "Uluru (Ayers Rock)", location: [-25.3444, 131.0369], description: "A natural monument known for its red rock." },
    { name: "Zhangjiajie National Forest", location: [29.1465, 110.4784], description: "Famous for its high pillars and stunning scenery." },
    { name: "Plitvice Lakes", location: [44.8831, 15.5857], description: "Known for its beautiful waterfalls and lakes." },
    { name: "Bora Bora", location: [-16.5000, -151.7415], description: "A tropical paradise with turquoise waters." },
    { name: "Huangshan (Yellow Mountains)", location: [30.1421, 118.1684], description: "Known for its stunning scenery and unique rock formations." },
    { name: "Göreme Open-Air Museum", location: [38.6453, 34.8275], description: "Rich in history and cultural heritage in Cappadocia." },
    { name: "Fjords of Norway", location: [60.4633, 8.4869], description: "Known for its stunning landscapes and deep waterways." },
    { name: "Vikingskapet", location: [64.8495, 7.6232], description: "A region with high mountains and magnificent fjords." },
    { name: "Gobi Desert", location: [42.5, 105.0], description: "The largest desert in Asia." },
    { name: "Banff National Park", location: [51.4968, -115.9281], description: "Known for its stunning lakes and mountain scenery." },
    { name: "Cinque Terre", location: [44.1040, 9.7373], description: "Famous for its colorful villages and beautiful beaches." },
    { name: "Rocky Mountains", location: [39.5501, -105.7821], description: "The longest mountain range in the world." },
    { name: "Orinoco River", location: [8.2320, -67.2378], description: "One of South America's largest rivers." },
    { name: "The Great Lakes", location: [43.4084, -82.0497], description: "A group of five large freshwater lakes in North America." },
    { name: "Lake Baikal", location: [53.5587, 108.1650], description: "The deepest lake in the world." },
    { name: "Trolltunga", location: [60.1393, 6.7370], description: "A famous rock formation with breathtaking views." },
    { name: "Iguazu Falls", location: [-25.6953, -54.4367], description: "Massive waterfalls located on the border of Brazil and Argentina." },
    { name: "Sossusvlei", location: [-24.7338, 15.2540], description: "High sand dunes in the Namib Desert." },
    { name: "Wulingyuan", location: [29.3485, 110.6162], description: "Known for its stunning pillars and deep ravines." },
    { name: "Isle of Skye", location: [57.5, -5.5], description: "One of Scotland's most beautiful islands." },
    { name: "Maldives", location: [3.2028, 73.2207], description: "Famous for its white sandy beaches and coral reefs." },
    { name: "Patagonia", location: [-45.0, -67.0], description: "Known for its stunning landscapes and wildlife." },
    { name: "Great Britain", location: [55.3781, -3.4360], description: "Known for its diverse natural beauty and historical sites." },
    { name: "Galileo's Star", location: [7.5850, -34.5333], description: "A natural wonder known for its beauty." },
    { name: "Mount Rainier", location: [46.8523, -121.7603], description: "One of the highest volcanic peaks in the United States." },
    { name: "Capri Island", location: [40.5504, 14.2231], description: "A famous holiday destination known for the Blue Grotto." },
    { name: "Maroon Bells", location: [39.0634, -106.4577], description: "Stunning mountain peaks and lake scenery." },
    { name: "Blue Hole", location: [17.3150, -86.2576], description: "A deep sea sinkhole in Belize." },
    { name: "Kruger National Park", location: [-24.9890, 31.5460], description: "One of South Africa's largest national parks." },
    { name: "Whistler", location: [50.1163, -122.9574], description: "Famous for skiing and winter sports." },
    { name: "Vancouver Island", location: [48.4284, -123.3656], description: "Known for its natural beauty and cultural richness." },
    { name: "Kamchatka Peninsula", location: [56.0000, 159.0000], description: "Known for its volcanic activity." },
    { name: "Sierra Nevada", location: [37.6939, -119.5383], description: "A popular area for hiking and mountaineering." },
    { name: "Yosemite Valley", location: [37.7462, -119.6584], description: "Known for its unique landscapes and natural beauty." },
    { name: "White Cliffs of Dover", location: [51.1280, 1.4049], description: "Famous for its white chalk cliffs." },
    { name: "Raja Ampat Islands", location: [-0.2384, 130.5170], description: "One of the best diving spots in the world." },
    { name: "Gökova Bay", location: [36.8786, 28.3385], description: "Known for its stunning nature and sea views." },
    { name: "Trolltunga", location: [60.1393, 6.7370], description: "A famous rock formation with breathtaking views." }
];
// Function to start the game and set up a random wonder
function startGame() {
    score = 0;
    document.getElementById("score").textContent = "Score: " + score;
    selectNewWonder(); // Rastgele bir doğal güzellik seç
    placeMarkers(); // Oyun başladığında işaretçileri yerleştir
}

// Function to select a new natural wonder randomly
function selectNewWonder() {
    currentWonderIndex = Math.floor(Math.random() * naturalWonders.length);
    const wonder = naturalWonders[currentWonderIndex];
    document.getElementById("feedback").textContent = "Find the location of: " + wonder.name;
    document.getElementById("hints").textContent = "Hint: " + wonder.description;

    console.log("Selected Wonder:", wonder.name); // Debugging için seçilen doğal güzelliği yazdır
}

// Function to place markers for each natural wonder
function placeMarkers() {
    naturalWonders.forEach((wonder, index) => {
        const marker = L.marker(wonder.location).addTo(map); // location olarak düzelttik
        marker.bindPopup(wonder.name);
        
        // Add click event to the marker
        marker.on('click', function() {
            console.log("Marker clicked:", wonder.name); // Debugging için tıklanan işaretçi adı
            checkWonder(index);
        });
    });
}

// Function to check if the clicked wonder is the correct one
function checkWonder(index) {
    if (index === currentWonderIndex) {
        score += 1; // Update score if correct
        document.getElementById("score").textContent = "Score: " + score;
        document.getElementById("feedback").textContent = "Correct! You found: " + naturalWonders[index].name;
        
        // Select a new natural wonder for the next round
        selectNewWonder();
    } else {
        document.getElementById("feedback").textContent = "Try again!";
    }
}

// Event listener to start the game
document.getElementById("startGame").addEventListener("click", startGame);


