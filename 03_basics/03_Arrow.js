// const user ={
//     username : "Rafiul",
//     price: 399,
//     welcomemsg: function(){
//         console.log(`Hello ${this.username}, Welcome to this website!!!!`);
//         console.log(this);
        
//     }
// }

// user.welcomemsg()
// user.username = "Sammy"
// user.welcomemsg()
// console.log(this)/



// const chai = function(){
//     username : "Rafiul"
//     console.log(this)
//     console.log(this.username)
// }

const chai = () => {
    username : "Rafiul"
    console.log(this)
    console.log(this.username)
}
//chai()

// const add = (num1 , num2) => {
//     return num1 + num2
// }
// const add = (num1,num2) => num1 + num2

// console.log(add(4,7))

const arrow_ret_object = () => ({username:"rafi", price:299})

console.log(arrow_ret_object())