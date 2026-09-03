const prompt = require("prompt-sync")();

let color = prompt("Tapez une couleur du feu :").toLowerCase().trimEnd();

switch(color){

    case "rouge": console.log("rouge  → Arrêtez-vous");
        break;
    case "orange": console.log("orange → Ralentissez");
        break;
    case "vert": console.log("vert   → Vous pouvez passer");
        break;
    default:
        console.log("Couleur invalide.");

}