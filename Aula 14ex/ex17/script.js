//alert('Olá, Mundo!')






/*
let numero = 2
 for(c = 1; c <= 10; c++){
    s = numero * c
    console.log(`${numero} x ${c} = ${s}`)
 }
*/
let numero = document.querySelector('input#numero')

let contar = document.querySelector('input#contar')
contar.addEventListener('click', res)

let li = document.querySelector('div#li')


function res(){
    li.innerHTML = "Digite um número: "
    let n = Number(numero.value)
    if (numero.value == "") { //checagem para ver se está vazio o campo "numero"
        alert('O campo não pode está vazio')
        
    } else {
        for(let c = 1; c <= 10; c++){
            let s = n * c
            li.innerHTML +=`<br> ${n} x ${c} = ${s} <br>`
        }
    }
    c = 1 //reseta o contado para que seja possivel fazer umma consultar, do contrario o C estaria sempre valendo 10 depois da primera consulta.
}