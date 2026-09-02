const prompt = require("prompt-sync")();

let montant = parseFloat(prompt("Montant de la commande :"));
const liv = parseInt(40);

if (montant>=500){
    console.log("Montant de la commande :",montant,"DH");
    console.log("Livraison : Gratuite");
    console.log("Total à payer :",montant,"DH");
}else{
    console.log("Montant de la commande :",montant,"DH");
    console.log("Livraison :",liv,'DH');
    console.log("Total à payer :",(montant + liv),"DH");
};