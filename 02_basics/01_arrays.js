// arrays

const myarr = [1,2,5,1,4,5,7,9] //declaration type

console.log(myarr[1]);


const newArr =  new Array(1,2,5,1,4,5,7) // another declaration type

//array methods

myarr.push(8)
console.log(myarr)
myarr.pop()

myarr.unshift(0)
console.log(myarr)
myarr.shift()
console.log(myarr)

console.log(myarr.includes(8));
console.log(myarr.indexOf(9));

const newArr1 = myarr.join()
console.log(newArr1);

console.log("A" , myarr);

const myn1 = myarr.slice(1,5)
console.log(myn1);

console.log("B" , myarr)

const myn2 = myarr.splice(1,5)
console.log("spliced" ,myn2);

console.log("C" , myarr);


// slice just output the starting index and (ending index -1 )
//splice snatches the values from starting index to ending index(including end index also) and changes the original array