
function additionnerTout(...args) {

    let somme = 0;
    for(let nombre of args){
        somme += nombre
    }
    return somme


}

console.log("Somme :",additionnerTout(1,2,3));