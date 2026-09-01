const prompt = require("prompt-sync")();
let ray = parseFloat(prompt("Rayon du réservoir en m :"));
let hau = parseFloat(prompt("Hauteur du réservoir en m :"));
let v = (3.14159 * (ray**2) * hau);
console.log("Rayon :",ray,"m.");
console.log("Hauteur :",hau,"m.");
console.log("Volume :",v.toFixed(4),"m³.");