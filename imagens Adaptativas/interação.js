var int=document.querySelector('input')

int.addEventListener('mouseenter',mover)
int.addEventListener('mouseout',sair)

function mover(){
    int.style.background='rgb(243, 113, 232)'
}
function sair(){
    int.style.background='black'
}

var int1 = document.querySelector('input#voltar')
int1.addEventListener('mouseenter',m)
int1.addEventListener('mouseout',s)

function m(){
    int1.style.background='rgb(243, 113, 232)'
}
function s(){
    int1.style.background='black'
}

var total = document.querySelecto('input#numero')
var t1 = Number(total.value)

var res = document.querySelector('input#resul')

res.addEventListener('click', rest)

function rest(){

    var r = document.querySelector('div#r')
    if( total % 2 == 0){
        r.innerHTML = "PAR"
    }else if( t1 % 2 == 1) {
        r.innerHTML = "IMPAR"
    }else{
        r.innerHTML = total
    }
}