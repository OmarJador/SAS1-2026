const prompt = require("prompt-sync")();

let note = parseFloat(prompt("Note :"));

if (note>20){
    console.log("Note invalide.");
}else if(note>=10){
    console.log("Résultat : Admis.");
}else if(note<0){
    console.log("Note invalide.");
}else{
    console.log("Résultat : Non Admis");
};