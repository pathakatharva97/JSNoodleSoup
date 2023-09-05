// Objects -2 types

// singleton .
// IF we use constructor for making object then singleton will be used. But when we create objects by using literals, then Singleton will not be used

// Object.create

// object literals

const mySym = Symbol("key1")   //Symbol declaring


const JsUser = {                    //creating object  
    name: "Atharva",
    "full name": "Atharva Pathak", //this value can never be accessed with dot(.) Thats why we use 'JsUser["full name"]' for accessing data from an object
    [mySym]: "mykey1",   //initializing symbol in an object (with [])
    age: 18,
    location: "Jaipur",
    email: "ath@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//================Accessing Data from an Object=================================

// console.log(JsUser.email) //ath@google.com       //accessing object data

// console.log(JsUser["email"]) //ath@google.com    //This way should be used //when not using dot, we will have to use string key ("email") to access email data inside [] sq. brackets

// console.log(JsUser["full name"]) //accessing String "key" from an object

// console.log(JsUser[mySym])  //mykey1    //accessing symbol from an object
// console.log(typeof mySym); //symbol

//=============================Changing Data of an Object==========================

JsUser.email = "ath@chatgpt.com"    //overwriting value
// Object.freeze(JsUser)               //Freezes the object data and wont change hereafter
JsUser.email = "ath@microsoft.com"  //Wont overwrite as Obj is freezed
// console.log(JsUser);                //ath@chatgpt.com

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  //Learn this way //using String interpolation and then ${this.name} to print name from object
}
console.log(JsUser.greeting);  //[Function (anonymous)] //Function reference is passed without calling it // Important
console.log(JsUser.greeting()); //Hello JS user  //Calling function the right way
console.log(JsUser.greetingTwo()); //Hello JS user, Atharva