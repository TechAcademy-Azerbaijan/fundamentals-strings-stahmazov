let str = 'Hello world! I learn to codegge'

let arr_ayiran = ['!', '.', '?']
let last_simvol_index = 0

for (let i = str.length-1; i > 0; i--){
    if ((str[i] == '!') | (str[i] == '.') | (str[i] == '?')) {
        last_simvol_index = i
        break
    }
}


if (last_simvol_index === str.length - 1) {
    let cumle_sayi = 0
    for (let i = 0; i < str.length; i++) {
        if ((str[i] == '!') | (str[i] == '.') | (str[i] == '?')) {
            cumle_sayi++
        }
    }
    console.log(cumle_sayi)
} else {
    let cumle_sayi = 1
    for (let i = 0; i < str.length; i++) {
        if ((str[i] == '!') | (str[i] == '.') | (str[i] == '?')) {
            cumle_sayi++
        }
    }
    console.log(cumle_sayi)
}
