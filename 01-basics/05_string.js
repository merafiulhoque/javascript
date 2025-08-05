const myName = 'Rafiul Hoque'
let repoCount = 50

// console.log(`Hi!! my name is ${myName} , and my repocount is ${repoCount}.`)

const hername = new String("rafiul hoque")

// console.log(hername);

// console.log(hername.length);
// console.log(hername.toUpperCase())

// console.log(hername.charAt(3))
// console.log(hername.indexOf('i'))

let newstring = hername.slice(-12 , 1)
console.log(newstring)

const str1 = '     rafiul     '
console.log(str1)
console.log(str1.trim());

const url = "https://www.rafiul.com/rafiul%20hoque"

console.log(url.replace('%20',"_"))
console.log(url.includes('her'))
console.log(url.includes('rafiul'))

const str2 = "rafiul_hoque-is-good"

console.log(str2.split("_"))
console.log(str2.split("-"))
