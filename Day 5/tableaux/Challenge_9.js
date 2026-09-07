function fusionnerTableaux(tab1, tab2){
    let tab3 = [];
    let counter = 0;
    for(i=0; i<tab1.length; i++){

        tab3[counter] = tab1[i]
        counter++
        
    }
    let tab3length = tab3.length
    for(j=0; j<tab2.length; j++){

        tab3[tab3length] = tab2[j]
        tab3length++

    }
    
    console.log(tab3)
}
fusionnerTableaux([1,2,3],[4,5,6])