let num = document.querySelector('input#num')
let numero = Number(num.value)

let adicionar =  document.querySelector('input#adicionar')
let cont = 0

function tabela(n){

    return valores(n)
    
}

adicionar.addEventListener('click', tabela)

let finalizar = document.querySelector('input#finalizar')
finalizar.addEventListener('click', fim)

function fim(){
    alert('Finalizar')
    valores
}

function valores(n){
    
    let selec = document.getElementById('selec')
    let item = document.createElement('option')
    item.text = `rhtbdhbfbv ${n}`
    selec.appendChild(item)
    alert('valores')
    cont++
}