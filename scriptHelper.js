// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name} </li>
        <li>Diameter: ${diameter} </li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance} </li>
        <li>Number of Moons: ${moons} </li>
    </ol>
    <img src="${imageUrl}">`

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
    // DOM Declarations
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus")
    let launchStatus = document.getElementById("launchStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    console.log("function is being called");

    // Validates if all fields are filled out
    let submissions = [pilot, copilot, fuelLevel, cargoLevel];
    for (let i = 0; i < submissions.length; i++) {
        if (validateInput(submissions[i]) === "Empty") {
            alert("Please fill out all fields.");
            break;
        }
    }

    // Sees if fuel level and cargo level are numbers
    if (validateInput(fuelLevel) === "Not a Number") {
        alert("Please put correct type of value (Number) for Fuel Level.");
    } else if (validateInput(cargoLevel) === "Not a Number") {
        alert("Please put correct type of value (Number) for Cargo Mass.");
    }

    // Sees if pilot and co pilot are strings
    if (validateInput(pilot) === "Is a Number") {
        alert("Please put correct type of value (String) for Pilot.");
    } else if (validateInput(copilot) === "Is a Number") {
        alert("Please put correct type of value (String) for Copilot.");
    } else {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    }

    // checks fuel level and cargo level and updates faulty lsit
    if (Number(fuelLevel) < 10000) {

        if (Number(cargoLevel) > 10000) {
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        } else {
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
        }

        fuelStatus.innerHTML = "Fuel level too low for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "rgb(199, 37, 78)";
        list.style.visibility = "visible";

    } else if (Number(cargoLevel) > 10000) {

        if (Number(fuelLevel) < 10000) {
            fuelStatus.innerHTML = "Fuel level too low for launch";
        } else {
            fuelStatus.innerHTML = "Fuel level high enough for launch";
        }

        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "rgb(199, 37, 77)";
        list.style.visibility = "visible";

    } else if (Number(cargoLevel) < 10000 && Number(fuelLevel) > 10000) {
        console.log("Testing is this working");
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        launchStatus.style.color = "rgb(65, 159, 106)";
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        list.style.visibility = "visible";
    }
}



async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
