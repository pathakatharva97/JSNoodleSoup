// =========================================== Primitive ===============================

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
// Js is a dynamically typed


const employeeId = undefined; 
const outsideTemp = null

const id = Symbol ('123')
const anotherId = Symbol ('123')
// console.log(id === anotherId); //false. Even if Symbol stores same data, they are different

const bigNumber = 1646843216845613484n
console.log(typeof bigNumber); //bigint


//===================================Reference (Non - Primitive) =========================
// Array, Objects, Functions

const fruits = ["apple", "banana", "mango"]

let myObj = {
    name: "ATharva",
    age: 22,
} //inside curly braces is Object in Js

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myObj); //object
console.log(typeof myFunction); //function-object

/*
    typeof Operator Results

Type of val =>   	Result=>

Undefined =>	"undefined"
Null        	"object"
Boolean	        "boolean"
Number	        "number"
String	        "string"
Object(native and does not implement [[Call]]) => 	"object"
Object(native or host and does implement [[Call]]) => 	"function"
Object(host and does not implement [[Call]])	=> Implementation-defined except may not be "undefined", "boolean", "number", or "string".

// https://262.ecma-international.org/5.1/#sec-11.4.3
*/