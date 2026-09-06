function verifierMotDePasse (motDePasse){

    if(motDePasse.length>=8 && motDePasse.includes("@")){

        return "verification de ("+motDePasse+") ➔ "+true;

    }return "verification de ("+motDePasse+") ➔ "+false;
}

// console.log(verifierMotDePasse("code1234"));
console.log(verifierMotDePasse("code@1234"));
