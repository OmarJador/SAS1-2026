const prompt = require("prompt-sync")();

console.log("1 → Pizza");
console.log("2 → Burger");
console.log("3 → Tacos");
console.log("4 → Salade");

let choix = parseInt(prompt("Tapez votre choix de 1 à 4 :"));

let qua = parseInt(prompt("Tapez la quantité :"));

prix = 0;
red = 0;


switch(choix){
    case 1:
        console.log("Plat : Pizza")
        console.log("Prix unitaire : 60 DH")
        prix = 60
        break;
    case 2:
        console.log("Plat : Burger")
        console.log("Prix unitaire : 45 DH")
        prix = 45
        break;
    case 3:
        console.log("Plat : Tacos")
        console.log("Prix unitaire : 40 DH")
        prix = 40
        break;
    case 4:
        console.log("Plat : Salade")
        console.log("Prix unitaire : 30 DH")
        prix = 30
        break;
        default:
            console.log("Plat : Invalide.")
            console.log("Prix unitaire : 0 DH")
}
somme = prix * qua

if(somme>=200){
    red = somme * .10
}

total = somme - red

console.log("Quantité :",qua);
console.log("Sous-total :",somme,"DH");
console.log("Réduction :",red,"DH");
console.log("Total à payer :",total,"DH");




