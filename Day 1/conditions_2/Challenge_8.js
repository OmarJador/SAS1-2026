const prompt = require("prompt-sync")();

console.log("1 → Facile");
console.log("2 → Normal");
console.log("3 → Difficile");
console.log("4 → Extrême");

let choix = parseInt(prompt("Tapez votre choix de difficulté (de 1 à 4) :"));

switch(choix){
    case 1:
        console.log("choix :",choix);
        console.log("Niveau : Facile");
        console.log("Enemis: 15");
        console.log("Points par enemi : 5");
    break;
    case 2:
        console.log("choix :",choix);
        console.log("Niveau : Normal");
        console.log("Enemis: 30");
        console.log("Points par enemi : 15");
    break;
    case 3:
        console.log("choix :",choix);
        console.log("Niveau : Difficile");
        console.log("Enemis: 50");
        console.log("Points par enemi : 30");
    break;
    case 4:
        console.log("choix :",choix);
        console.log("Niveau : Extreme");
        console.log("Enemis: 100");
        console.log("Points par enemi : 100");
    break;
    default:
        console.log("Choix invalide.")
}
