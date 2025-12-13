import planets from "../data/planets.js";
const infoContainer = document.getElementById("info-container");

function displayInformations(planetName) {
  const planet = planets.find((p) => p.name === planetName);
  if (planet) {
    infoContainer.innerHTML = `
      <h2>${planet.name}</h2>
      <img src="${planet.name}.png" alt="${planet.name}" />
      <p id="radius">Rayon: ${planet.size}.000 km</p>
      <p id="distance">Distance: ${planet.distance}.000.000 km</p>
      <p id="gravity">Gravité:</p><p>${planet.gravity} m/s²</p>
    `;
  }
}

export default displayInformations;
