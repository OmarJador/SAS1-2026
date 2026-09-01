const prompt = require("prompt-sync")();

let code = parseInt(prompt("Code pin de 4 chiffres :"));
console.log("Code :",code);
let pre = parseInt(code / 1000);
let deu = Math.floor(code/100);
let tro = code/10;
let qua = code % 10;
console.log("Premier chiffre :",pre,".");
console.log("Deuxième chiffre :",deu,".");
console.log("Troisième chiffre :",tro,".");
console.log("Quatrième chiffre :",qua,".");