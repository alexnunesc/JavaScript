










let contar = document.querySelector('input#contar')

contar.addEventListener('click', cont)

function cont(){
    
    let inicio1 = document.querySelector('input#inicio')
    let fim1 = document.querySelector('input#fim')
    let passo1 = document.querySelector('input#passo')
    let res = document.querySelector('div#resultado')

    
    if (inicio1.value.length == 0 || fim1.value.length == 0 || passo1.value.length == 0) {
        alert('error')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(inicio1.value)
        let f = Number(fim1.value)
        let p = Number(passo1.value)
        if (p <= 0) {
            alert('Passo invadilo, será considerado PASSO 1')
            p = 1
        }
        if (i < f) {
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            for(let c = i;  c >=f; c-= p){
                res.innerHTML += ` ${c} \u{1F3C1}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
