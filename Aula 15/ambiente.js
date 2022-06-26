/*let num = [5, 8, 2, 9, 3];
console.log(`Nosso valor é ${num}`)
*/
/*
let num = [5, 8, 2, 9, 3];

num.sort()
num.push(1)
console.log(num);
console.log(`Nosso vetor tem ${num.length} posições`);
console.log(`O primeiro valor do vetor é ${num[0]}`)    q
*/
/*
let num = [5, 8, 2, 9, 3];
let pos = num.indexOf(2)

if (pos == -1) {
    console.log(`Valor não encontrado`)
} else {
    console.log(`O valor está nã posição ${pos}`)
}
*/

let num = [3, 4, 5, 8, 0]
for(let i = 0; i < num.length; i++){
    console.log(`${num.sort()[i]}`)
}