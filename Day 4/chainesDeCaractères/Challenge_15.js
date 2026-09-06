function capitaliserPhrase(phrase) {
    let motsOrigine = phrase.toUpperCase().split(" ")
    let premiereLettres = motsOrigine.map(mot => mot[0])
    return premiereLettres
}
console.log(capitaliserPhrase("omar jador est bien"))