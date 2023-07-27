// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else if (!isNaN(testInput)) {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    console.log("function is being called")
    let submissions = [pilot, copilot, fuelLevel, cargoLevel];
    
    for (let i = 0; i < submissions.length; i++) {
        if (validateInput(submissions[i]) === "Empty") {
            alert("Please fill out all fields.");
            break;
        }
    }

    if (validateInput(fuelLevel) === "Not a Number") {
        alert("Please put correct type of value for Fuel Level.");
    } else if (validateInput(cargoLevel) === "Not a Number") {
        alert("Please put correct type of value for Cargo Mass.");
    }

    if (validateInput(pilot) === "Is a Number") {
        alert("Please put correct type of value for Pilot.");
    } else if (validateInput(copilot) === "Is a Number") {
        alert("Please put correct type of value for Copilot.");
    }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then(function (response) {
    });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
