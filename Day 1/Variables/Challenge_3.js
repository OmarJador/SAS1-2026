const prompt = require("prompt-sync")();
let GB = prompt("Stockage en GB :");
let MB = GB * 1024;
console.log("Stockage :",GB,"GB");
console.log("Resultat :",MB,"MB");