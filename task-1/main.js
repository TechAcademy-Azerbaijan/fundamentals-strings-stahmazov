let str = '31,15,40'

let arr = str.split(',');

for (let i = 0; i < arr.length; i++){
    arr[i] = parseInt(arr[i])
}

let min = arr[0]

for (let i of arr) {
    if (i < min) {
        min = i
    }
}
console.log(min)
