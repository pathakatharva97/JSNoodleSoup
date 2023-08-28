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
// console.log(isLoggedIn);
// console.log((Boolean), isLoggedIn);

let booleanIsLoggedIn = Boolean (isLoggedIn)
// console.log(booleanIsLoggedIn); //gives o/p true

// 1 => true; 0 => false
//"" => false
//"atharva" => true

let randomNumber = 30
let stringNumber = String(randomNumber)
// console.log(randomNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);
// console.log(randomNumber + 5); //35
// console.log(stringNumber + 5); //305  (as 30 is treated as a string and 5 as a suffix)


// ******************************* Operations *************************************

let value = 5

let negValue = -value
// console.log(negValue);  //-5

// console.log(2+2); //4
// console.log(2-2); //0
// console.log(2*2); //4
// console.log(2**2); //2 to power of 2 => 4
// console.log(2/3); //0.66
// console.log(2%3); //2 Rem

let str1 = "hello"
let str2 = " atharva"
let str3 = str1 + str2
// console.log(str3); //hello atharva

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122 Here first datatype is generally preferred for the entire
// console.log(1 + 2 + "2"); //32 Here 1 and 2 are numbers and 2 is added as suffix string
// console.log(+true); //1
// console.log(true+); //error
// console.log(+""); //0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2    //this is not a clean code

let gameCounter = 100
gameCounter++
console.log(gameCounter); //101 // Read prefix and postfix for JS from MDN

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion