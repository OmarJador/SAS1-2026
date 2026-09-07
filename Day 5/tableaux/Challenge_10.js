function trierTableau(tab) {
    let change;
    for(i=0; i<tab.length; i++){

        for(j=i+1; j<tab.length; j++){

            if(tab[i]>tab[j]){
                change = tab[i]
                tab[i] = tab [j]
                tab[j] = change

            }

        }

    }
    console.log(tab)
}
trierTableau([2,5,8,3,1])

