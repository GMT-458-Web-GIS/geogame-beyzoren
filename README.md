# Where in Turkey? - GeoGame

**Where in Turkey?** is a geography-based game that challenges players to identify landmarks from different cities in Turkey. Players are presented with a symbol (landmark) description and must click on the map to guess the correct city. The goal is to score as many points as possible by selecting the correct city for each landmark.

## Features

- **Randomized Landmarks**: Each game session presents a random landmark from a list of famous places in Turkey.
- **Interactive Map**: The map uses Leaflet.js to show Turkish cities and landmarks.
- **Score Tracking**: The score is updated as players select the correct city.
- **Simple Gameplay**: Players click on the map to guess the city, and the game provides feedback on whether the answer is correct or incorrect.

## How to Play

1. **Objective**: Identify the correct city for the given landmark.
2. **Gameplay**: 
    - A landmark description will appear on the screen.
    - Click on the map to select the city you think the landmark is located in.
    - If you select the correct city (within 10 km of the landmark), you gain a point and are presented with the next landmark.
    - If you select the wrong city, you are asked to try again.
3. **Scoring**: The score is displayed at the top of the page, which increases each time the player guesses the city correctly.

## Setup Instructions

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, etc.).
- An internet connection to load external libraries (Leaflet.js and OpenStreetMap).

### Files

- `index.html`: Contains the main HTML structure for the game.
- `style.css`: The CSS file for the styling of the page.
- `script.js`: JavaScript code that handles the game logic, map setup, and scoring.

### Installation

1. **Clone or Download the repository**:
   - You can clone the repository using Git:  
     ```bash
     git clone https://github.com/yourusername/where-in-turkey.git
     ```
   - Or download the ZIP file directly from the repository page.

2. **Open the Game**:
   - Open `index.html` in any modern web browser. The game will be displayed, and you can start playing immediately.

## Dependencies

- **Leaflet.js**: A leading JavaScript library for interactive maps.
  - [Leaflet.js Documentation](https://leafletjs.com/)
- **OpenStreetMap**: A free and open map source used for displaying the map.

## Technologies Used

- **HTML**: For the game structure and layout.
- **CSS**: For styling the game interface.
- **JavaScript**: For the game logic and interaction with the map.
- **Leaflet.js**: For rendering and interacting with the map.
- **OpenStreetMap**: For map tiles and geospatial data.

## Game Symbols

The game features landmarks from various cities in Turkey, such as:
- **Boğaz Köprüsü (Istanbul)**
- **Mevlana Statue (Konya)**
- **Cappadocia Fairy Chimneys (Nevşehir)**
- **Izmir Clock Tower (Izmir)**
- **Aspendos Theatre (Antalya)**

Each landmark is identified by its description, and players must match the description with the correct location on the map.

## Contributing

If you want to contribute to the project, feel free to fork the repository and submit a pull request. You can contribute by:
- Adding new landmarks to the game.
- Improving the UI/UX design.
- Fixing bugs and improving the codebase.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Enjoy playing and test your knowledge about Turkey's famous landmarks!**
