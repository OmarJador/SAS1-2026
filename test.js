// F : H 
// age 
// >18 F classe 1
// <18 F classe 2
// >18 H classe 2
// <18 H classe 1

const scan = require("prompt-sync")();

let pizza = 30
let tacos = 50
let tajine = 55

console.log("Bonjour")
console.log("pour Pizza 30 DH entrez 1")
console.log("pour tacos 55 DH entrez 2")
console.log("tpour ajine 55 DH entrez 3")

let choix = Number(scan("Entrez votre choix: "))
let quantite = scan("Entrez votre choix: ")

let total = 0;
// if (choix == 1) {
//     total = quantite * pizza
// }else if (choix == 2) {
//     total = quantite * tajine
// } else if (choix == 3) {
//     total = quantite * tacos
// }

// switch (choix) {
//     case 1: 
//     case 5:
//     case 6:
//         total = quantite * pizza
//     break;
//     case 2: total = quantite * tajine
//     break;
//     case 3: total = quantite * tacos
//     break;
//     default: 
//         console.log("Entrez un choix valide")
// }

// if (total > 500 ) {
//     console.log("votre total est : " + total + " et la reduction est : 50% ");
// } else if (total > 250) {
//     console.log("votre total est : " + total + " et la reduction est : 25% ");
// } else if (total > 100 ) {
//     console.log("votre total est : " + total + " et la reduction est : 10% ");
// }
function hommeAfficherLaClasse(ageEntrer) {
    if (age > 18) {
            console.log("classe 2")
        } else {
            console.log("classe 1");
        }
}

function femmeAfficherLaClasse(age) {
     if (age < 18) {
            console.log("classe 2")
        } else {
            console.log("classe 1");
        }
}
console.log("1 -> H")
console.log("2 -> F")

let jonr = Number(scan("entre( 1 et 2)"))
let age = scan("entre age: ")

switch (jonr) {
    case 1: hommeAfficherLaClasse(age);
        break;
    case 2: femmeAfficherLaClasse(age);
        break;
    default: 
        console.log("Entrez un choix valide");
}

// if(jonr == 1 && age > 18){
//     console.log("class 1")
// }
// else if(jonr == 1 && age < 18){
//     console.log("class 2")
// }
// else if(jonr == 2 && age < 18){
//     console.log("class 1")
// }
// else if(jonr == 2 && age > 18){
//     console.log("class 2")
// }