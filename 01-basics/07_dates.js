//Dates

let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString())
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleString());

// console.log(myDate.toJSON());

let newDate = new Date(1999 , 9,31)
// console.log(newDate.toLocaleString());

let newDate2 = new Date("10-31-1999")
// console.log(newDate.toLocaleString());

let myTime = Date.now()

// console.log(myTime);
// console.log(newDate2.getTime());

// console.log(myTime/(3600*1000*24*365).toPrecision(2))
let myAge = myTime/(3600*1000*24*365).toFixed(2)

console.log(myAge);

console.log(newDate.toLocaleString('default', {
    weekday : "long",
    month : "long"
}))


console.log(`My Date of Birth is ${newDate.getDate()} day of ${newDate.toLocaleString('default' , {month : 'long'})} of the Year ${newDate.getFullYear()} and that is ${newDate.toDateString()}`)

