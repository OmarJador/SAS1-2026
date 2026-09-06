function trouverMax(tab) {
    
    let max = tab[0]
    for(let i = 1; i<tab.length; i++){

        if(tab[i]>max){
            max = tab[i]
        }
        
    }return max

}
console.log(trouverMax([1,2,3,4,5,8,10]))