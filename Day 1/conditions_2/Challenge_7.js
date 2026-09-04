const prompt = require("prompt-sync")();

console.log("1 → Compte courant");
console.log("2 → Compte épargne");
console.log("3 → Compte étudiant");
console.log("4 → Compte professionnel");

let choix = parseInt(prompt("Tapez votre choix de compte (de 1 à 4) :"));

switch(choix){
    case 1:
        console.log("Compte → courant");
        console.log("Frais mensuels : 20 DH");
    break;
    case 2:
        console.log("Compte → épargne");
        console.log("Frais mensuels : 10 DH");
    break;
    case 3:
        console.log("Compte → étudiant");
        console.log("Frais mensuels : 0 DH");
    break;
    case 4:
        console.log("Compte → professionnel");
        console.log("Frais mensuels : 50 DH");
    break;
    default:
        console.log("Choix de compte invalide.")
}
