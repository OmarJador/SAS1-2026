const prompt = require("prompt-sync")();

console.log("1 → Afficher le profil");
console.log("2 → Afficher les paramètres");
console.log("3 → Afficher les notifications");
console.log("4 → Se déconnecter");

let choix = parseInt(prompt("Tapez votre choix:"))

switch(choix){
    case 1:
        console.log("Ouverture de Profile...");
        break;
    case 2:
        console.log("Ouverture des paramètres...");
        break;
    case 3:
        console.log("Ouverture des notifications...");
        break;
    case 4:
        console.log("Deconexion...");
        break;
}   