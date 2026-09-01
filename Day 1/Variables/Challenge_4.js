const prompt = require("prompt-sync")();
let km = prompt("Distance en km :");
let L = prompt("Carburant en L :");
let Consommation = ((L/km) * 100);
console.log("Distance :",km,"km");
console.log("Carburant :",L,"Litres");
console.log("Consommation :",Consommation.toFixed(2),"L/100 km");
