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
    ctx.fillStyle = 'yellow';
    ctx.fill();
}

export default drawSun;