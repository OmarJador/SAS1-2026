function contientElement(tab, valeur){
    let reponse =""
    for(i=0; i<tab.length; i++){

        if(tab[i] === valeur){
            reponse = true
        }else{
            reponse = false
        }

    }
    return reponse
}

console.log(contientElement(["pomme", "orange","banane"], "banane"))