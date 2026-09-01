const prompt = require("prompt-sync")();
let u = parseFloat(prompt("Tension en V :"));
let I = parseFloat(prompt("Intensité en A :"));
let t = parseFloat(prompt("Temps en heures :"));
let E = u * I * t;
console.log("Tension :",u.toFixed(2),"V.");
console.log("Intensité :",I.toFixed(2),"A.");
console.log("Temps :",t.toFixed(2),"h.");
console.log("Énergie :",E.toFixed(2),"Wh.");