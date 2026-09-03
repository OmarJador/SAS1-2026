const prompt = require("prompt-sync")();

let montant = parseInt(prompt("Tapez votre montant de commande :"));
let liv = 0;


if(montant>=500){
    liv = 10;
}else if(montant>300){
    liv = 20;
}else if(montant>100){
    liv = 30;
}else{
    liv = 50;
}

total = montant + liv;

console.log("Montant commande :",montant);
console.log("Frais livraison :",liv);
console.log("Total à payer :",total);