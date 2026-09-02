const prompt = require("prompt-sync")();

let nmbr = prompt("Tapez un nombre :");

console.log("Départ :",nmbr);

for(let i=0; nmbr>=0; nmbr--){
    console.log(nmbr);
}

console.log("Décollage !");