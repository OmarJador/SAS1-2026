const prompt = require("prompt-sync")();

let score = parseInt(prompt("Tapez votre score :"));

if(score>=0 && score<=5000){
    if(score == 5000){
        console.log("Votre rang est Légende !");
    }else if(score>=3000){
        console.log("Votre rang est Diamant !");
        console.log("5000 → Légende");
    }else if(score>=2000){
        console.log("Votre rang est Or !");
        console.log("3000 → Diamant");
    }else if(score>=1000){
        console.log("Votre rang est Argent !");
        console.log("2000 → Or");
    }else{
        console.log("Votre rang est Bronze !");
        console.log("1000 → Argent");
    }
}else{
    console.log("Score invalide.")
}