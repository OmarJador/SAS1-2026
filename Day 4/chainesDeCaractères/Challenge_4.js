function compterVoyelles(chaine) {
    let voyelles = ['y'];
    let voyelle = 0;
    for (i =0; i<chaine.length; i++){
        while(chaine[i]=== voyelles){
            voyelle++
            console.log(voyelle)
            
        }
    }return voyelle

}
console.log(compterVoyelles("yessss"))