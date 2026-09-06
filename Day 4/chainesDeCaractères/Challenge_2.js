function compterLettre(chaine, lettre){
    let counter = 0;
    for(i=0; i<chaine.length; i++){

        if(chaine[i] === lettre ){
            counter++;
        }

    }return counter

}
console.log(compterLettre("Green goblin", "l"));