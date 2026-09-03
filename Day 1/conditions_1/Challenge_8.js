const prompt = require("prompt-sync")();

let nmb1 = parseFloat(prompt("Tapez le premier nombre :"));
let oper = prompt("Votre operateur :");
let nmb2 = parseFloat(prompt("Tapez le deuxieme nombre :"));
let rslt = parseFloat("").toFixed(2);

switch(oper){

    case "+":
        rslt = nmb1 + nmb2
        console.log(nmb1,"+",nmb2);
        console.log("Résultat :",rslt);
    break;
    case "-":
        rslt = nmb1 - nmb2
        console.log(nmb1,"-",nmb2);
        console.log("Résultat :",rslt);
    break;
    case "*":
        rslt = nmb1 * nmb2
        console.log(nmb1,"*",nmb2);
        console.log("Résultat :",rslt);
    break;
    case "/":
        rslt = nmb1 / nmb2
        console.log(nmb1,"/",nmb2);
        console.log("Résultat :",rslt);
    break;
    default:
        console.log(nmb1,oper,nmb2);
        console.log("Opérateur invalide.");
    break;

}