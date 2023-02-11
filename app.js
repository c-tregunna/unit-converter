/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

//** VARIABLES **//
const kilo = 2.204;
const meter = 3.281;
const liter = 0.264;
const input = document.getElementById("input-box");
const convertBtn = document.getElementById("convert-btn");
const resetBtn = document.getElementById("reset-btn");
let lengthText = document.getElementById("length-text");
let volText = document.getElementById("vol-text");
let massText = document.getElementById("mass-text");


convertBtn.addEventListener('click', function () {
    if(!isNaN(input.value)) {
        let metLength = input.value * meter;
        let feetLength = input.value / meter;
        lengthText.innerHTML = `
        ${input.value} meters = ${metLength.toFixed(3)} feet | ${input.value} feet = ${feetLength.toFixed(3)} meters
        `
        let litVol = input.value * liter;
        let galVol = input.value / liter
        volText.innerHTML = `
        ${input.value} litres = ${litVol.toFixed(3)} gallons | ${input.value} gallons = ${galVol.toFixed(3)} litres
        `
        let kiloMass = input.value * kilo;
        let poundMass = input.value / kilo
        massText.innerHTML = `
        ${input.value} kilos = ${kiloMass.toFixed(3)} pounds | ${input.value} pounds = ${poundMass.toFixed(3)} kilos
        `

    } else {
        alert("We can't convert text, enter a number");
        input.value = "";
    }
 })


 resetBtn.addEventListener('click', function() {
    input.value = "";
    lengthText.innerHTML = ` 0 meters = 0 feet | 0 feet = 0 meter`
    volText.innerHTML = ` 0 litres = 0 gallons | 0 gallons = 0 litres`
    massText.innerHTML = ` 0 kilos = 0 pounds | 0 pounds = 0 kilos`

 })

 const darkMode = document.getElementById("dark-mode");
 const container = document.getElementById("convert-contain");
 darkMode.addEventListener('click', function() {
    container.classList.toggle("dark-mode")
 })





