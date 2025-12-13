import planets from "../data/planets.js";
const infoContainer = document.getElementById("info-container");

async function displayInformations(planetName) {
  const planet = planets.find((p) => p.name === planetName);
  if (planet) {

    const moons = await planet.moons;
    console.log(moons);
    const firstMoons = moons.slice(0, 10); // Affiche jusqu'à 10 lunes
    const moonsText = firstMoons.length ? firstMoons.join(", ") : "Aucune lune";

    infoContainer.innerHTML = `
      <h2>${planet.name}</h2>
      <img src="img/${planet.name}.png" alt="${planet.name}" />
      <p class="title">Lune:</p><p class="value">${moonsText}</p><br>
      <p class="title">Rayon:</p><p class="value">${planet.size}.000 km</p><br>
      <p class="title">Distance du soleil:</p><p class="value">${planet.distance}.000.000 km</p><br>
      <p class="title">Gravité:</p><p class="value">${planet.gravity} m/s²</p>
    `;
  }
}

export default displayInformations;
