let str = 'I am programming on Javascript.';

let first = 0
let last = 0
for (let i = 0; i < str.length; i++) {
    if (str[i]==' ') {
        first = i
        break
    }
    else {
        first = -1
    }
}

for (let i = str.length - 1; i > 0; i--) {
    if (str[i]==' ') {
        last = i
        break
    }
    else {
        last = -1
    }
}
if (first == -1) {
    console.log(-1)
} else {
    console.log(first);
    console.log(last);
}
