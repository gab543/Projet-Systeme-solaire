const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

// Taille canvas , prend toute la div allouée
canvas.width = 500;
canvas.height = 500;

// Pour avoir le milieu du canvas
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

// Soleil au milieu du canvas
function drawSun() {
  ctx.beginPath();
  ctx.arc(centerX, centerY, 20, 0, Math.PI * 2);
  ctx.fillStyle = "yellow";
  ctx.fill();
}

export default drawSun;

/* Chatgpt m'a donné ça tu en fais ce que tu veux après
<canvas id="space" width="600" height="600"></canvas>

<script>
const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

// Tableau des planètes
const planets = [
  { radius: 10, orbit: 80, speed: 0.01, angle: 0, color: "red" },
  { radius: 12, orbit: 140, speed: 0.006, angle: 0, color: "blue" },
  { radius: 8, orbit: 200, speed: 0.004, angle: 0, color: "green" }
];

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dessin du soleil
  ctx.beginPath();
  ctx.arc(centerX, centerY, 20, 0, Math.PI * 2);
  ctx.fillStyle = "yellow";
  ctx.fill();

  // Dessin des planètes
  planets.forEach(p => {
    p.angle += p.speed;  // avance de l'orbite

    const x = centerX + Math.cos(p.angle) * p.orbit;
    const y = centerY + Math.sin(p.angle) * p.orbit;

    // Dessin de la planète
    ctx.beginPath();
    ctx.arc(x, y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
  });

  requestAnimationFrame(draw);
}

draw();
</script>
*/
