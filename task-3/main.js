let str = '255222';
let count2 = 0
let count5 = 0

for (let i of str) {
    if (i == '2') {
        count2++
    } else {
        count5++
    }
}

if (count2 > count5) {
    console.log('2')
} else if (count5 > count2) {
    console.log('5')
} else {
    console.log('=')
}
