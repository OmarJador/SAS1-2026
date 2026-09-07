function formaterChaine(tab){
    tab.pop()
    tab.shift()

    console.log(tab.join("-"))

}

formaterChaine(["Début", "JS", "PHP", "Fin"])