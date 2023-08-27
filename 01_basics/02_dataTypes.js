"use strict"; //treat all JS code as newer version

//alert(3 + 3)  // cannot use this syntax for alert in node. We are using nodeJS, not browser

console.log(3 + 3);

let name = "atharva"
let age = 23
let isLoggedIn = true

/* Range of datatypes
number => 2 to power 53
bigint (bigger integer)
string => ""
boolean => true, false
null => standalone value, can be given to an object
undefined => 
symbol => uniqueness

object
*/

console.log(typeof "ATharva") //shows us the dataType
console.log(typeof null)      //null is treated as an object
console.log(typeof undefined) //undefined is not treated as an object