import planets from "../data/planets.js";

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const divContainer = document.querySelector(".blocCanvas");

// Taille canvas
canvas.width = 500;
canvas.height = 500;

//Syncronize taille avec parent
canvas.width = divContainer.offsetWidth;
canvas.height = divContainer.offsetHeight;

// Pour avoir le milieu du canvas
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

// Sert a la function changedColorPlanet();
// Utilisé pour savoir si une planete est deja rouge
let activePlanet = null;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dessin du soleil
  ctx.beginPath();
  ctx.arc(centerX, centerY, 20, 0, Math.PI * 2);
  ctx.fillStyle = "yellow";
  ctx.fill();

  // Dessin des planètes
  planets.forEach((planet) => {

    //Pour changer la vitesse de rotation
    let Speed = 4;
    planet.angle += Speed / planet.period;
    let x = centerX + (planet.distance / 2) * Math.cos(planet.angle);
    let y = centerY + (planet.distance / 2) * Math.sin(planet.angle);

    // Dessin de la planète
    ctx.beginPath();
    ctx.arc(x, y, planet.size / 2, 0, Math.PI * 2);
    ctx.fillStyle = planet.color;
    ctx.fill();
  });
}
// Lancer l'animation
function animate() {
  draw();
  requestAnimationFrame(animate);
}

//Planete cliqué === reset color ancienne planetes puis color === rouge pour nouvelle Planet
function changedColorPlanet(planetName) {
  //Si / Remet a la couleur d'origine l'ancienne
  if (activePlanet) {
    activePlanet.color = activePlanet.originalColor;
  }

  //Récupère la planete cliqué
  const planet = planets.find((p) => p.name === planetName);

  //Colorie en rouge la nouvelle cliqué
  if (planet) {
    if (!planet.originalColor) {
      planet.originalColor = planet.color;
    }

    planet.color = "red";
    activePlanet = planet;
  }
}

export { animate, changedColorPlanet };
