const prompt = require("prompt-sync")();

let N = parseInt(prompt("Donner un nombre :"));

for (i=1; i<=N; i++){
    if(i%2==0){
        console.log(i)
    }
}