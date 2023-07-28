// Write your JavaScript code here!

// const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function () {
    const formSubmit = document.getElementById("formSubmit");

    formSubmit.addEventListener("click", function (event) {
        let pilot = document.getElementById("pilotName").value;
        let copilot = document.getElementById("copilotName").value;
        let fuelLevel = document.getElementById("fuelLevel").value;
        // let cargoMass = document.getElementById("cargoMass").value;
        let cargoMass = document.getElementsByName("cargoMass")[0].value;
        let list = document.getElementById("faultyItems");
        
        formSubmission(window.document, list, pilot, copilot, fuelLevel, cargoMass);
        event.preventDefault();
    });

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        
        let planet = pickPlanet(listedPlanets);
        let name = planet.name;
        let diameter = planet.diameter;
        let star = planet.star;
        let distance = planet.distance;
        let imageUrl = planet.image;
        let moons = planet.moons;
        addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl)
    })

});