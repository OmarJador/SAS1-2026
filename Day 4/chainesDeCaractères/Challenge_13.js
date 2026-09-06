function obtenirInitiales(nomComplet) {
    let maj = nomComplet.toUpperCase().split(" ")
    let premiereLettre = maj.map(nom => nom[0])
    return premiereLettre.join(".")
}

console.log(obtenirInitiales("Omar Jador"))