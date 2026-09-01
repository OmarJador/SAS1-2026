const prompt = require("prompt-sync")();
let Durée = prompt("Durée du film en minutes :");
let Catégorie = ""
if (Durée<60)
    {Catégorie = "Court"} 
else if (Durée<=120) 
    {Catégorie = "Standard"} 
else
    {Catégorie = "Long"};
console.log("Durée du film en minutes :",Durée,"minutes.");
console.log("Catégorie :",Catégorie,".");