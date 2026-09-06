function obtenirHeureActuelle () {
    let HH = new Date().getHours();
    let MM = new Date().getMinutes();
    let SS = new Date().getSeconds();
    let heure = HH+":"+MM+":"+SS;
    return (("le temps est :")+heure);

}

console.log(obtenirHeureActuelle());