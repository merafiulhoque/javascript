// function saymyname(){
//     console.log("R");
//     console.log("a");
//     console.log("f");
//     console.log("i");
    
// }

// saymyname()

// function add(n1, n2){
//     console.log(n1 + n2)
//     return (n1 + n2)
// }

// add(2,4)

// const a = add(2,5)
// console.log(a); // this will show undefined because return value is not defined

// function subtract(n1, n2){
//     let result = n1 - n2
//     return result
// }

// b = subtract(5,3)
// console.log(b);


// function loginmsg(username){    //username = "sam" ,,"sam" is a default value of username
//     if(username === undefined){
//         return `Please enter username!!!`
//     }
//     return `${username} just logged in.`
// }

// console.log(loginmsg());


//functions in objects

function addCartItem(val1 , val2 , ...num1 ){    // here ... is a rest operator
    return num1 ;
}

// console.log(addCartItem(200,300,100,500,600));

const user ={
    username : "Rafiul",
    price : 299
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject["username"]} and price is ${anyobject.price}!!!!!`);
    
}

// handleObject(user)

const newArr = [1,2,4,5,1,4,8,8]

function handlearray(getArray){
    return getArray.sort()
}

console.log(handlearray(newArr))