let s = "This is a cat sitting on a table"
let c = "t"

let count = 0;

for (let i of s) {
    if (i.toLowerCase() == c) {
        count++
    }
}
console.log(count)
