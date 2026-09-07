function trierParNoteEtNom(etudiants){

    etudiants.sort((a,b) => {

        if(b.note !== a.note){

            return b.note - a.note;

        }else{
            return a.nom.localeCompare(b.nom)
        }

    })
    
    return etudiants

}
console.log(trierParNoteEtNom([{nom: "Ahmed", note: 15},
    {nom: "Fatima", note: 16},
    {nom: "Karim", note: 20},
    {nom: "Hakim", note: 20},
    {nom: "Alaa", note: 20}]))