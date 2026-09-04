const prompt = require("prompt-sync")();

console.log("A → Électronique");
console.log("B → Vêtements");
console.log("C → Alimentation");
console.log("D → Maison");
console.log("E → Sport");

let choix = prompt("Tapez votre choix :");

console.log("Code:",choix);

switch(choix){
    case "A":
        console.log("Catégorie : Électronique");
        break;
    case "B":
        console.log("Catégorie : Vêtements");
        break;
    case "C":
        console.log("Catégorie : Alimentation");
        break;
    case "D":
        console.log("Catégorie : Maison");
        break;
    case "E":
        console.log("Catégorie : Sport");
        break;
    default:
        console.log("Catégorie inconnue.");

}