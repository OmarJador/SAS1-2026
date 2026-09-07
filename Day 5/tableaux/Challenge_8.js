function supprimerDoublons(tab){
let result=[];
for(let i = 0; i <=tab.length-1; i++) {
    let found=false;
    let counter = 0;
    for(let j = 0; j < result.length; j++) {
        if(tab[i]==result[j]){
            found=true;
            break;
        }
        counter++
    }
if(found==false){
    result[counter] = tab[i]};
} console.log(result);
}

supprimerDoublons([1,1,5,3,6,4,5,1,2]);