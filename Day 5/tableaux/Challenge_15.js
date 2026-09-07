function calculerTotalPanier(panier){

    let total = panier.reduce((total, produit) => total + produit.prix * produit.quantite,0) 
    console.log(total)
}

calculerTotalPanier([{article: "banane", prix: 100, quantite: 2}, {article: "pomme", prix: 5, quantite: 1}])