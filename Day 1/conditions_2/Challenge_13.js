const prompt = require("prompt-sync")();

console.log("1 <= Type Standard 300 DH");
console.log("2 <= Type Deluxe   500 DH");
console.log("3 <= Type Suite    999 DH");

let choix = parseInt(prompt("Tapez votre type de chambre (de 1 a 3) :"));

console.log("1 <= Saison haute   +30% Tarifs");
console.log("2 <= Saison normale +0%  Tarifs");

let saison = parseInt(prompt("Tapez votre saison de choix :"));

console.log("Reservez 7+ nuits et benefiez d'une reduction de 10% !!");

let nuit = parseInt(prompt("Nombre de nuits : "));


let tarif = 0;
let red = 0;
let total = 0;
let final = 0;



if(saison == 1){

    if(nuit>=7){

        switch(choix){
            case 1:

                console.log("Type de chambre : Standard 300 DH");

                total = 300 * nuit;
                red   = .1 * total;
                tarif = .3 * total;

                final = total + tarif - red;

                console.log("Nombre de nuits :",nuit);
                console.log("Total de",nuit,"nuit(s) :",total," DH");
                console.log("Tarifs :",tarif," DH");
                console.log("Reduction :",red," DH");
                console.log("Total final :",final," DH");

            break;
            case 2:

                console.log("Type de chambre : Deluxe 500 DH");

                total = 500 * nuit;
                red   = .1 * total;
                tarif = .3 * total;

                final = total + tarif - red;

                console.log("Nombre de nuits :",nuit);
                console.log("Total de",nuit,"nuit(s) :",total," DH");
                console.log("Tarifs :",tarif," DH");
                console.log("Reduction :",red," DH");
                console.log("Total final :",final," DH");

            break;
            case 3:

                console.log("Type de chambre : Suite 999 DH");

                total = 999 * nuit;
                red   = .1 * total;
                tarif = .3 * total;

                final = total + tarif - red;

                console.log("Nombre de nuits :",nuit);
                console.log("Total de",nuit,"nuit(s) :",total," DH");
                console.log("Tarifs :",tarif," DH");
                console.log("Reduction :",red," DH");
                console.log("Total final :",final," DH");

            break;
            default:
                console.log("Choix invalide.");
        }



    }else if(nuit>0){

        switch(choix){
            case 1:

                console.log("Type de chambre : Standard 300 DH");

                total = 300 * nuit;
                tarif = .3 * total;
                
                final = total + tarif - red;
                
                console.log("Nombre de nuits :",nuit);
                console.log("Total de",nuit,"nuit(s) :",total," DH");
                console.log("Tarifs :",tarif," DH");
                console.log("Reduction :",red," DH");
                console.log("Total final :",final," DH");

            break;
            case 2:

                console.log("Type de chambre : Deluxe 500 DH");

                total = 500 * nuit;
                tarif = .3 * total;
                
                final = total + tarif - red;

                console.log("Nombre de nuits :",nuit);
                console.log("Total de",nuit,"nuit(s) :",total," DH");
                console.log("Tarifs :",tarif," DH");
                console.log("Reduction :",red," DH");
                console.log("Total final :",final," DH");

            break;
            case 3:

                console.log("Type de chambre : Suite 999 DH");

                total = 999 * nuit;
                tarif = .3 * total;

                final = total + tarif - red;

                console.log("Nombre de nuits :",nuit);
                console.log("Total de",nuit,"nuit(s) :",total," DH");
                console.log("Tarifs :",tarif," DH");
                console.log("Reduction :",red," DH");
                console.log("Total final :",final," DH");

            break;
            default:
                console.log("Choix de type invalide.");
        }

    }else{

        console.log("Nombre de nuits invalide.");
    }

}else if(saison == 2){

    if(nuit>=7){

        switch(choix){
            case 1:

                console.log("Type de chambre : Standard 300 DH");

                total = 300 * nuit;
                red   = .1 * total;

                final = total + tarif - red;

                console.log("Nombre de nuits :",nuit);
                console.log("Total de",nuit,"nuit(s) :",total," DH");
                console.log("Tarifs :",tarif," DH");
                console.log("Reduction :",red," DH");
                console.log("Total final :",final," DH");

            break;
            case 2:

                console.log("Type de chambre : Deluxe 500 DH");

                total = 500 * nuit;
                red   = .1 * total;

                final = total + tarif - red;

                console.log("Nombre de nuits :",nuit);
                console.log("Total de",nuit,"nuit(s) :",total," DH");
                console.log("Tarifs :",tarif," DH");
                console.log("Reduction :",red," DH");
                console.log("Total final :",final," DH");

            break;
            case 3:

                console.log("Type de chambre : Suite 999 DH");

                total = 999 * nuit;
                red   = .1 * total;

                final = total + tarif - red;

                console.log("Nombre de nuits :",nuit);
                console.log("Total de",nuit,"nuit(s) :",total," DH");
                console.log("Tarifs :",tarif," DH");
                console.log("Reduction :",red," DH");
                console.log("Total final :",final," DH");

            break;
            default:
                console.log("Choix invalide.");
        }



    }else if(nuit>0){

        switch(choix){
            case 1:

                console.log("Type de chambre : Standard 300 DH");

                total = 300 * nuit;
                
                final = total + tarif - red;
                
                console.log("Nombre de nuits :",nuit);
                console.log("Total de",nuit,"nuit(s) :",total," DH");
                console.log("Tarifs :",tarif," DH");
                console.log("Reduction :",red," DH");
                console.log("Total final :",final," DH");

            break;
            case 2:

                console.log("Type de chambre : Deluxe 500 DH");

                total = 500 * nuit;
                
                final = total + tarif - red;

                console.log("Nombre de nuits :",nuit);
                console.log("Total de",nuit,"nuit(s) :",total," DH");
                console.log("Tarifs :",tarif," DH");
                console.log("Reduction :",red," DH");
                console.log("Total final :",final," DH");

            break;
            case 3:

                console.log("Type de chambre : Suite 999 DH");

                total = 999 * nuit;

                final = total + tarif - red;

                console.log("Nombre de nuits :",nuit);
                console.log("Total de",nuit,"nuit(s) :",total," DH");
                console.log("Tarifs :",tarif," DH");
                console.log("Reduction :",red," DH");
                console.log("Total final :",final," DH");

            break;
            default:
                console.log("Choix de type invalide.");
        }

    }else{

        console.log("Nombre de nuits invalide.");
    }

}else{

    console.log("Choix de saison invalide.");
}
