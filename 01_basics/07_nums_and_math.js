const score = 400
// console.log(score); //400

const balance = new Number(100) // To define that 'balance' is hardcoded to a "Number" datatype
// console.log(balance); //[Number: 100]

// console.log(balance.toString().length); //3

// console.log(balance.toFixed(2)); //100.00

const otherNumber = 123.7995
// console.log(otherNumber.toPrecision(3)); //124 -- Roundsoff to the nearest Integer


const hundreds = 1000000
// console.log(hundreds.toLocaleString()); //1,000,000 - US specific
// console.log(hundreds.toLocaleString('en-IN')); //10,00,000 - Indian Standard

// ------------------------------ For DSA and related Operations---------------------
// console.log(Number.MAX_VALUE); //1.7976931348623157e+308
// console.log(Number.MIN_VALUE); //5e-324
// console.log(Number.MAX_SAFE_INTEGER); //9007199254740991

// -------------------------------- MATH ---------------------------------------------

// console.log(Math);
// console.log(Math.abs(-4)); //  4
// console.log(Math.round(4.8));   //5
// console.log(Math.ceil(4.2));    //5
// console.log(Math.floor(4.2));   //4
// console.log(Math.min(5, 8, 4, 9, 44, 6, 21));   //4
// console.log(Math.max(5, 8, 4, 9, 44, 6, 21));   //44

console.log(Math.random()); // gives us value between 1,0 //0.7083704249880967
console.log((Math.random()*10) + 1); //7.001995764774555
console.log(Math.floor(Math.random()*10) + 1); //10

// General way to Keep in mind when we want to have random values between two numbers for any game or similar project
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min) //18