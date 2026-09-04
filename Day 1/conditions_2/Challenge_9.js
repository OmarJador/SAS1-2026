const prompt = require("prompt-sync")();

console.log("1 → Standard 80 DH");
console.log("2 → VIP 200 DH");
console.log("3 → Premium 350 DH");
console.log("4 → Enfant 40 DH");

let choix = parseInt(prompt("Tapez votre choix de billet (de 1 a 4) :"));
let qua = parseInt(prompt("Quantite :"));

total = 0;
switch(choix){
    case 1:
        total = qua * 80
        console.log("Billet : Standard 80 DH");
        console.log("Quantite :",qua);
        console.log("Total :",total," DH");
    break;
    case 2:
        total = qua * 200
        console.log("Billet : VIP 200 DH");
        console.log("Quantite :",qua);
        console.log("Total :",total," DH");
    break;
    case 3:
        total = qua * 350
        console.log("Billet : Premium 350 DH");
        console.log("Quantite :",qua);
        console.log("Total :",total," DH");
    break;
    case 4:
        total = qua * 40
        console.log("Billet : Enfant 40 DH");
        console.log("Quantite :",qua);
        console.log("Total :",total," DH");
    break;
    default:
        console.log("Choix de billet invalide.");
}