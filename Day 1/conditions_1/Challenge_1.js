const prompt = require("prompt-sync")();

let age = parseInt(prompt("Age :"));

if (age>=18){
    console.log("Accès autorisé");
}else{
    console.log("Accès non autorisé");
};