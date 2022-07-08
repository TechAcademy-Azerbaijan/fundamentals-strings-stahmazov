let str = '+5-2+4-m/n*2:4';

let emeller = ['+', '-', '*']
let count = 0

for (let i of str) {
    for (let j of emeller) {
        if (i == j) {
            count++
        }
    }
}
console.log(count)
