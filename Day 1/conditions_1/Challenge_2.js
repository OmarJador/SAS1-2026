const prompt = require("prompt-sync")();

let nmbr = parseInt(prompt("Nombre :"));

if (nmbr<0){
    console.log("Le nombre est négatif.");
}else if (nmbr>0){
    console.log("Le nombre est positif.");
}else{
    console.log("Le nombre est égal à zéro.");
};