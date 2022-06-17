function somar() {
    var t1 = document.querySelector('input#txtn1')
    var t2 = document.querySelector('input#txtn2')
    var res = document.querySelector('div#res')
    //Selecionar elementos
    var n1 = Number(t1.value)
    var n2 = Number(t2.value)
    //transformando string em number

    var s = n1 + n2
    res.innerHTML = `${n1} + ${n2} = <strong> ${s}</strong>`
    //para o valor da VAR s ir direto para o texto da div res.
}
var ip = document.querySelector('div#so')
ip.addEventListener('mouseenter', so)
function so() {
    ip.style.background = 'black'
}
