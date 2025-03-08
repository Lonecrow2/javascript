let num = [5,8,2,9,3]

num.push(1)
num.sort()
console.log(num)
console.log(`O array possui ${num.length}`)
console.log(`O primeiro elemento do array é ${num[0]}`)
let pos = num.indexOf(4)
if (pos== -1){
    console.log(`O valor não foi encontrado`)
}else {
    console.log(`O valor está na posição ${pos}`)
}