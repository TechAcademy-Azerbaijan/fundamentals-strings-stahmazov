let str = '328';


if (parseInt(str[0]) > parseInt(str.slice(-1))) {
    console.log(str[0])
} else{
    console.log(str.slice(-1))
}
