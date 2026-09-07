function obtenirProduitsEnPromo(produits){

    let promo = produits.filter(promo => promo.enPromo === true);
    console.log(promo)

}

obtenirProduitsEnPromo([{nom: "PC", enPromo: true}, {nom: "Souris", enPromo: false}])