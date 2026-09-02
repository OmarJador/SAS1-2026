const prompt = require("prompt-sync")();

let N = parseInt(prompt("Donner un nombre N :"));
let X = parseInt(prompt("Donner un nombre X :"));
let mult =parseInt("0");

for(i=1; mult<N; i++){
    mult = i * X;
    console.log(mult);
};