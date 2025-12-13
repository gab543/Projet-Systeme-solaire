import planets from "../data/planets.js";

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

// Taille canvas
canvas.width = 500;
canvas.height = 500;

// Pour avoir le milieu du canvas
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dessin du soleil
  ctx.beginPath();
  ctx.arc(centerX, centerY, 20, 0, Math.PI * 2);
  ctx.fillStyle = "yellow";
  ctx.fill();

  // Dessin des planètes
  planets.forEach((planet) => {
    let Speed = 6;
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

export default animate;
