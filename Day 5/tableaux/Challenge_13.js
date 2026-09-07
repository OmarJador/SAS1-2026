function trouverPremierMajeur(utilisateurs){

    let majeur = utilisateurs.find(majeur => majeur.age>=18)

    console.log(majeur)
}

trouverPremierMajeur([{nom: "Lina", age: 18}, {nom: "Amine", age: 20}])