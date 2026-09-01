const prompt = require("prompt-sync")();
let noteCC = parseFloat(prompt("Note Contrôle continu :"));
let projet = parseFloat(prompt("Note Projet :"));
let examen = parseFloat(prompt("Note Examen :"));
let note = (noteCC * 2 + projet * 3 + examen * 5)/10;
console.log("Contrôle continu :",noteCC,".");
console.log("Projet :",projet,".");
console.log("Examen :",examen,".");
console.log("Note finale :",note.toFixed(2),".");