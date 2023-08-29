// console.log(2 > 1) //returns boolean
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 >= 1)

// console.log("2" > 1) //true => Js converts string to an interger while comparing 
// console.log("02" > 1) //true

console.log(null >> 0) //false
console.log(null == 0)//false
console.log(null >= 0)//true
// The reason is that an equality cehck = and comaprisons < > >= <= work differently.
//Comparisons convert null to a number, treating it as 0
// Thats why [null >= 0] is true while [null > 0] is false

console.log(undefined == 0); //false
console.log(undefined > 0);  //false
console.log(undefined < 0);  //false

// ===
console.log("2" === 2); //false Here for triple equal, string wont be converted and compared to an interger. 

