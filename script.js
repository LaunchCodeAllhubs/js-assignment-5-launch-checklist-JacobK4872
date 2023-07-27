// Write your JavaScript code here!

window.addEventListener("load", function () {
    const formSubmit = document.getElementById("formSubmit");

    formSubmit.addEventListener("click", function (event) {
        let pilot = document.getElementById("pilotName").value;
        let copilot = document.getElementById("copilotName").value;
        let fuelLevel = document.getElementById("fuelLevel").value;
        // let cargoMass = document.getElementById("cargoMass").value;
        let cargoMass = document.getElementsByName("cargoMass")[0].value;
        
        formSubmission(1, 1, pilot, copilot, fuelLevel, cargoMass)
        event.preventDefault()
    });

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })

});