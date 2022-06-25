//alert('Olá, Mundo!')






/*
let numero = 2
 for(c = 1; c <= 10; c++){
    s = numero * c
    console.log(`${numero} x ${c} = ${s}`)
 }
*/



let contar = document.querySelector('input#contar')
contar.addEventListener('click', tabuada)


function tabuada(){
    let numero = document.querySelector('input#numero')
    let tab = document.getElementById('seltab')

    if (numero.value.length == 0) {
        alert('Por favor. digite umnúmero!')
    } else {
        let n = Number(numero.value)
        tab.innerHTML = ''

        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = ` ${n} x ${c} = ${n*c} `
            tab.appendChild(item)
        }

    }
}