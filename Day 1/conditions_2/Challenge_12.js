const prompt = require("prompt-sync")();

let salaire = parseInt(prompt("Tapez votre salaire en DH :"));
let age = parseInt(prompt("Tapez votre ancienneté en ans :"));

prime = 0;
total = 0;
bonus = 0;

console.log("Salaire :",salaire," DH");
if(salaire>=6000){
    bonus = salaire * .02
    if(age>=7){

        prime = salaire * .15

        console.log("Ancienneté de 7 ans ou plus.");
        console.log("Votre prime est 15% de votre salaire :",prime," DH");
        console.log("Les salaire de 6000 et plus benefie de 2% bonus :",bonus," DH");
        console.log("Salaire total :",total = salaire + prime + bonus," DH");
    }else if(age>=4){
        prime = salaire * .10

        console.log("Ancienneté de 4 a 7 ans.");
        console.log("Votre prime est 10% de votre salaire :",prime," DH");
        console.log("Les salaire de 6000 et plus benefie de 2% bonus :",bonus," DH");
        console.log("Salaire total :",total = salaire + prime + bonus," DH");
    }else if(age>=1 && age<4){
        prime = salaire * .05

        console.log("Ancienneté d'une annee a 3 ans.");
        console.log("Votre prime est 5% de votre salaire :",prime," DH");
        console.log("Les salaire de 6000 et plus benefie de 2% bonus :",bonus," DH");
        console.log("Salaire total :",total = salaire + prime + bonus," DH");
    }else if(age>=0){

        console.log("Ancienneté moins d'une annee.");
        console.log("Vous benefiez pas de prime.");
        console.log("Les salaire de 6000 et plus benefie de 2% bonus :",bonus," DH");
        console.log("Salaire total :",total = salaire + prime + bonus," DH");
    }else{
        console.log("Ancienneté invalide.");
    }
}else if(salaire>0){

    if(age>=7){

        prime = salaire * .15

        console.log("Ancienneté de 7 ans ou plus.");
        console.log("Votre prime est 15% de votre salaire :",prime," DH");
        console.log("Les salaire moins de 6000 ne benefie pas de bonus.");
        console.log("Salaire total :",total = salaire + prime + bonus," DH");
    }else if(age>=4){
        prime = salaire * .10

        console.log("Ancienneté de 4 a 7 ans.");
        console.log("Votre prime est 10% de votre salaire :",prime," DH");
        console.log("Les salaire moins de 6000 ne benefie pas de bonus.");
        console.log("Salaire total :",total = salaire + prime + bonus," DH");
    }else if(age>=1 && age<4){
        prime = salaire * .05

        console.log("Ancienneté d'une annee a 3 ans.");
        console.log("Votre prime est 5% de votre salaire :",prime," DH");
        console.log("Les salaire moins de 6000 ne benefie pas de bonus.");
        console.log("Salaire total :",total = salaire + prime + bonus," DH");
    }else if(age>=0){

        console.log("Ancienneté moins d'une annee.");
        console.log("Vous benefiez pas de prime.");
        console.log("Les salaire moins de 6000 ne benefie pas de bonus.");
        console.log("Salaire total :",total = salaire + prime + bonus," DH");
    }else{
        console.log("Ancienneté invalide.");
    }

}else{
    console.log("Salaire invalide.");
}