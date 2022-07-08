let str = 'kpkkp';

let max = str.split('p')[0].length


for (let k of str.split('p')) {
    if (max < k.length) {
        max = k.length
    }
}

console.log(max);
