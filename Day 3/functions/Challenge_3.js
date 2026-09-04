function genererEmail(prenom, nom){

    return (`${prenom}.${nom}@entreprise.com`.toLowerCase())

}

console.log(genererEmail("Omar", "Jador"));