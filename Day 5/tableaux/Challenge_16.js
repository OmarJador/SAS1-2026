function validerNotes(notes){

    let valide = notes.every(note => note>=10);
    let parfait = notes.some(note => note === 20)

    console.log({ toutesValides: valide, aUneNoteParfaite: parfait })

}
validerNotes([9, 10, 15, 19, 11])