import planets from "../data/planets.js";
import { changedColorPlanet } from "../render/canvas.js";
import displayInformations from "../render/informations.js";

const buttons = document.querySelectorAll(".blocLeft button");

// Identifié la planet cliqué
function iniButtons() {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const dataPlanet = button.getAttribute("data-planet");

      changedColorPlanet(dataPlanet);

      displayInformations(dataPlanet);
    });
  });
}

export default iniButtons;
