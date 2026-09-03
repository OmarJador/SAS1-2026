const prompt = require("prompt-sync")();

console.log("1 → Bus");
console.log("2 → Train");
console.log("3 → Tramway");
console.log("4 → Taxi");
console.log("5 → Vélo");

let choix = parseInt(prompt("Tapez votre choix :"));

switch(choix){
    
    case 1:
        console.log("Transport : Bus ; Prix : 5 DH");
    break;
    case 2:
        console.log("Transport : Train ; Prix : 20 DH");
    break;
    case 3:
        console.log("Transport : Tramway ; Prix : 6 DH");
    break;
    case 4:
        console.log("Transport : Taxi ; Prix : 15 DH");
    break;
    case 5:
        console.log("Transport : Velo ; Prix : 10 DH");
    break;
    default:
        console.log("Choix invalide.");

}
