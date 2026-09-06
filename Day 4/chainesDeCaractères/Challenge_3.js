function inverserChaine(chaine) {
    let counter = chaine.length;
    let reverse = '';
    console.log(counter)

    for(i=0; i<chaine.length; i++){

        counter--;
        reverse += chaine[counter]

    }return reverse
}
console.log(inverserChaine("Hello"));