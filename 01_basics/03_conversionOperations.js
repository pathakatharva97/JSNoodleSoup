let score = "33abc"

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

//NAN is a bug of JS
// "33" => 33
// "33abc" =>NaN (Not an Number)
// true =>1 ; false=>0

let isLoggedIn = 1
console.log(isLoggedIn);
console.log((Boolean), isLoggedIn);

let booleanIsLoggedIn = Boolean (isLoggedIn)
console.log(booleanIsLoggedIn); //gives o/p true

// 1 => true; 0 => false
//"" => false
//"atharva" => true

let randomNumber = 30
let stringNumber = String(randomNumber)
console.log(randomNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
console.log(randomNumber + 5); //35
console.log(stringNumber + 5); //305  (as 30 is treated as a string and 5 as a suffix)