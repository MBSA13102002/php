let names = "M.B.SAI ADITYA"
// console.log(names.replace(".",' '))
namesd = ''
for (i = 0; i < names.length; i++) {
    if (names.charAt(i) == '.'||names.charAt(i) == '#'||names.charAt(i) == '$'||names.charAt(i) == '['||names.charAt(i) == ']') {
        namesd = namesd + " "
    }
    else {
        namesd = namesd + names.charAt(i)
    }
}
// names=names.replace(".",' ')
// console.log(names.replace(".",' '))
console.log(namesd)