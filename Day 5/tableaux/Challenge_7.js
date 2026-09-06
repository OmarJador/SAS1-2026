function filtrerPairs(tab) {
    
    let tabPair = [];

    for(i=0; i<tab.length; i++){

        if(tab[i] % 2 == 0){

            tabPair[tabPair.length] = tab[i]

        }

    }
    return tabPair
}

console.log(filtrerPairs([1, 2, 3, 4, 5, 6]))