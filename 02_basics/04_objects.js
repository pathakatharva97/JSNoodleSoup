//with
// const tinderUser = new Object()  //{}  //This is a singleton object

const tinderUser = {} //{}      //This is a non singleton object

tinderUser.id = '123abc'
tinderUser.name = 'George'
tinderUser.isLoggedIn = false   

// console.log(tinderUser);   //{ id: '123abc', name: 'George', isLoggedIn: false }


const regularUser ={
    email: "some@gmail.com",
    fullname: {
        userFullName: {
            firstname: "Atharva",
            lastname: "Pathak"
        }
    }
}

// console.log(regularUser.fullname); //{ userFullName: { firstname: 'Atharva', lastname: 'Pathak' } }
// console.log(regularUser.fullname.userFullName); 
// console.log(regularUser.fullname.userFullName.firstname); //Atharva

//Optional chaining (?)- adds security for API calling works same as if-else
// console.log(regularUser.fullname?.userFullName); //{ firstname: 'Atharva', lastname: 'Pathak' }

//================ Combining Objects ==========
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } //Object inside object
// const obj3 = Object.assign({}, obj1, obj2, obj4)
//Object assign(target, source) MDN  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

const obj3 = {...obj1, ...obj2} //Using Spread Operator
// console.log(obj3);          //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const users = [                 //Data that we receive from db in form of array
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email                  //this way we can retrive data from the above array
console.log(tinderUser);        //{ id: '123abc', name: 'George', isLoggedIn: false }

// console.log(Object.keys(tinderUser));  //Array of 'keys' is reuturned //[ 'id', 'name', 'isLoggedIn' ]

// console.log(Object.values(tinderUser)); //Array of 'values' is reuturned    //[ '123abc', 'George', false ]

// console.log(Object.entries(tinderUser));    //every key value is stored in array //[ [ 'id', '123abc' ], [ 'name', 'George' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));   //can check if there is any value defined in our object //true

//====================================Object DESTRUCTURE============================

const course = {
    coursename: "js in a smartway",
    price: "999",
    courseInstructor: "Atharva"
}

// course.courseInstructor      //fetching

//const {courseInstructor} = course
const {courseInstructor: instructor} = course       //Object Desturucturing

// console.log(courseInstructor); //Atharva
console.log(instructor); //Atharva

//      JSON DATA
// {
//     "name": "atharva",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

//RandonUserME API //https://randomuser.me/api/
//JSON formatter https://jsonformatter.org/