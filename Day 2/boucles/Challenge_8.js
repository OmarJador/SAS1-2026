const prompt = require("prompt-sync")();

let miss = parseInt(prompt("Nombre de missions :"));

for(let i = 1; i<=miss; i++){

    console.log("Mission ",i," → Score :",i * 100)

}