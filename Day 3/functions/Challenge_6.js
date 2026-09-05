function verifierMotDePasse (motDePasse){

    length = motDePasse.length;
    
    if(length>=8 && motDePasse.includes("@")){

        return "verification de ("+motDePasse+") ➔ "+true;


    }else{
        return "verification de ("+motDePasse+") ➔ "+false;
    }

}

// console.log(verifierMotDePasse("code1234"));
console.log(verifierMotDePasse("code@1234"));
