import planets from "./data/planets.js";
import animate from "./render/canvas.js";
import iniButtons from "./ui/buttons.js";

console.log(planets);
//Event au clique
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btnDefault").click();
});
animate();
iniButtons();
//Test :
// console.log(planets);
