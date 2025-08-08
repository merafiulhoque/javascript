// singleton objects built with constructor  ... Object.create

//object literals


const mySym = Symbol("key1")
const jsuser = {
    name: "Xzy",
    "fullname":"XYZ pqr",
    age: 32,
    sex: "M",
    email: "xyz@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["monday","thursday"],
    [mySym]: "MYSYMBOL!"
}

// console.log(jsuser);
console.log(jsuser.isLoggedIn);
console.log(jsuser["sex"])
console.log(jsuser["fullname"]);
console.log(typeof jsuser[mySym]);

jsuser.age = 24
Object.freeze(jsuser)
jsuser.age = 30
console.log(jsuser);
