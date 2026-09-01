const prompt = require("prompt-sync")();

let lon = parseFloat(prompt("Longeur en m :"));
let lar = parseFloat(prompt("Largeur en m :"));
let sur = ( lon * lar );
let pér = 2 * ( lon + lar );

console.log("Longeur :",lon,"m.");
console.log("Largeur :",lar,"m.");
console.log("Surface :",sur.toFixed(2),"m².");
console.log("Périmètre :",pér.toFixed(2),"m.");