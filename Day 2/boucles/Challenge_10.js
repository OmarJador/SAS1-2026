const prompt = require("prompt-sync")();

let somme = 0;
let i=0;

while(1){

    let nmbr = parseInt(prompt("Donnez un nombre a ajouter :"));
    if(nmbr == 0) break;
    somme = somme +nmbr;
    i++

}

console.log("Nombre de valeurs :",i);
console.log("Somme :",somme);
