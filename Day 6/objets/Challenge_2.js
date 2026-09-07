const prompt = require("prompt-sync")();

let user = {
    username: "Ahmed",
    age: 22,
    city: "Marrakech",
    status: "student",
    email: ""
};

console.log("Username :",user.username)
console.log("Age :",user.age)
console.log('Ville :',user.city)
console.log("Status :",user.status)
user.age = parseInt(prompt("Changez votre age :"))
user.city = prompt('Changez votre ville :')
user.status = prompt("Changez votre status :")
user.email = prompt("Ajouter votre email :")
console.log("Username :",user.username)
console.log("Age :",user.age)
console.log('Ville :',user.city)
console.log("Status :",user.status)
console.log("Email :",user.email)
