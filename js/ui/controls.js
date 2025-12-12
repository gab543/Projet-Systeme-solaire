const buttons = document.querySelectorAll(".blocLeft button");

// Identifié la planet cliqué
function iniControls(planet) {
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            let data = button.dataset.planet
            console.log(data);
        })
    })
}

//Changer couleur canvas


//displayInformations

export default iniControls; 