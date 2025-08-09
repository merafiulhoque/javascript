// // const user = new Object()  this is a singleton object
// user = {} // this is a non singleton object
// user.id = 12346789
// user.username = "Sam@123"
// user.password = "Sam@#$123"
// user.loggedin = false
// user.city = "kolkata"

// // console.log(user);

// const newuser = {
//     email: "rafi@google.com",
//     fullname: {
//         userfullname: {
//             firstname: "sam",
//             lastname: "bahdur"
//         }
//     }
// }

// // console.log(newuser.fullname.userfullname.lastname);

// obj1 = {1:"a",2:"b"}
// obj2 = {3:"a",4:"b"}
// obj3 = {5:"a",6:"b"}

// // const obj4 = {obj1,obj2}

// // obj4 = Object.assign({},obj1,obj2)
// obj4 = {...obj1 , ...obj2, ...obj3}

// // console.log(obj4);
// // console.log(obj1);

// // console.log(obj1 === obj4);

// users =[
//     {
//         id:123,
//         email: "123@g.com"
//     },
//     {
//         id:123,
//         email: "123@g.com"
//     },
//     {
//         id:123,
//         email: "123@g.com"
//     },
//     {
//         id:123,
//         email: "rafi@g.com"
//     }
// ]

// console.log(users[3]["email"]);

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

// console.log(user.hasOwnProperty("username"));

// destructuring of objects

course ={
    coursename : "JS",
    price: "999",
    courseInstructor: "Rafi"
}

// console.log(course["courseInstructor"]);

const {courseInstructor : instructor} = course // i have given name to course instructor

console.log(a);

