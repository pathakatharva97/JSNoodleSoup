// Strings can be defined using single quotes ('') or using double quotes(""). Both are same
//DECLARING a STRING 
//1
const name = "atharva"
const repoCount = 50

//console.log(name + repoCount + " Value"); //old way

// New way which is used is using `` backtick - inter polation
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//2
const gameName = new String('Atharva-hc')

// console.log(gameName[0]); //A //this type of String is an array with index as key and content as value
// console.log(gameName.__proto__);   //object type //{}

// console.log(gameName.length); //10
// console.log(gameName.toUpperCase()); //ATHARVA-HC
// console.log(gameName.charAt(6)); //index //a
// console.log(gameName.indexOf('v')); //5

const newString = gameName.substring(0,4) //cnanot give negative indices in 'substring'
// console.log(newString); //Atha

const string1 = gameName.slice(0,4)
// console.log(string1); //Atha

const string2 = gameName.slice(-8,8) //can give negative indices as well in 'slice'
// console.log(string2); //harva-

const newStringOne = "   Atharva               "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://atharva.com/atharva%20pathak"

console.log(url.replace('%20', '-')); //https://atharva.com/atharva-pathak

console.log(url.includes('ravi')); //returns boolean - false

const string3 = "apple-mango-guava-grapes"
console.log(string3.split('-'));   //[ 'apple', 'mango', 'guava', 'grapes' ]
//split - splits the given string and returns an string array 

//Read methods on String from MDN as String is very important