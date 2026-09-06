function masquerCarte(numeroCarte) {
    let nmbreCacher = numeroCarte.slice(12).padStart(16, "*")
    return nmbreCacher
}

console.log(masquerCarte("1234567890123456"))