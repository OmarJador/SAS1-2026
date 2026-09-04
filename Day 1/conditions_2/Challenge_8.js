const prompt = require("prompt-sync")();

console.log("1 → Facile");
console.log("2 → Normal");
console.log("3 → Difficile");
console.log("4 → Extrême");

let choix = parseInt(prompt("Tapez votre choix de difficulté (de 1 à 4) :"));

switch(choix){
    case 1:
        
        console.log("Niveau : Facile");
        console.log("Enemis: 15");
        console.log("Points par enemi : 5");
    break;
}
