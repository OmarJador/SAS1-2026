const prompt = require("prompt-sync")();

console.log("1  → Janvier");
console.log("2  → Février");
console.log("3  → Mars");
console.log("...");
console.log("12 → Décembre");

let choix = parseInt(prompt("Donnez un numéro de mois (de 1 à 12) :"));

switch(choix){
    case 1:
        console.log("Mois : Janvier → 31 jours ");
    break;
    case 2:
        console.log("Mois : Février → 28     jours ");
    break;
    case 3:
        console.log("Mois : Mars → 31 jours ");
    break;
    case 4:
        console.log("Mois : Avril → 30 jours ");
    break;
    case 5:
        console.log("Mois : May → 31 jours ");
    break;
    case 6:
        console.log("Mois : Juin → 30 jours ");
    break;
    case 7:
        console.log("Mois : Juillet → 31 jours ");
    break;
    case 8:
        console.log("Mois : Août → 31 jours ");
    break;
    case 9:
        console.log("Mois : Septembre → 30 jours ");
    break;
    case 10:
        console.log("Mois : Octobre → 31 jours ");
    break;
    case 11:
        console.log("Mois : Novembre → 30 jours ");
    break;
    case 12:
        console.log("Mois : Décembre → 31 jours ");
    break;
    default:
        console.log("Choix de mois invalide.");
}