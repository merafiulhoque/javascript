// 1.primitive data types
/* primitive data types are 7 types
String , Number , Boolean , null , undefined , Symbol , BigInt
*/
//2. non Primitive data types
/*
 reference
Array , Objects , Functions 
*/

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


const bigNumber = 125414521145225236654415452n // this is a BigInt

const fruits =["apple","guave","grape","pineapple"]

let myObj = {
    myName : "Rafiul" ,
    age : 22,
    sex : "Male", 

}

const myFunction = function(){

return console.log("Hello world");

}


console.log(typeof myObj)

console.log(myFunction());

//***********************Memory**********************************/
//two types 1. stack memory (Primitive) , 2. Heap memory (non primitive)

let myyoutubename = "damnbit"
let anothername = myyoutubename 
console.log(myyoutubename)
console.log(anothername)

let userOne = {
    name:"a@gmail.com",
    upi:"abc@paytm"
}

let user = userOne 

console.log(user)

userOne.name = "b@gmail.com"
console.log(user);
console.log(userOne)

user.name ="c@gmail.com"

console.log(user.name)





