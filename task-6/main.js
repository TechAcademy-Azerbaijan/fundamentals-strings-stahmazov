let str = 'Hello world! Hello,    country!';

let arr = str.split(' ')
let count = 0

for (let i of arr) {
    if (i.length > 1) {
        count++
    }
}
console.log(count)
