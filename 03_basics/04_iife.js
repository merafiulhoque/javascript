// immediately invoked function expression

const num = 20 ;
const name = "john";
(function one(a){  //this is a Named IIFE
    console.log(`DB connected!!! ${a}`);
    
})(30);

( (name) =>{ //This is a unnamed IIFE
    console.log(`Hey ${name}, DB connected again!!!!`);
    
} )("Sam");

