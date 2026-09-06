const prompt = require("prompt-sync")();

function compterCaracteres() {

    let chaine = prompt("Donnez un mot :");
    let caractere = 0;

    for(let i = 0; i<chaine.length; i++){

        caractere++;

    }
    return caractere
}

console.log(compterCaracteres());