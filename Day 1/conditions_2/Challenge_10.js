const prompt = require("prompt-sync")();

console.log("1 → Km vers mètres");
console.log("2 → Mètres vers cm");
console.log("3 → Kg vers grammes");
console.log("4 → Litres vers millilitres");

let choix = parseInt(prompt("Tapez votre choix de conversion (de 1 a 4) :"));
let valeur = parseFloat(prompt("Tapez la valeur :"));

rslt = 0;

console.log("Choix :",choix);
console.log("Valeur :",valeur);

switch(choix){
    case 1:
        rslt = valeur * 1000;
        console.log("Résultat :",rslt," mètres");
    break;
    case 2:
        rslt = valeur * 100;
        console.log("Résultat :",rslt," centimetres");
    break;
    case 3:
        rslt = valeur * 1000;
        console.log("Résultat :",rslt," grammes");
    break;
    case 4:
        rslt = valeur * 1000;
        console.log("Résultat :",rslt," millilitres");
    break;
    default:
        console.log("Choix invalide.")
}