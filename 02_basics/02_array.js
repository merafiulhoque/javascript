const marvel_heroes = ["thar","ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]

marvel_heroes.push(dc_heroes)
console.log(marvel_heroes[3][0])
marvel_heroes.concat(dc_heroes)
console.log(marvel_heroes)


const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allHeroes);

marvel_heroes.push("zarvis","hulk")
console.log(marvel_heroes)
marvel_heroes.pop()
console.log(marvel_heroes);

const all_new_heroes =[...marvel_heroes , ...dc_heroes]
console.log(all_new_heroes);

const newArr = [1,2,3,[4,5,6,7],8,9,10,[11,12,13,[14,15,16,[17,18,19]]]]
console.log(newArr);

let readable_array = newArr.flat(Infinity)
console.log("Readable array: ", readable_array);

console.log(Array.isArray("Rafiul"))
console.log(Array.from("Rafiul"))

console.log(Array.from({name: "Rafiul"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))
