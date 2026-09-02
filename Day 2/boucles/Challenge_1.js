const prompt = require("prompt-sync")();

let nmbr = parseInt(prompt("Nombre de participants :"));

for(let i=1; i<=nmbr; i++){

    console.log("Participant",i);
};