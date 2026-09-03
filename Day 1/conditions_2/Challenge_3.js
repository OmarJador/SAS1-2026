const prompt = require("prompt-sync")();

let montant = parseInt(prompt("Tapez votre montant de commande :"));

reduction = 0;
total = 0;
console.log("Montant :",montant,"DH");

if(montant>=2000){

    reduction = montant * .15;
    console.log("Réduction :",reduction,"DH");

}else if(montant>=1000){

    reduction = montant * .1;
    console.log("Réduction :",reduction,"DH");

}else if(montant>=500){

    reduction = montant * .05;
    console.log("Réduction :",reduction,"DH");

}else{

    console.log("Réduction :",0,"DH");

}

total = montant + reduction;
console.log("Total :",total,"DH");