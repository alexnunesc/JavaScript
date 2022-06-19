


var dv = document.querySelector('div#area') //selecionei  objeto

dv.addEventListener('mouseenter',entrar)

dv.addEventListener('click',deu)

dv.addEventListener('mouseout', saliendo)

function entrar() {
    dv.innerHTML = 'Entraste'
    dv.style.background='orange'
}

function deu() {
    dv.innerHTML = 'Clicaste'
    dv.style.background='black'
}

function saliendo() {
    dv.innerHTML='Saliste...'
    dv.style.background='blue'
}