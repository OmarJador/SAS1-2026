function inverserTableau(tab){
    tabReverse = [];
    counter = 0;

    for(let i=tab.length-1; i>=0; i--){

        tabReverse[counter] = tab[i];
        counter ++;


    }

    return tabReverse;
    // console.log(tabReverse)

}

console.log(inverserTableau([1,2,3,4]));
// let  tablea = [10,20,30]
// inverserTableau(tablea)