function getDiscount(age = 18, isStudent = false) {
    if (age >= 65) {
        return "You get a 10% discount";
    } else if (isStudent && age >= 18 && age <= 25) {
        return "You get a 5% discount";
    } else {
        return "No discount";
    }
}
console.log(getDiscount(80)); 
console.log(getDiscount(35, true));