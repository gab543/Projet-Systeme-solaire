import getPlanets from "./data/planets.js";
import drawSun from "./render/canvas.js";
import iniControls from "./ui/controls.js";

const planets = getPlanets();

// Dessine soleil
drawSun();


//Event au clique
iniControls();


//Test :
// console.log(planets);