let product = {
    name:"milk",
    price:1,
    category:"food",
    quantity:0,
    available: ""
}

if(product.quantity>0){product.available = "Produit valide"}else{product.available = "Produit non valide"}

console.log("Name : ",product.name)
console.log("Prix : ",product.price)
console.log("Category : ",product.category)
console.log("Availability : ",product.available)
console.log("Total stock : ",product.price * product.quantity)
