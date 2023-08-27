const accountId = 2191;
let accountEmail = "atharva@gmail.com";
var accountPassword = "12345";
accountCity = "Aurangabad";
let accountState

//accountId = 2   //not allowed to changed as it is a const

accountEmail = "abc@gmail.com"
accountPassword = "212121"
accountCity = "Pune"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
