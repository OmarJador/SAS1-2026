const prompt = require("prompt-sync")();

let base = parseInt(prompt("Donner un nombre Base :"));
let expo = parseInt(prompt("Donner un nombre Exposant :"));


while(base**expo){
    console.log(base**expo)
}