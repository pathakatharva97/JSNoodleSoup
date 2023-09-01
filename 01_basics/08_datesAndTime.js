// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate); //object of Date

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 23, 55, 53, 8)
// let myCreatedDate = new Date("05/10/2023")
let myCreatedDate = new Date("05-10-2023")

console.log(myCreatedDate.toLocaleString()); //1/23/2023, 11:55:53 PM
// console.log(myCreatedDate.toDateString()) //Mon Jan 23 2023

let myTimeStamp = Date.now()
// console.log(myTimeStamp); //1693574786082
// console.log(myCreatedDate.getTime()); //1683676800000 in ms

// console.log(Math.floor(Date.now()/1000)); //Divide by 1000 to get in sec

// console.log(Math.floor(Date.now()/(1000 * 60 * 60))); //in Hrs

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

console.log(`Day is ${newDate.getDay()} and the time is ${newDate.getTime()} and the Month is ${newDate.getMonth() + 1}`)
//Day is 5 and the time is 1693575441327 and the Month is 9

let date1 = newDate.toLocaleString('default',{
    weekday: "long",
    hour: "2-digit"
})
console.log(newDate.toLocaleString());
console.log(date1);