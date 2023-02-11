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
let text = document.getElementById("text");


convertBtn.addEventListener('click', function () {
    if(!isNaN(input.value)) {
        text.textContent = input.value * kilo;
        console.log(input.value);

    } else {
        alert("please enter a number");
        input.value = "";
    }
 })
