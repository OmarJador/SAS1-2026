function remplacerElement(tab, ancien, nouveau){

    let index = tab.indexOf(ancien);
    tab.splice(index, 1, nouveau)

    console.log(tab)
}
remplacerElement(["A", "B", "C"], "B", "X")