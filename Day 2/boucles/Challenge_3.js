const prompt = require("prompt-sync")();

let N = parseInt(prompt("Donner un nombre :"));
let S = parseInt("0");

for(i=1; i<=N; i++){

    S += i;
}
console.log("N :",N)
console.log("Somme :",S);