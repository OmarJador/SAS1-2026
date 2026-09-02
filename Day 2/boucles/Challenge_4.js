const prompt = require("prompt-sync")();

let N = parseInt(prompt("Donner un nombre :"));
let multi = parseInt("");

for(i=1; i<=10; i++){
    multi= N * i;
    console.log(N + "x" + i + "=" + multi);
};