function verifierEmail(email) {
    if(email.endsWith("@gmail.com")){
        return true
    }else{
        return false
    }
}
console.log(verifierEmail("test@gmail.com"))