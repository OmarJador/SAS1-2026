const prompt = require("prompt-sync")();

let note = parseFloat(prompt("Note :"));

console.log("Note :",note,".");

if(note<0){
    console.log("Note invalide.");
}else if(note<10){
    console.log("Échec");
}else if(note<12){
    console.log("Passable");
}else if(note<14){
    console.log("Assez Bien");
}else if(note<16){
    console.log("Bien");
}else if(note<18){
    console.log("Très bien");
}else if(note<=20){
    console.log("Excellent");
}else{
    console.log("Note invalide.");
};