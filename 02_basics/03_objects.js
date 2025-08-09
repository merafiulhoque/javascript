// singleton objects built with constructor  ... Object.create

//object literals


const mySym = Symbol("key1")
const jsuser = {
    name: "Rafiul",
    "fullname":"Rafiul Hoque",
    age: 32,
    sex: "M",
    email: "rafi@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["monday","thursday"],
    [mySym]: "MYSYMBOL!"
}


// console.log(jsuser);
// console.log(jsuser.isLoggedIn);
// console.log(jsuser["sex"])
// console.log(jsuser["fullname"]);
// console.log(jsuser[mySym]);

jsuser.age = 24
jsuser.email = "pqr@gmail.com"
// Object.freeze(jsuser)
jsuser.email = "abc@google.com"
jsuser.age = 30
// console.log(jsuser);

jsuser.greeting = function(){
    console.log("Hello JS users!!!!")
}

console.log(jsuser.greeting());
console.log(jsuser.greeting);

jsuser.greeting2 = function(){
    console.log(`Hello ${this["fullname"]} , welcome onboard!!!!!`) // "this" is used for same object reference
}

console.log(jsuser.greeting2());
